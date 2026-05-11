import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const FORMSPREE = process.env.REACT_APP_FORMSPREE_ENDPOINT; // optional, e.g. https://formspree.io/f/xxx

const INITIAL = {
  name: "",
  studio: "",
  city: "",
  instagram: "",
  email: "",
  years: "",
  style: "",
  why: "",
  honest_feedback: "",
  shipping_address: "",
};

export default function ArtistProgram() {
  const ref = useReveal();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(INITIAL);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.why.trim().length < 20) {
      toast.error("Please share a few sentences on why you want to test SALVIX (20 chars min).");
      return;
    }
    setSubmitting(true);

    // Build a structured statement combining all program-specific answers
    // so they're searchable in the database AND mailable via Formspree.
    const statement = [
      `Studio / shop: ${form.studio || "—"}`,
      `City: ${form.city || "—"}`,
      `Years tattooing: ${form.years || "—"}`,
      `Style / specialty: ${form.style || "—"}`,
      ``,
      `Why test SALVIX?`,
      form.why,
      ``,
      `Open to honest feedback: ${form.honest_feedback || "—"}`,
      `Shipping address: ${form.shipping_address || "—"}`,
    ].join("\n");

    try {
      // 1) Always persist to backend
      await axios.post(`${API}/artist-applications`, {
        full_name: form.name,
        email: form.email,
        location: form.city || null,
        instagram: form.instagram || null,
        years_experience: form.years || null,
        statement,
      });

      // 2) If a Formspree endpoint is configured, also email it to inquerituals@gmail.com
      if (FORMSPREE) {
        try {
          await axios.post(FORMSPREE, {
            _subject: "INQUE — Artist Program application",
            ...form,
          });
        } catch (mailErr) {
          // non-fatal; backend already has it
          console.warn("Formspree forward failed:", mailErr);
        }
      }

      setDone(true);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="program"
      data-testid="program-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)] overflow-hidden"
    >
      {/* Faint spiral motif */}
      <div className="absolute -left-32 bottom-10 pointer-events-none">
        <Spiral size={420} stroke="#23463F" strokeWidth={0.5} opacity={0.08} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-3xl mx-auto">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "#5E8B7E" }}>
              Studio partnership
            </p>
            <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] text-[#ECEAE4] tracking-[-0.02em] leading-[1.05] mt-8">
              Artist Program.
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#9E9E98] mt-8 max-w-md mx-auto leading-relaxed">
              A curated partnership for tattoo studios and recovery-focused
              artists. Trial SALVIX in your room. Share honest, professional
              feedback. Help us elevate the standard of tattoo recovery.
            </p>
          </div>

          {done ? (
            <div data-testid="inquiry-success" className="mt-20 text-center">
              <h3 className="font-display italic text-3xl md:text-4xl font-light text-[#5E8B7E] tracking-tight">
                Your application has been received.
              </h3>
              <p className="font-body text-[14px] text-[#6A6A65] mt-6">
                We&rsquo;ll be in touch if selected.
              </p>
            </div>
          ) : (
            <form
              data-testid="program-form"
              onSubmit={submit}
              className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2"
            >
              <Field label="Name" name="name" value={form.name} onChange={onChange} required testId="field-name" />
              <Field label="Studio / shop" name="studio" value={form.studio} onChange={onChange} testId="field-studio" />
              <Field label="City" name="city" value={form.city} onChange={onChange} testId="field-city" />
              <Field label="Instagram handle" name="instagram" value={form.instagram} onChange={onChange} testId="field-instagram" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required testId="field-email" />
              <Field label="Years tattooing" name="years" value={form.years} onChange={onChange} testId="field-years" />
              <Field full label="Style / specialty" name="style" value={form.style} onChange={onChange} testId="field-style" />
              <Field full label="Why do you want to test SALVIX?" name="why" value={form.why} onChange={onChange} required textarea testId="field-why" />

              <label className="block py-4 md:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6A6A65]">
                  Are you open to giving honest feedback?
                </span>
                <select
                  name="honest_feedback"
                  value={form.honest_feedback}
                  onChange={onChange}
                  required
                  data-testid="field-honest-feedback"
                  className="line-input bg-[#0B0B0D]"
                >
                  <option value="">— Select —</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <Field full label="Shipping address" name="shipping_address" value={form.shipping_address} onChange={onChange} textarea testId="field-shipping" />

              <div className="md:col-span-2 mt-12 flex justify-center">
                <button
                  type="submit"
                  data-testid="submit-program-btn"
                  disabled={submitting}
                  className="btn-sharp green"
                >
                  {submitting ? "Sending —" : "Apply to Artist Program"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", required, textarea, full, testId }) {
  return (
    <label className={`block py-4 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6A6A65]">
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
