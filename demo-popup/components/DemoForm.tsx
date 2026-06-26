"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", label: "IN" },
  { code: "+1", flag: "🇺🇸", label: "US" },
  { code: "+44", flag: "🇬🇧", label: "GB" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+971", flag: "🇦🇪", label: "AE" },
  { code: "+65", flag: "🇸🇬", label: "SG" },
];

const COURSES = [
  { value: "gmat", label: "GMAT" },
  { value: "gre", label: "GRE" },
  { value: "sat", label: "SAT" },
  { value: "admissions", label: "Admissions Consulting" },
  
];

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  course: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
}

interface DemoFormProps {
  onSuccess?: () => void;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{7,15}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid phone number";
  }
  if (!data.course) errors.course = "Please select a course";
  return errors;
}

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");

    // Simulate API call — replace with your actual endpoint
    await new Promise((res) => setTimeout(res, 1200));
    console.log("Submitted:", formData);

    setStatus("success");
    setTimeout(() => onSuccess?.(), 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-gray-900">You&apos;re booked!</p>
        <p className="text-sm text-gray-500 mt-1">We&apos;ll reach out shortly to confirm your session.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          autoComplete="name"
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900
            ${errors.name
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
              : "border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            }`}
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="email"
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900
            ${errors.email
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
              : "border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            }`}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1 ml-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-3 py-3 rounded-xl border border-gray-200 text-sm bg-white text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            autoComplete="tel"
            className={`flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900
              ${errors.phone
                ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              }`}
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone}</p>
        )}
      </div>

      {/* Course */}
      <div>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all cursor-pointer bg-white
            ${errors.course
              ? "border-red-400 bg-red-50 text-gray-500 focus:ring-2 focus:ring-red-200"
              : formData.course
              ? "border-gray-200 text-gray-900 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              : "border-gray-200 text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            }`}
        >
          <option value="" disabled>
            Interested Courses
          </option>
          {COURSES.map((c) => (
            <option key={c.value} value={c.value} className="text-gray-900">
              {c.label}
            </option>
          ))}
        </select>
        {errors.course && (
          <p className="text-xs text-red-500 mt-1 ml-1">{errors.course}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-white font-semibold text-sm tracking-wide
          bg-gradient-to-r from-indigo-600 to-rose-500
          hover:from-indigo-700 hover:to-rose-600
          active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
          transition-all duration-200 shadow-md hover:shadow-lg mt-2"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Booking your session…
          </span>
        ) : (
          "Book My Free Session"
        )}
      </button>
    </form>
  );
}
