import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const FORMSPREE = process.env.REACT_APP_FORMSPREE_ENDPOINT;

const INITIAL = {
  name: "",
  studio: "",
  city: "",
  instagram: "",
  email: "",
  website: "",
  notes: "",
};

export default function ArtistProgram() {
  const ref = useReveal();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(INITIAL);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.notes.trim().length < 20) {
      toast.error("Please add a few sentences in Notes / Interest (20 chars min).");
      return;
    }
    setSubmitting(true);

    const statement = [
      `Studio / shop: ${form.studio || "—"}`,
      `City: ${form.city || "—"}`,
      `Instagram: ${form.instagram || "—"}`,
      `Website: ${form.website || "—"}`,
      ``,
      `Notes / Interest:`,
      form.notes,
    ].join("\n");

    try {
      await axios.post(`${API}/artist-applications`, {
        full_name: form.name,
        email: form.email,
        location: form.city || null,
        instagram: form.instagram || null,
        portfolio_url: form.website || null,
        statement,
      });

      if (FORMSPREE) {
        try {
          await axios.post(FORMSPREE, {
            _subject: "INQUE — Artist Partnership application",
            ...form,
          });
        } catch (mailErr) {
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
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.05)] overflow-hidden"
    >
      <div className="absolute -left-32 bottom-10 pointer-events-none">
        <Spiral size={360} stroke="#1F3A33" strokeWidth={0.5} opacity={0.08} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-3xl mx-auto">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.46em] text-[#6F8077]">
              Artist Partnership
            </p>
            <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] text-[#ECEAE4] tracking-[-0.02em] leading-[1.05] mt-10 max-w-2xl mx-auto">
              A curated partnership for
              <br />
              <em className="italic font-light text-[#9E9E98]">
                professional artists and studios.
              </em>
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#9E9E98] mt-10 max-w-xl mx-auto leading-[1.85]">
              Created for artists who care deeply about healing, recovery, and
              long-term tattoo integrity. Evaluate SALVIX and collaborate with
              INQUE as we redefine modern tattoo recovery.
            </p>
          </div>

          {done ? (
            <div data-testid="inquiry-success" className="mt-20 text-center">
              <h3 className="font-display italic text-3xl md:text-4xl font-light text-[#6F8077] tracking-tight">
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
              <Field label="Studio / Shop" name="studio" value={form.studio} onChange={onChange} testId="field-studio" />
              <Field label="City" name="city" value={form.city} onChange={onChange} testId="field-city" />
              <Field label="Instagram" name="instagram" value={form.instagram} onChange={onChange} testId="field-instagram" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required testId="field-email" />
              <Field label="Website (optional)" name="website" value={form.website} onChange={onChange} testId="field-website" />
              <Field full label="Notes / Interest" name="notes" value={form.notes} onChange={onChange} required textarea testId="field-notes" />

              <div className="md:col-span-2 mt-12 flex justify-center">
                <button
                  type="submit"
                  data-testid="submit-program-btn"
                  disabled={submitting}
                  className="btn-sharp green"
                >
                  {submitting ? "Sending —" : "Apply for Partnership"}
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
      <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#6A6A65]">
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
