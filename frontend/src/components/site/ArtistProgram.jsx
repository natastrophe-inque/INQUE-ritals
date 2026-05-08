import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useReveal } from "../../hooks/useReveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ArtistProgram() {
  const ref = useReveal();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    artist: "",
    email: "",
    instagram: "",
    location: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.message.trim().length < 20) {
      toast.error("Please share a few sentences — 20 characters minimum.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/artist-applications`, {
        full_name: form.artist,
        email: form.email,
        location: form.location || null,
        instagram: form.instagram || null,
        statement: form.message,
      });
      setDone(true);
      toast.success("Application received.");
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
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)]"
    >
      <div className="px-6 md:px-12 py-32 md:py-40">
        <div ref={ref} className="reveal max-w-3xl mx-auto">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "#5E8B7E" }}>
              By invitation
            </p>
            <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] text-[#ECEAE4] tracking-[-0.02em] leading-[1.05] mt-8">
              Artist Program.
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#9E9E98] mt-8 max-w-md mx-auto leading-relaxed">
              A closed network for tattoo artists and studios. Wholesale Salvix, co-branded kits, editorial support.
            </p>
          </div>

          {done ? (
            <div data-testid="inquiry-success" className="mt-20 text-center">
              <h3 className="font-display italic text-3xl md:text-4xl font-light text-[#5E8B7E] tracking-tight">
                Application received.
              </h3>
              <p className="font-body text-[14px] text-[#6A6A65] mt-4">
                We respond personally within five working days.
              </p>
            </div>
          ) : (
            <form
              data-testid="program-form"
              onSubmit={submit}
              className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2"
            >
              <Field label="Artist or studio" name="artist" value={form.artist} onChange={onChange} required testId="field-artist" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required testId="field-email" />
              <Field label="Instagram" name="instagram" value={form.instagram} onChange={onChange} testId="field-instagram" />
              <Field label="Location" name="location" value={form.location} onChange={onChange} testId="field-location" />
              <Field
                full
                label="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                textarea
                testId="field-message"
              />

              <div className="md:col-span-2 mt-12 flex justify-center">
                <button
                  type="submit"
                  data-testid="submit-program-btn"
                  disabled={submitting}
                  className="btn-sharp green"
                >
                  {submitting ? "Sending —" : "Apply"}
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
