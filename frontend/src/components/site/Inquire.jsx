import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TABS = [
  { id: "consultation", label: "Consultation" },
  { id: "program", label: "Artist Program" },
  { id: "general", label: "General" },
];

export default function Inquire() {
  const [tab, setTab] = useState("consultation");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    concept: "",
    references: "",
    preferred_window: "",
    full_name: "",
    location: "",
    portfolio_url: "",
    instagram: "",
    years_experience: "",
    statement: "",
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
          inquiry_type: tab === "consultation" ? "consultation" : "general",
          concept: tab === "consultation" ? form.concept : null,
          references: tab === "consultation" ? form.references : null,
          preferred_window: tab === "consultation" ? form.preferred_window : null,
        });
      }
      setDone(true);
      toast.success("Inquiry received. We respond within 5 working days.");
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

  const switchTab = (id) => {
    setTab(id);
    setDone(false);
  };

  return (
    <section
      id="inquire"
      data-testid="inquire-section"
      className="relative bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)]"
    >
      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="overline">Chapter — 04 / Correspondence</span>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#E8E6E1] tracking-tight leading-[0.95] mt-6">
              Write to
              <br />
              <em className="italic font-light text-[#A3A3A0]">the atelier.</em>
            </h2>

            <div className="hairline my-10" />

            <div className="space-y-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[#A3A3A0]">
              <p>
                <span className="text-[#70706D]">Studio —</span> Lisbon · Mon–Sat
              </p>
              <p>
                <span className="text-[#70706D]">Email —</span>{" "}
                <a
                  href="mailto:atelier@obsidian.studio"
                  data-testid="contact-email-link"
                  className="text-[#E8E6E1] hover:text-[#6B8570] transition-colors"
                >
                  atelier@obsidian.studio
                </a>
              </p>
              <p>
                <span className="text-[#70706D]">Reply —</span> within 5 working days
              </p>
            </div>

            <p className="font-body text-[14px] text-[#70706D] mt-12 max-w-sm leading-relaxed">
              We do not operate a public booking calendar. Every collaboration
              begins with a written exchange.
            </p>
          </div>

          <div className="md:col-span-7">
            {/* Tabs */}
            <div className="flex flex-wrap gap-px bg-[rgba(232,230,225,0.08)] border border-[rgba(232,230,225,0.08)]">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  data-testid={`tab-${t.id}`}
                  onClick={() => switchTab(t.id)}
                  className={`flex-1 min-w-[120px] py-4 px-6 font-mono text-[10px] uppercase tracking-[0.28em] transition-colors ${
                    tab === t.id
                      ? "bg-[#E8E6E1] text-[#0A0A0C]"
                      : "bg-[#0A0A0C] text-[#A3A3A0] hover:text-[#E8E6E1]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {done ? (
              <div
                data-testid="inquiry-success"
                className="mt-12 border border-[rgba(232,230,225,0.12)] p-10"
              >
                <span className="overline" style={{ color: "#6B8570" }}>Received</span>
                <h3 className="font-display text-3xl md:text-4xl font-light text-[#E8E6E1] mt-4">
                  Your transmission has reached the atelier.
                </h3>
                <p className="font-body text-[15px] text-[#A3A3A0] mt-4 leading-relaxed max-w-md">
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
                    <Field label="Location" name="location" value={form.location} onChange={onChange} testId="field-location" />
                    <Field label="Years working" name="years_experience" value={form.years_experience} onChange={onChange} testId="field-years_experience" />
                    <Field label="Portfolio URL" name="portfolio_url" value={form.portfolio_url} onChange={onChange} testId="field-portfolio_url" />
                    <Field label="Instagram" name="instagram" value={form.instagram} onChange={onChange} testId="field-instagram" />
                    <Field
                      full
                      label="Statement of intent — why this atelier? *"
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
                      <Field label="Preferred window" name="preferred_window" value={form.preferred_window} onChange={onChange} testId="field-preferred_window" />
                    )}
                    {tab === "consultation" && (
                      <Field
                        full
                        label="Concept — describe the piece"
                        name="concept"
                        value={form.concept}
                        onChange={onChange}
                        textarea
                        testId="field-concept"
                      />
                    )}
                    {tab === "consultation" && (
                      <Field
                        full
                        label="Reference links (optional)"
                        name="references"
                        value={form.references}
                        onChange={onChange}
                        testId="field-references"
                      />
                    )}
                    {tab === "general" && (
                      <Field
                        full
                        label="Message"
                        name="concept"
                        value={form.concept}
                        onChange={onChange}
                        textarea
                        testId="field-message"
                      />
                    )}
                  </>
                )}

                <div className="md:col-span-2 mt-10 flex items-center justify-between gap-6 flex-wrap">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#70706D] max-w-md">
                    By submitting you agree to be contacted by Obsidian Atelier
                    regarding this inquiry.
                  </p>
                  <button
                    type="submit"
                    data-testid="submit-inquiry-btn"
                    disabled={submitting}
                    className="btn-sharp green"
                  >
                    {submitting ? "Sending —" : "Send inquiry →"}
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
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#70706D]">
        {label}
      </span>
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
