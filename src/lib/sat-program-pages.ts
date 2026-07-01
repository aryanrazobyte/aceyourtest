export const SAT_PROGRAM_IMAGES = {
  individual:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781944317/7_c49tl5.png",
  group:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781944317/8_ie1fqq.png",
  microBatch:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782751324/Group_Classes_fwpsm2.png",
} as const;

export type SatProgramPageConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroCta: string;
  image: string;
  imageAlt: string;
  intro: readonly [string, string];
  price: string;
  priceNote: string;
  features: readonly string[];
  idealFor: readonly string[];
  enquiryTitle: string;
  sidebarHighlights: readonly { label: string; value: string }[];
  metaTitle: string;
  metaDescription: string;
  ogUrl: string;
};

export const satPrivateTutoring: SatProgramPageConfig = {
  eyebrow: "SAT Private Tutoring",
  title: "Private 1-on-1 Digital SAT Coaching",
  subtitle:
    "The most personalized Digital SAT experience with direct mentorship from Tarun Kaushik — tailored to your target score and US university goals.",
  heroCta: "Book Private SAT Coaching",
  image: SAT_PROGRAM_IMAGES.individual,
  imageAlt: "SAT individual private coaching classes",
  intro: [
    "Every session is tailored around your strengths, weaknesses, learning style, and target score across Math and Reading & Writing.",
    "Designed for ambitious students targeting 1450–1600 who need maximum personalization, flexible scheduling, and measurable score improvement.",
  ],
  price: "₹4,999",
  priceNote: "per hour",
  features: [
    "Personalized Math & Reading/Writing Training",
    "Individualized Study Roadmap",
    "Direct Mentorship from Tarun Kaushik",
    "5,000+ Premium Practice Questions",
    "40+ Sectional Practice Tests",
    "Digital SAT Adaptive Strategy",
    "Detailed Performance Analytics",
    "Expert Error Analysis & Feedback",
    "Flexible Weekday & Weekend Scheduling",
    "Continuous Progress Tracking",
    "Module Pacing & Time Management",
    "US University Admissions Guidance",
  ],
  idealFor: [
    "Students targeting 1450–1600 scores",
    "High schoolers with busy schedules",
    "Applicants to top US universities",
    "Candidates seeking maximum personalization",
  ],
  enquiryTitle: "Plan your SAT private coaching",
  sidebarHighlights: [
    { label: "Format", value: "1-on-1" },
    { label: "Mentor", value: "Tarun Kaushik" },
    { label: "Practice Qs", value: "5,000+" },
    { label: "Fee", value: "₹4,999/hr" },
  ],
  metaTitle: "SAT Private Tutoring — Elite 1-on-1 Digital SAT Coaching | AceYourTest",
  metaDescription:
    "Elite 1-on-1 Digital SAT coaching with Tarun Kaushik. Personalized study plans, 5,000+ practice questions, adaptive strategy, and flexible sessions at ₹4,999/hour.",
  ogUrl: "/sat/private-tutoring",
};
