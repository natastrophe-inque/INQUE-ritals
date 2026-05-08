from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="OBSIDIAN ATELIER API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class InquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    inquiry_type: str = Field(description="consultation | salvix | general")
    concept: Optional[str] = Field(default=None, max_length=4000)
    references: Optional[str] = Field(default=None, max_length=2000)
    preferred_window: Optional[str] = Field(default=None, max_length=200)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    inquiry_type: str
    concept: Optional[str] = None
    references: Optional[str] = None
    preferred_window: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ArtistApplicationCreate(BaseModel):
    full_name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    location: Optional[str] = Field(default=None, max_length=120)
    portfolio_url: Optional[str] = Field(default=None, max_length=500)
    instagram: Optional[str] = Field(default=None, max_length=120)
    years_experience: Optional[str] = Field(default=None, max_length=40)
    statement: str = Field(min_length=20, max_length=5000)


class ArtistApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    location: Optional[str] = None
    portfolio_url: Optional[str] = None
    instagram: Optional[str] = None
    years_experience: Optional[str] = None
    statement: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"name": "OBSIDIAN ATELIER", "status": "online"}


@api_router.post("/inquiries", response_model=Inquiry, status_code=201)
async def create_inquiry(payload: InquiryCreate):
    if payload.inquiry_type not in {"consultation", "salvix", "general"}:
        raise HTTPException(status_code=400, detail="Invalid inquiry_type")
    obj = Inquiry(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)
    return obj


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    cursor = db.inquiries.find({}, {"_id": 0}).sort("created_at", -1)
    items = await cursor.to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/artist-applications", response_model=ArtistApplication, status_code=201)
async def create_artist_application(payload: ArtistApplicationCreate):
    obj = ArtistApplication(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.artist_applications.insert_one(doc)
    return obj


@api_router.get("/artist-applications", response_model=List[ArtistApplication])
async def list_artist_applications():
    cursor = db.artist_applications.find({}, {"_id": 0}).sort("created_at", -1)
    items = await cursor.to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
