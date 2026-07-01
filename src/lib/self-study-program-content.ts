import gmatMicrobatchPoster from "@/assets/gmat-microbatch-poster.png";
import { GMAT_PROGRAM_IMAGES } from "@/lib/gmat-program-pages";
import type { MicrobatchProgramContent } from "@/lib/microbatch-program-content";

const GMAT_SELF_STUDY_VISUAL = GMAT_PROGRAM_IMAGES.selfStudy;

export const gmatSelfStudyContent: MicrobatchProgramContent = {
  exam: "GMAT",
  meta: {
    title: "GMAT Self Study Plan — Flexible Mastery Program | AceYourTest",
    description:
      "GMAT Focus Edition self-study program with Tarun Kaushik. Recorded lessons, structured roadmap, 5,000+ questions, personalized strategy — ₹29,999 one-time.",
    ogTitle: "GMAT Self-Study Mastery Program — AceYourTest",
    ogDescription:
      "Premium self-paced GMAT preparation with recorded lessons, structured roadmaps, practice library, and expert-designed learning resources.",
    canonical: "/gmat/self-study-plan",
  },
  hero: {
    eyebrow: "GMAT Self Study",
    title: "GMAT Self-Study Mastery Program",
    subtitle:
      "Prepare for the GMAT Focus Edition with complete flexibility through a premium self-paced program designed by Tarun Kaushik — structured roadmaps, recorded lessons, and proven strategies anytime, anywhere.",
    cta: "Get GMAT Self-Study Access",
  },
  posterImage: gmatMicrobatchPoster,
  posterAlt: "GMAT self study online course",
  bannerVisual: GMAT_SELF_STUDY_VISUAL,
  bannerVisualAlt: "GMAT self study learning resources",
  programImage: GMAT_SELF_STUDY_VISUAL,
  programImageAlt: "GMAT self study preparation program",
  intro: [
    "Study at your own pace without compromising on quality. The GMAT Self-Study Program combines expert-designed learning resources with structured preparation plans.",
    "Ideal for students who prefer independent learning with a clear roadmap toward their target GMAT score.",
  ],
  whyChoose: {
    title: "Premium Preparation. Complete Flexibility.",
    subtitle:
      "Whether you're balancing work, college, or other commitments, this program provides everything needed to prepare efficiently without attending live classes.",
    items: [
      "Learn Anytime, Anywhere",
      "Complete Self-Paced Learning",
      "Structured Preparation Roadmap",
      "Personalized Strategy Plan",
      "Premium Study Resources",
      "Flexible Revision Schedule",
      "Progress Monitoring Tools",
      "Expert-Tested Learning Framework",
    ],
  },
  whatsIncluded: [
    "Recorded Lessons for Complete Flexibility",
    "Structured Self-Study Roadmap",
    "Personalized Strategy Plan Based on Diagnostic Assessment",
    "5,000+ GMAT Practice Questions",
    "Exclusive Study Notes & Revision Material",
    "Step-by-Step Quant Concept Modules",
    "Verbal Reasoning Learning Modules",
    "Data Insights Preparation Framework",
    "Error Analysis Framework",
    "Progress Tracking System",
    "Advanced Test-Taking Strategies",
    "Revision Checklists",
    "Performance Improvement Framework",
    "Anytime, Anywhere Access",
  ],
  blueprintCards: [
    {
      title: "Learn on Your Schedule",
      desc: "Study whenever and wherever it fits your routine without compromising the quality of your preparation.",
      items: [
        "No fixed class timings",
        "Flexible learning schedule",
        "Unlimited revision",
        "Learn at your own pace",
        "Ideal for busy professionals",
        "Consistent preparation roadmap",
      ],
    },
    {
      title: "Personalized Study Strategy",
      desc: "Begin your preparation with a structured diagnostic assessment that helps create an effective study plan.",
      items: [
        "Diagnostic Performance Assessment",
        "Customized Study Roadmap",
        "Target Score Strategy",
        "Weekly Learning Plan",
        "Topic Prioritization",
        "Revision Framework",
      ],
    },
    {
      title: "Structured Learning Modules",
      desc: "Every concept is organized into easy-to-follow modules that simplify even the most challenging GMAT topics.",
      items: [
        "Quantitative Reasoning",
        "Verbal Reasoning",
        "Data Insights",
        "Logical Thinking",
        "Problem Solving",
        "Test Strategy",
      ],
    },
  ],
  sessionStructure: [
    {
      step: "1",
      title: "Step-by-Step Concept Learning",
      desc: "Master each topic through structured video lessons, guided notes, and progressive practice.",
      outcome: "Strong conceptual clarity, logical reasoning, analytical thinking, and exam confidence.",
    },
    {
      step: "2",
      title: "Guided Practice",
      desc: "Reinforce learning through carefully curated GMAT practice questions.",
      outcome: "Speed, accuracy, confidence, and time management.",
    },
    {
      step: "3",
      title: "Error Analysis Framework",
      desc: "Learn how to identify and eliminate recurring mistakes through a structured review system.",
      outcome: "Smarter problem-solving, better accuracy, faster improvement, and consistent score growth.",
    },
    {
      step: "4",
      title: "Performance Tracking",
      desc: "Monitor your preparation with an organized progress tracking framework.",
      outcome: "Study discipline, goal tracking, performance awareness, and continuous improvement.",
    },
  ],
  learningHighlights: [
    "Recorded Video Lessons",
    "Structured Self-Study Roadmap",
    "Personalized Strategy Plan",
    "5,000+ Practice Questions",
    "Progress Tracking Framework",
    "Advanced Test Strategies",
    "Anytime, Anywhere Access",
  ],
  performanceTracking: [
    "Weekly Learning Plan Reviews",
    "Topic-Wise Progress Reports",
    "Error Tracking Framework",
    "Goal & Target Score Monitoring",
    "Improvement Recommendations",
    "Revision Checklist Tracking",
  ],
  curriculum: {
    quant: {
      topics: [
        "Arithmetic",
        "Algebra",
        "Number Properties",
        "Ratios & Percentages",
        "Statistics",
        "Probability",
        "Word Problems",
        "Coordinate Geometry",
        "Data Sufficiency",
      ],
      questionTypes: [
        "Problem Solving",
        "Data Sufficiency",
        "Multi-Step Reasoning",
      ],
    },
    verbal: {
      focusAreas: [
        "Reading Comprehension",
        "Critical Reasoning",
        "Logical Analysis",
        "Inference Questions",
        "Argument Evaluation",
        "Verbal Strategy",
      ],
    },
    data: {
      title: "Data Insights",
      topics: [
        "Table Analysis",
        "Graphics Interpretation",
        "Multi-Source Reasoning",
        "Data Sufficiency",
        "Two-Part Analysis",
      ],
      skills: [
        "Data Interpretation",
        "Analytical Reasoning",
        "Rapid Decision Making",
        "Pattern Recognition",
      ],
    },
  },
  practiceFramework: [
    "5,000+ GMAT Practice Questions",
    "Topic-Wise Exercises",
    "Difficulty-Based Practice",
    "Timed Practice Sets",
    "Concept Reinforcement Drills",
    "Revision Worksheets",
  ],
  communityBenefits: [
    "Recorded Video Lessons",
    "Exclusive Instructor Notes",
    "Revision Material",
    "Formula Sheets",
    "Strategy Guides",
    "Practice Worksheets",
    "Study Checklists",
    "Preparation Templates",
  ],
  idealFor: [
    "Independent learners",
    "Budget-conscious MBA applicants",
    "Working professionals preparing alongside full-time jobs",
    "Students requiring flexible study schedules",
    "Learners who prefer self-paced preparation",
    "Candidates seeking structured guidance without live classes",
  ],
  deliverables: [
    {
      component: "Recorded Lessons",
      deliverables: "Self-Paced Video Learning",
      benefits: "Learn Anytime",
    },
    {
      component: "Study Roadmap",
      deliverables: "Structured Preparation Plan",
      benefits: "Organized Learning",
    },
    {
      component: "Practice Library",
      deliverables: "5,000+ Questions",
      benefits: "Concept Mastery",
    },
    {
      component: "Study Material",
      deliverables: "Premium Notes & Revision Resources",
      benefits: "Faster Learning",
    },
    {
      component: "Strategy Plan",
      deliverables: "Personalized Study Strategy",
      benefits: "Efficient Preparation",
    },
    {
      component: "Progress Tracking",
      deliverables: "Performance Monitoring Framework",
      benefits: "Continuous Improvement",
    },
    {
      component: "Test Strategy",
      deliverables: "Advanced GMAT Techniques",
      benefits: "Higher Accuracy",
    },
  ],
  pricing: {
    amount: "₹29,999",
    note: "One-Time Payment",
    includes: [
      "Complete Recorded Course",
      "Structured Self-Study Roadmap",
      "Personalized Strategy Plan",
      "Premium Study Material",
      "5,000+ Practice Questions",
      "Revision Resources",
      "Progress Tracking Framework",
      "Advanced Test Strategies",
      "Anytime Access",
    ],
    cta: "Request Free Consultation",
  },
  ctaBand: {
    title: "Start Your GMAT Self-Study Journey",
    subtitle:
      "Book a free consultation with Tarun Kaushik and receive expert guidance on creating the most effective self-study strategy based on your target score, preparation timeline, and MBA goals.",
  },
  enquiryTitle: "Get Self-Study Access",
  comparePath: "/gmat/plans-pricing",
  sidebarHighlights: [
    { label: "Learning Format", value: "Self-Paced" },
    { label: "Practice Questions", value: "5,000+" },
    { label: "Access", value: "Anytime" },
    { label: "Study Material", value: "Premium" },
    { label: "Course Fee", value: "₹29,999" },
    { label: "Payment", value: "One-Time" },
  ],
  labels: {
    promoBadge: "Self Study",
    batchBadge: "Anytime Access",
    whyEyebrow: "Why GMAT Self Study",
    advantageTitle: "The Self-Study Advantage",
    sessionTitle: "Complete Learning Framework",
    communityTitle: "Premium Study Resources",
    whatsIncludedTitle: "Complete GMAT Self-Study Program",
    whatsIncludedSubtitle:
      "A carefully designed learning ecosystem that helps independent learners prepare systematically for the GMAT.",
    contactBody:
      "Get instant access to a complete self-paced GMAT preparation program and begin your journey toward your dream MBA.",
    sidebarNote: "Free 30-min strategy session · Self-paced access",
    practiceTitle: "Extensive Practice Library",
    practiceSubtitle: "Consistent practice is the key to high GMAT scores.",
    learningTitle: "Self-Paced Learning Experience",
    learningSubtitle:
      "A structured, flexible learning system with recorded lessons, personalized planning, and premium resources.",
  },
};
