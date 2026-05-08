import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Instagram } from "lucide-react";
import Spiral from "./Spiral";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TABS = [
  { id: "general", label: "General" },
  { id: "program", label: "Artist Program" },
  { id: "consultation", label: "Wholesale" },
];

export default function Contact() {
  const [tab, setTab] = useState("general");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", concept: "", references: "", preferred_window: "",
    full_name: "", location: "", portfolio_url: "", instagram: "", years_experience: "", statement: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (tab === "program") {
        await axios.post(`${API}/artist-applications`, {
          full_name: form.full_name,
          email: form.email,
          location: form.location || null,
          portfolio_url: form.portfolio_url || null,
          instagram: form.instagram || null,
          years_experience: form.years_experience || null,
          statement: form.statement,
        });
      } else {
        await axios.post(`${API}/inquiries`, {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          inquiry_type: tab === "consultation" ? "salvix" : "general",
          concept: form.concept || null,
          references: form.references || null,
          preferred_window: form.preferred_window || null,
        });
      }
      setDone(true);
      toast.success("Inquiry received. We respond within five working days.");
    } catch (err) {
      const msg = err?.response?.data?.detail
        ? typeof err.response.data.detail === "string"
          ? err.response.data.detail
          : "Please review the form and try again."
        : "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const switchTab = (id) => { setTab(id); setDone(false); };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      {/* Soft metallic green closing glow */}
      <div
        aria-hidden
        className="metal-glow"
        style={{
          width: "90vw",
          height: "60vw",
          left: "50%",
          bottom: "-30vw",
          transform: "translateX(-50%)",
          opacity: 0.7,
        }}
      />
      <div className="absolute -left-40 -bottom-40 pointer-events-none">
        <Spiral size={560} stroke="#1A3A34" strokeWidth={0.4} opacity={0.22} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="overline" style={{ color: "#5E8B7E" }}>Chapter — 04 / Contact</span>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#ECEAE4] tracking-tight leading-[0.95] mt-6">
              Write to
              <br />
              <em className="italic font-light text-[#9E9E98]">the house.</em>
            </h2>

            <div className="hairline-green my-10" />

            <div className="space-y-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#9E9E98]">
              <p>
                <span className="text-[#6A6A65]">Studio —</span> Toronto · Mon–Fri
              </p>
              <p>
                <span className="text-[#6A6A65]">Email —</span>{" "}
                <a
                  href="mailto:hello@inque.studio"
                  data-testid="contact-email-link"
                  className="text-[#ECEAE4] hover:text-[#5E8B7E] transition-colors"
                >
                  hello@inque.studio
                </a>
              </p>
              <p>
                <span className="text-[#6A6A65]">Reply —</span> within 5 working days
              </p>
              <a
                href="https://instagram.com/inque.studio"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-instagram"
                className="inline-flex items-center gap-3 mt-4 text-[#ECEAE4] hover:text-[#5E8B7E] transition-colors"
              >
                <Instagram size={14} strokeWidth={1.2} />
                <span>@inque.studio</span>
              </a>
            </div>

            <p className="font-body text-[14px] text-[#6A6A65] mt-12 max-w-sm leading-relaxed">
              For wholesale and Artist Program enquiries, please specify your
              studio handle and city — we read every message ourselves.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-px bg-[rgba(236,234,228,0.08)] border border-[rgba(236,234,228,0.08)]">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  data-testid={`tab-${t.id}`}
                  onClick={() => switchTab(t.id)}
                  className={`flex-1 min-w-[120px] py-4 px-6 font-mono text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    tab === t.id
                      ? "bg-[#23463F] text-[#ECEAE4]"
                      : "bg-[#0B0B0D] text-[#9E9E98] hover:text-[#ECEAE4]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {done ? (
              <div data-testid="inquiry-success" className="mt-12 border border-[rgba(94,139,126,0.28)] p-10 brushed-metal">
                <span className="overline" style={{ color: "#5E8B7E" }}>Received</span>
                <h3 className="font-display text-3xl md:text-4xl font-light text-[#ECEAE4] mt-4">
                  Your transmission has reached the house.
                </h3>
                <p className="font-body text-[15px] text-[#9E9E98] mt-4 leading-relaxed max-w-md">
                  We read every message personally. Expect a written reply within five working days.
                </p>
                <button
                  data-testid="reset-form-btn"
                  onClick={() => {
                    setDone(false);
                    setForm({
                      name: "", email: "", phone: "", concept: "", references: "",
                      preferred_window: "", full_name: "", location: "",
                      portfolio_url: "", instagram: "", years_experience: "", statement: "",
                    });
                  }}
                  className="btn-sharp mt-10"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                data-testid="inquire-form"
                onSubmit={submit}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
              >
                {tab === "program" ? (
                  <>
                    <Field label="Full name *" name="full_name" value={form.full_name} onChange={onChange} required testId="field-full_name" />
                    <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} required testId="field-email" />
                    <Field label="Studio location" name="location" value={form.location} onChange={onChange} testId="field-location" />
                    <Field label="Years working" name="years_experience" value={form.years_experience} onChange={onChange} testId="field-years_experience" />
                    <Field label="Portfolio URL" name="portfolio_url" value={form.portfolio_url} onChange={onChange} testId="field-portfolio_url" />
                    <Field label="Instagram" name="instagram" value={form.instagram} onChange={onChange} testId="field-instagram" />
                    <Field
                      full
                      label="Why INQUE? — your aftercare philosophy *"
                      name="statement"
                      value={form.statement}
                      onChange={onChange}
                      required
                      textarea
                      testId="field-statement"
                    />
                  </>
                ) : (
                  <>
                    <Field label="Name *" name="name" value={form.name} onChange={onChange} required testId="field-name" />
                    <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} required testId="field-email" />
                    <Field label="Phone (optional)" name="phone" value={form.phone} onChange={onChange} testId="field-phone" />
                    {tab === "consultation" && (
                      <Field label="Studio / Brand" name="preferred_window" value={form.preferred_window} onChange={onChange} testId="field-studio" />
                    )}
                    <Field
                      full
                      label={tab === "consultation" ? "Wholesale request — quantities, timeline" : "Message"}
                      name="concept"
                      value={form.concept}
                      onChange={onChange}
                      textarea
                      testId={tab === "consultation" ? "field-wholesale" : "field-message"}
                    />
                  </>
                )}

                <div className="md:col-span-2 mt-10 flex items-center justify-between gap-6 flex-wrap">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65] max-w-md">
                    By submitting you agree to be contacted by INQUE regarding this inquiry.
                  </p>
                  <button
                    type="submit"
                    data-testid="submit-inquiry-btn"
                    disabled={submitting}
                    className="btn-sharp filled-green"
                  >
                    {submitting ? "Sending —" : "Send →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", required, textarea, full, testId }) {
  return (
    <label className={`block py-4 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65]">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          data-testid={testId}
          className="line-input"
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          data-testid={testId}
          className="line-input"
        />
      )}
    </label>
  );
}
