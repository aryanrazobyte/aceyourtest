import gmatMicrobatchPoster from "@/assets/gmat-microbatch-poster.png";

export const GMAT_PROGRAM_IMAGES = {
  individual:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/5_toiten.png",
  group:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/4_xhhqwf.png",
  selfStudy:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/6_nkxrv7.png",
  microBatch:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782808747/Group_Classes_1_bk7jyj.png",
} as const;

export type GmatProgramPageConfig = {
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
  showMicrobatchPoster?: boolean;
  posterImage?: string;
};

export const gmatIndividualTutoring: GmatProgramPageConfig = {
  eyebrow: "GMAT Private Coaching",
  title: "GMAT Individual — One on One Tutoring",
  subtitle:
    "The most personalized GMAT Focus Edition experience with direct mentorship from Tarun Kaushik.",
  heroCta: "Book Private Coaching",
  image: GMAT_PROGRAM_IMAGES.individual,
  imageAlt: "GMAT individual one on one tutoring",
  intro: [
    "Every session is tailored around your strengths, weaknesses, learning style, and target score across Quant, Verbal, and Data Insights.",
    "Designed for ambitious MBA aspirants who need maximum personalization, flexible scheduling, and measurable score improvement.",
  ],
  price: "₹4,999",
  priceNote: "per hour",
  features: [
    "Personalized 1-on-1 GMAT Coaching",
    "Customized Study Plan & Score Strategy",
    "Comprehensive Diagnostic Assessment",
    "Official GMAT Study Material",
    "Exclusive, Instructor-Curated Study Notes",
    "100,000+ Curated Practice Questions",
    "20+ Sectional Mock Tests",
    "Quant, Verbal & Data Insights Mastery",
    "Adaptive Learning & Targeted Practice",
    "Detailed Performance Analytics",
    "Expert Error Analysis & Feedback",
    "Advanced Time Management Strategies",
    "Instant Doubt Resolution",
    "Flexible Scheduling (Weekdays & Weekends)",
    "Continuous Progress Tracking",
    "Results-Driven Score Improvement",
  ],
  idealFor: [
    "Students targeting 705–755+ scores",
    "Working professionals pursuing MBA",
    "Candidates with limited preparation time",
    "Applicants seeking maximum personalization",
  ],
  enquiryTitle: "Plan your GMAT private coaching",
  sidebarHighlights: [
    { label: "Format", value: "1-on-1" },
    { label: "Mentor", value: "Tarun Kaushik" },
    { label: "Practice Qs", value: "100,000+" },
    { label: "Fee", value: "₹4,999/hr" },
  ],
  metaTitle: "GMAT Individual One on One Tutoring — Premium Coaching | AceYourTest",
  metaDescription:
    "Elite 1-on-1 GMAT Focus Edition coaching with Tarun Kaushik. Personalized study plans, official materials, mock tests, and flexible pay-as-you-go sessions.",
  ogUrl: "/gmat/individual-tutoring",
};

export const gmatMicrobatchClasses: GmatProgramPageConfig = {
  eyebrow: "GMAT Micro Batches",
  title: "GMAT Micro Batch Sessions",
  subtitle:
    "Live expert-led micro batches with personalized mentoring, score strategy, and intensive GMAT Focus Edition preparation.",
  heroCta: "Enroll in a Micro Batch",
  image: GMAT_PROGRAM_IMAGES.microBatch,
  imageAlt: "GMAT micro batch coaching sessions",
  intro: [
    "Experience focused GMAT preparation in exclusive micro batches of up to 4 students — the perfect balance between private tutoring and group learning.",
    "Led by Tarun Kaushik with live classes, recording access, personalized mentoring, and continuous performance tracking.",
  ],
  price: "₹1,20,000",
  priceNote: "full program",
  features: [
    "Intensive 3-Month GMAT Preparation",
    "Live Expert-Led Classes with Recording Access",
    "Exclusive Micro Batches (Up to 4 Students)",
    "Personalized Mentoring & Score Strategy",
    "20+ Sectional Tests with Smart Analytics",
    "Quant, Verbal & Data Insights Mastery",
    "Customized Study Roadmap",
    "Targeted Practice & Assignments",
    "Expert Error Analysis",
    "Continuous Performance Tracking",
    "Advanced Test-Taking Techniques",
    "Flexible Online Learning",
  ],
  idealFor: [
    "Students targeting 655–705+ scores",
    "Learners who want small-group personalization",
    "MBA aspirants seeking mentor-led accountability",
    "Working professionals with structured timelines",
  ],
  enquiryTitle: "Join a GMAT micro batch",
  sidebarHighlights: [
    { label: "Student rating", value: "4.8 ★" },
    { label: "Students mentored", value: "10,000+" },
    { label: "Batch size", value: "Up to 4" },
    { label: "Duration", value: "3 months" },
    { label: "Sectional tests", value: "20+" },
    { label: "Fee", value: "₹1,20,000" },
  ],
  metaTitle: "GMAT Micro Batches — Small Group Coaching | AceYourTest",
  metaDescription:
    "Intensive GMAT micro batch program with Tarun Kaushik. Up to 4 students, live classes, recording access, personalized mentoring, and score strategy.",
  ogUrl: "/gmat/microbatch-classes",
  showMicrobatchPoster: true,
  posterImage: gmatMicrobatchPoster,
};

export const gmatGroupClasses: GmatProgramPageConfig = {
  eyebrow: "GMAT Group Preparation",
  title: "GMAT Group Classes",
  subtitle:
    "Elite interactive GMAT group preparation — learn, compete, improve, and succeed in focused cohorts.",
  heroCta: "Explore Group Classes",
  image: GMAT_PROGRAM_IMAGES.group,
  imageAlt: "GMAT group classes cohort preparation",
  intro: [
    "Master the GMAT Focus Edition in collaborative small batches with live instruction, peer learning, and direct mentor access.",
    "Ideal for students who thrive in competitive environments and want premium preparation at optimized cost.",
  ],
  price: "₹49,999",
  priceNote: "full program",
  features: [
    "50+ Hours of Live, Interactive Classes",
    "Small Batches (Maximum 10 Students)",
    "Personalized Study Plan & Daily Targets",
    "5,000+ GMAT-Focused Practice Questions",
    "20 Sectional Tests with Performance Analytics",
    "Official GMAT-Style Practice Material",
    "Exclusive, Instructor-Curated Study Notes",
    "Topic-Wise Quant, Verbal & Data Insights Practice",
    "Expert Test Strategy & Review Sessions",
    "Personalized Error Analysis & Feedback",
    "Instant Doubt Resolution During & Beyond Class",
    "Weekly Progress Reviews & Score Tracking",
    "Collaborative Learning with Peer Discussions",
    "Dedicated WhatsApp Support",
    "Class Recordings with 6-Month Access",
    "Optional 1-on-1 Mentoring",
  ],
  idealFor: [
    "Students targeting 655–705+",
    "Learners who thrive in competitive environments",
    "MBA aspirants seeking premium prep at optimized cost",
  ],
  enquiryTitle: "Join GMAT group classes",
  sidebarHighlights: [
    { label: "Batch size", value: "Max 10" },
    { label: "Live hours", value: "50+" },
    { label: "Practice Qs", value: "5,000+" },
    { label: "Fee", value: "₹49,999" },
  ],
  metaTitle: "GMAT Group Classes — Live Cohort Preparation | AceYourTest",
  metaDescription:
    "High-impact GMAT group classes with Tarun Kaushik. Small batches, 50+ live hours, mock tests, and collaborative cohort learning.",
  ogUrl: "/gmat/group-classes",
};

export const gmatSelfStudyPlan: GmatProgramPageConfig = {
  eyebrow: "GMAT Self Study",
  title: "GMAT Self Study Plan",
  subtitle: "Premium GMAT preparation with complete flexibility — structured roadmaps and elite study resources.",
  heroCta: "Get Self-Study Access",
  image: GMAT_PROGRAM_IMAGES.selfStudy,
  imageAlt: "GMAT self study plan resources",
  intro: [
    "Access recorded lessons, structured self-study roadmaps, and premium GMAT resources designed for independent learners.",
    "Build your Focus Edition score at your own pace with personalized strategy plans and comprehensive practice material.",
  ],
  price: "₹29,999",
  priceNote: "one-time",
  features: [
    "Recorded Lessons for complete flexibility",
    "Structured Self-Study Roadmap for guided preparation",
    "Personalized Strategy Plan based on diagnostic assessment",
    "5,000+ Practice Questions for concept mastery",
    "Exclusive Study Notes & Revision Material",
    "Step-by-Step Concept Modules for Quant, Verbal & DI",
    "Error Analysis Framework for continuous improvement",
    "Progress Tracking System to monitor performance",
    "Advanced Test Strategies for higher accuracy & speed",
    "Anytime, Anywhere Access for self-paced learning",
  ],
  idealFor: [
    "Independent learners",
    "Budget-conscious MBA applicants",
    "Students preparing alongside work commitments",
  ],
  enquiryTitle: "Get GMAT self-study access",
  sidebarHighlights: [
    { label: "Format", value: "Self-paced" },
    { label: "Practice Qs", value: "5,000+" },
    { label: "Access", value: "Anytime" },
    { label: "Fee", value: "₹29,999" },
  ],
  metaTitle: "GMAT Self Study Plan — Flexible Preparation | AceYourTest",
  metaDescription:
    "GMAT self-study mastery program with recorded lessons, structured roadmaps, 5,000+ questions, and personalized strategy planning.",
  ogUrl: "/gmat/self-study-plan",
};
