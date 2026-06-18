import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  exam: z.string().min(1, "Select an exam"),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

export function EnquiryForm({ title = "Book a Free Consultation", compact = false }: { title?: string; compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-success/10 border border-success/30 p-6 text-center">
        <h3 className="font-display text-xl font-semibold text-navy">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Our mentor team will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-card ${compact ? "" : "sm:p-8"}`}>
      <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">Speak with a mentor — no obligations.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name} />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
        <Field label="Email" name="email" type="email" error={errors.email} className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-navy">Exam Interested In</label>
          <select name="exam" defaultValue="" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="" disabled>Select an exam</option>
            <option>GMAT</option>
            <option>GRE</option>
            <option>SAT</option>
            <option>Study Abroad</option>
            <option>Quantitative Aptitude</option>
          </select>
          {errors.exam && <p className="mt-1 text-xs text-destructive">{errors.exam}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-navy">Message (optional)</label>
          <textarea name="message" rows={3} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us your target score or university" />
        </div>
      </div>

      <button type="submit" className="mt-5 w-full inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
        Request Free Consultation
      </button>
      <p className="mt-3 text-xs text-muted-foreground text-center">By submitting, you agree to be contacted by AceYourTest.</p>
    </form>
  );
}

function Field({ label, name, type = "text", error, className = "" }: { label: string; name: string; type?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
