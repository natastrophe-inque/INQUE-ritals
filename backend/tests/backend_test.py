"""Backend tests for OBSIDIAN ATELIER inquiries and artist-applications."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fallback to frontend env file
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
def test_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "online"


# ---------- Inquiries ----------
class TestInquiries:
    def test_create_consultation(self, session):
        payload = {
            "name": "TEST_Consult User",
            "email": "test_consult@example.com",
            "phone": "+1-555-0100",
            "inquiry_type": "consultation",
            "concept": "Gothic blackwork sleeve concept",
            "references": "https://example.com/ref1",
            "preferred_window": "Spring 2026",
        }
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["inquiry_type"] == "consultation"
        assert data["concept"] == payload["concept"]
        assert "_id" not in data

    def test_create_general(self, session):
        r = session.post(f"{API}/inquiries", json={
            "name": "TEST_General",
            "email": "test_general@example.com",
            "inquiry_type": "general",
        })
        assert r.status_code == 201, r.text
        assert r.json()["inquiry_type"] == "general"

    def test_create_salvix(self, session):
        r = session.post(f"{API}/inquiries", json={
            "name": "TEST_Salvix",
            "email": "test_salvix@example.com",
            "inquiry_type": "salvix",
        })
        assert r.status_code == 201, r.text
        assert r.json()["inquiry_type"] == "salvix"

    def test_invalid_type_returns_400(self, session):
        r = session.post(f"{API}/inquiries", json={
            "name": "TEST_Bad",
            "email": "test_bad@example.com",
            "inquiry_type": "invalid_type",
        })
        assert r.status_code == 400

    def test_invalid_email_returns_422(self, session):
        r = session.post(f"{API}/inquiries", json={
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "inquiry_type": "general",
        })
        assert r.status_code == 422

    def test_list_inquiries_no_id_leak(self, session):
        r = session.get(f"{API}/inquiries")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 3
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "created_at" in it


# ---------- Artist Applications ----------
class TestArtistApplications:
    def test_create_valid(self, session):
        payload = {
            "full_name": "TEST_Artist Applicant",
            "email": "test_artist@example.com",
            "location": "Berlin, DE",
            "portfolio_url": "https://example.com/portfolio",
            "instagram": "@test_artist",
            "years_experience": "5",
            "statement": "I have been tattooing in fine line gothic style for many years.",
        }
        r = session.post(f"{API}/artist-applications", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and len(data["id"]) > 0
        assert data["full_name"] == payload["full_name"]
        assert data["email"] == payload["email"]
        assert data["statement"] == payload["statement"]
        assert "_id" not in data

    def test_create_iteration4_minimal_payload(self, session):
        """Iteration 4 frontend ArtistProgram.jsx payload: artist→full_name, message→statement.
        Only sends full_name, email, location, instagram, statement (no portfolio_url, no years_experience)."""
        payload = {
            "full_name": "TEST_Iter4 Artist",
            "email": "test_iter4@example.com",
            "location": "Toronto, CA",
            "instagram": "@iter4_artist",
            "statement": "Dedicated tattoo artist with a focus on fine-line minimal work, applying for the program.",
        }
        r = session.post(f"{API}/artist-applications", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["full_name"] == payload["full_name"]
        assert data["email"] == payload["email"]
        assert data["location"] == payload["location"]
        assert data["instagram"] == payload["instagram"]
        assert data["statement"] == payload["statement"]
        assert data.get("portfolio_url") is None
        assert data.get("years_experience") is None

        # Verify persistence
        r2 = session.get(f"{API}/artist-applications")
        assert r2.status_code == 200
        ids = [it["id"] for it in r2.json()]
        assert data["id"] in ids

    def test_short_statement_422(self, session):
        r = session.post(f"{API}/artist-applications", json={
            "full_name": "TEST_Short",
            "email": "test_short@example.com",
            "statement": "too short",
        })
        assert r.status_code == 422

    def test_list_apps(self, session):
        r = session.get(f"{API}/artist-applications")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
            assert "id" in it
