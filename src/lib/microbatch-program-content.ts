import gmatMicrobatchPoster from "@/assets/gmat-microbatch-poster.png";

export type MicrobatchProgramContent = {
  exam: "GRE" | "GMAT" | "SAT";
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonical: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  posterImage: string;
  posterAlt: string;
  bannerVisual: string;
  bannerVisualAlt: string;
  programImage: string;
  programImageAlt: string;
  intro: readonly [string, string];
  whyChoose: {
    title: string;
    subtitle: string;
    items: readonly string[];
  };
  whatsIncluded: readonly string[];
  blueprintCards: readonly {
    title: string;
    desc: string;
    items: readonly string[];
  }[];
  sessionStructure: readonly {
    step: string;
    title: string;
    desc: string;
    outcome: string;
  }[];
  learningHighlights: readonly string[];
  performanceTracking: readonly string[];
  curriculum: {
    quant: {
      topics: readonly string[];
      questionTypes?: readonly string[];
      skills?: readonly string[];
    };
    verbal: { focusAreas: readonly string[]; skills?: readonly string[] };
    data: {
      title: string;
      topics: readonly string[];
      skills: readonly string[];
    };
  };
  practiceFramework: readonly string[];
  communityBenefits: readonly string[];
  idealFor: readonly string[];
  deliverables: readonly {
    component: string;
    deliverables: string;
    benefits: string;
  }[];
  pricing: {
    amount: string;
    note: string;
    includes: readonly string[];
    cta: string;
  };
  ctaBand: { title: string; subtitle: string };
  enquiryTitle: string;
  comparePath: "/gre/plans-pricing" | "/gmat/plans-pricing" | "/sat/plans-pricing";
  sidebarHighlights: readonly { label: string; value: string }[];
  labels?: {
    promoBadge?: string;
    batchBadge?: string;
    whyEyebrow?: string;
    advantageTitle?: string;
    sessionTitle?: string;
    communityTitle?: string;
    whatsIncludedTitle?: string;
    whatsIncludedSubtitle?: string;
    contactBody?: string;
    sidebarNote?: string;
    practiceTitle?: string;
    practiceSubtitle?: string;
    learningTitle?: string;
    learningSubtitle?: string;
  };
};

const GRE_MICROBATCH_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782751324/Group_Classes_fwpsm2.png";

const GMAT_MICROBATCH_VISUAL =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782808747/Group_Classes_1_bk7jyj.png";

export const greMicrobatchContent: MicrobatchProgramContent = {
  exam: "GRE",
  meta: {
    title: "GRE Micro Batch Classes — Elite Small-Group Coaching | AceYourTest",
    description:
      "Elite GRE micro batch program with Tarun Kaushik. Maximum 4 students, 3-month intensive prep, 5,000+ questions, 20+ mock tests, and personalized mentoring — ₹1,20,000.",
    ogTitle: "GRE Micro Batch Classes — AceYourTest",
    ogDescription:
      "Personalized GRE micro batches with live classes, recording access, score strategy, and continuous performance tracking.",
    canonical: "/gre/microbatch-classes",
  },
  hero: {
    eyebrow: "GRE Micro Batch Classes",
    title: "Elite GRE Micro Batch Program",
    subtitle:
      "Highly personalized GRE preparation in exclusive micro batches of up to 4 students — the perfect balance between private tutoring and collaborative learning with Tarun Kaushik.",
    cta: "Join an Exclusive GRE Micro Batch",
  },
  posterImage: GRE_MICROBATCH_IMAGE,
  posterAlt: "GRE micro batch classes online course",
  bannerVisual: GRE_MICROBATCH_IMAGE,
  bannerVisualAlt: "GRE micro batch coaching sessions",
  programImage: GRE_MICROBATCH_IMAGE,
  programImageAlt: "GRE micro batch preparation program",
  intro: [
    "Prepare smarter in a focused learning environment where every student receives individual attention while benefiting from collaborative discussions and peer motivation.",
    "Live interactive classes, personalized mentoring, structured study plans, and continuous performance tracking — designed to maximize your GRE score.",
  ],
  whyChoose: {
    title: "Personalized Learning. Elite Results.",
    subtitle:
      "GRE Micro Batches are designed for students who want significantly more attention than traditional classroom coaching while enjoying the advantages of learning with a small, highly motivated peer group.",
    items: [
      "Maximum 4 Students Per Batch",
      "Personalized Score Strategy",
      "Direct Mentorship by Tarun Kaushik",
      "Structured Study Roadmap",
      "Individual Performance Tracking",
      "Faster Doubt Resolution",
      "Higher Accountability",
      "Interactive Peer Learning",
    ],
  },
  whatsIncluded: [
    "Intensive 3-Month GRE Preparation",
    "Live Expert-Led Interactive Classes",
    "Recording Access for Every Session",
    "Exclusive Micro Batches (Maximum 4 Students)",
    "Personalized Mentoring & Score Strategy",
    "Customized Study Roadmap",
    "Quantitative Reasoning Mastery",
    "Verbal Reasoning Mastery",
    "Data Interpretation & Analytical Skills",
    "Vocabulary Development Program",
    "Reading Comprehension Strategies",
    "20+ Full-Length & Sectional Mock Tests",
    "Smart Performance Analytics",
    "Targeted Practice Assignments",
    "Advanced Problem-Solving Techniques",
    "Expert Error Analysis",
    "Daily & Weekly Progress Tracking",
    "Time Management Strategies",
    "Flexible Online Learning",
    "Continuous Doubt Resolution",
  ],
  blueprintCards: [
    {
      title: "Learn More. Learn Better.",
      desc: "Unlike large classroom programs, every session encourages active participation, personalized discussions, and real-time mentor feedback.",
      items: [
        "Individual attention in every class",
        "Better interaction with the mentor",
        "Customized learning pace",
        "Higher classroom engagement",
        "Strong academic accountability",
        "Personalized improvement strategies",
      ],
    },
    {
      title: "Personalized Mentoring",
      desc: "Every student receives continuous guidance throughout the preparation journey.",
      items: [
        "Individual Performance Reviews",
        "Personalized Study Planning",
        "Weekly Improvement Goals",
        "Mock Test Analysis",
        "Score Optimization Strategies",
        "University Application Guidance",
      ],
    },
    {
      title: "Collaborative Peer Learning",
      desc: "Study with a carefully selected group of ambitious GRE aspirants preparing for top universities worldwide.",
      items: [
        "Quant Problem Discussions",
        "Verbal Strategy Sessions",
        "Reading Comprehension Analysis",
        "Vocabulary Building Activities",
        "Group Error Reviews",
        "Alternative Solving Approaches",
      ],
    },
  ],
  sessionStructure: [
    {
      step: "1",
      title: "Concept Mastery",
      desc: "Develop strong conceptual foundations using Tarun Kaushik's structured teaching methodology and proven GRE frameworks.",
      outcome: "Conceptual clarity, logical thinking, and analytical skills.",
    },
    {
      step: "2",
      title: "Guided Practice",
      desc: "Practice carefully selected GRE questions under live mentor supervision with timed exercises.",
      outcome: "Speed, accuracy, confidence, and time management.",
    },
    {
      step: "3",
      title: "Personalized Performance Review",
      desc: "Every student's mistakes are reviewed individually to improve future performance.",
      outcome: "Error elimination, pattern recognition, smarter strategies, and consistent score growth.",
    },
    {
      step: "4",
      title: "Action Plan",
      desc: "Every class concludes with a customized roadmap for self-study and revision.",
      outcome: "Daily study targets, homework assignments, revision plans, and improvement milestones.",
    },
  ],
  learningHighlights: [
    "Live Interactive Classes",
    "Personalized Learning Environment",
    "Recording Access",
    "Advanced GRE Strategies",
    "Individual Performance Reviews",
    "Structured Study Plans",
    "Continuous Mentor Support",
  ],
  performanceTracking: [
    "Weekly Progress Reviews",
    "Smart Performance Analytics",
    "Topic-Wise Score Reports",
    "Error Tracking",
    "Improvement Recommendations",
    "Customized Feedback Sessions",
  ],
  curriculum: {
    quant: {
      topics: [
        "Number Systems",
        "Arithmetic",
        "Algebra",
        "Geometry",
        "Coordinate Geometry",
        "Statistics",
        "Probability",
        "Word Problems",
        "Permutations & Combinations",
      ],
      questionTypes: [
        "Quantitative Comparison",
        "Problem Solving",
        "Numeric Entry",
        "Data Interpretation",
      ],
    },
    verbal: {
      focusAreas: [
        "Academic Vocabulary",
        "Sentence Equivalence",
        "Text Completion",
        "Reading Comprehension",
        "Critical Reasoning",
        "Author Intent Analysis",
      ],
    },
    data: {
      title: "Data Interpretation",
      topics: [
        "Tables",
        "Charts",
        "Graphs",
        "Multiple Data Sets",
        "Trend Analysis",
        "Comparative Analysis",
      ],
      skills: [
        "Fast Calculations",
        "Percentage Analysis",
        "Ratio Applications",
        "Average Calculations",
        "Data Interpretation",
      ],
    },
  },
  practiceFramework: [
    "5,000+ GRE-Level Practice Questions",
    "20+ Sectional & Full-Length Mock Tests",
    "Adaptive Practice Modules",
    "Timed Drill Sessions",
    "Performance Analytics",
    "Personalized Assignments",
  ],
  communityBenefits: [
    "24/7 Doubt Resolution",
    "Peer Collaboration",
    "Study Accountability",
    "Resource Sharing",
    "Important Updates",
  ],
  idealFor: [
    "Students targeting 325–340+ GRE scores",
    "Aspirants seeking personalized small-group coaching",
    "Students applying to top global universities",
    "Working professionals balancing jobs with preparation",
    "Learners who need structured mentor accountability",
    "Students wanting focused attention without full private tutoring",
  ],
  deliverables: [
    {
      component: "Live Training",
      deliverables: "Intensive Live Interactive Classes",
      benefits: "Personalized Learning",
    },
    {
      component: "Micro Batch Size",
      deliverables: "Maximum 4 Students",
      benefits: "Individual Attention",
    },
    {
      component: "Study Strategy",
      deliverables: "Customized Study Roadmap",
      benefits: "Faster Score Improvement",
    },
    {
      component: "Practice Arsenal",
      deliverables: "5,000+ Questions & Mock Tests",
      benefits: "Complete GRE Readiness",
    },
    {
      component: "Study Materials",
      deliverables: "Premium GRE Notes & Resources",
      benefits: "Comprehensive Learning",
    },
    {
      component: "Recording Access",
      deliverables: "Full Course Recordings",
      benefits: "Flexible Revision",
    },
    {
      component: "Performance Tracking",
      deliverables: "Weekly Analytics & Reports",
      benefits: "Continuous Improvement",
    },
    {
      component: "Mentor Support",
      deliverables: "Direct WhatsApp & Live Guidance",
      benefits: "Instant Academic Support",
    },
  ],
  pricing: {
    amount: "₹1,20,000",
    note: "Full Program · 3 months intensive",
    includes: [
      "Intensive 3-Month GRE Preparation",
      "Live Interactive Micro Batch Classes",
      "Recording Access",
      "Personalized Mentoring",
      "Customized Study Plan",
      "Premium Study Material",
      "5,000+ Practice Questions",
      "20+ Mock Tests",
      "Performance Analytics",
      "Continuous Mentor Support",
    ],
    cta: "Book a Free Consultation",
  },
  ctaBand: {
    title: "Start Your GRE Micro Batch Journey",
    subtitle:
      "Book a free consultation with Tarun Kaushik and receive a personalized GRE preparation strategy tailored to your goals, timeline, and dream universities.",
  },
  enquiryTitle: "Book a Free Consultation",
  comparePath: "/gre/plans-pricing",
  sidebarHighlights: [
    { label: "Student rating", value: "4.8 ★" },
    { label: "Students mentored", value: "10,000+" },
    { label: "Batch size", value: "Max 4" },
    { label: "Duration", value: "3 months" },
    { label: "Mock tests", value: "20+" },
    { label: "Practice Qs", value: "5,000+" },
    { label: "Fee", value: "₹1,20,000" },
  ],
};

export const gmatMicrobatchContent: MicrobatchProgramContent = {
  exam: "GMAT",
  meta: {
    title: "GMAT Micro Batch Classes — Elite Small-Group Coaching | AceYourTest",
    description:
      "Elite GMAT Focus Edition micro batch program with Tarun Kaushik. Maximum 4 students, 3-month intensive prep, 5,000+ questions, 20+ mock tests — ₹1,20,000.",
    ogTitle: "GMAT Micro Batch Classes — AceYourTest",
    ogDescription:
      "Immersive GMAT micro batches with live expert-led classes, personalized mentoring, and strategic score improvement.",
    canonical: "/gmat/microbatch-classes",
  },
  hero: {
    eyebrow: "GMAT Micro Batch Classes",
    title: "Intensive Small-Group GMAT Excellence",
    subtitle:
      "Experience immersive GMAT Focus Edition preparation in exclusive micro batches of up to 4 students — personalized mentoring with collaborative peer energy.",
    cta: "Join a GMAT Micro Batch",
  },
  posterImage: gmatMicrobatchPoster,
  posterAlt: "GMAT micro batch online course poster",
  bannerVisual: GMAT_MICROBATCH_VISUAL,
  bannerVisualAlt: "GMAT micro batch live sessions",
  programImage: GMAT_MICROBATCH_VISUAL,
  programImageAlt: "GMAT micro batch sessions",
  intro: [
    "Prepare smarter in a focused learning environment where every student receives individual attention while benefiting from collaborative discussions and MBA-focused peer motivation.",
    "Live expert-led classes, recording access, personalized score strategy, and continuous performance tracking — designed for ambitious students targeting top business schools.",
  ],
  whyChoose: {
    title: "Personalized Learning. Elite MBA Results.",
    subtitle:
      "GMAT Micro Batches deliver significantly more attention than traditional classroom coaching while keeping the accountability and energy of a small, highly motivated peer group.",
    items: [
      "Maximum 4 Students Per Batch",
      "Personalized GMAT Score Strategy",
      "Direct Mentorship by Tarun Kaushik",
      "Customized Focus Edition Roadmap",
      "Individual Performance Tracking",
      "Faster Doubt Resolution",
      "Higher Accountability",
      "Interactive Peer Learning",
    ],
  },
  whatsIncluded: [
    "Intensive 3-Month GMAT Focus Edition Preparation",
    "Live Expert-Led Interactive Classes",
    "Recording Access for Every Session",
    "Exclusive Micro Batches (Maximum 4 Students)",
    "Personalized Mentoring & Score Strategy",
    "Customized Study Roadmap",
    "Quantitative Reasoning Mastery",
    "Verbal Reasoning Mastery",
    "Data Insights Mastery",
    "Official GMAT-Style Practice Material",
    "Instructor-Curated Premium Study Notes",
    "20+ Full-Length & Sectional Mock Tests",
    "Smart Performance Analytics",
    "Targeted Practice Assignments",
    "Advanced Test-Taking Techniques",
    "Expert Error Analysis",
    "Daily & Weekly Progress Tracking",
    "Time Management Strategies",
    "Flexible Online Learning",
    "Continuous Doubt Resolution",
  ],
  blueprintCards: [
    {
      title: "Learn More. Score Higher.",
      desc: "Every session encourages active participation, personalized discussions, and real-time mentor feedback — unlike overcrowded GMAT coaching batches.",
      items: [
        "Individual attention in every class",
        "Better interaction with the mentor",
        "Customized learning pace",
        "Higher classroom engagement",
        "Strong academic accountability",
        "Personalized improvement strategies",
      ],
    },
    {
      title: "Personalized Mentoring",
      desc: "Every student receives continuous GMAT-focused guidance throughout the preparation journey.",
      items: [
        "Individual Performance Reviews",
        "Personalized Study Planning",
        "Weekly Score Improvement Goals",
        "Mock Test Analysis",
        "Focus Edition Strategy Sessions",
        "MBA Application Guidance",
      ],
    },
    {
      title: "Collaborative Peer Learning",
      desc: "Study with a carefully selected group of ambitious MBA aspirants preparing for top global business schools.",
      items: [
        "Quant Strategy Discussions",
        "Verbal Reasoning Debates",
        "Data Insights Problem Reviews",
        "Reading Comprehension Analysis",
        "Group Error Reviews",
        "Alternative Solving Approaches",
      ],
    },
  ],
  sessionStructure: [
    {
      step: "1",
      title: "Concept Mastery",
      desc: "Develop strong GMAT Focus Edition foundations using Tarun Kaushik's structured methodology and proven frameworks.",
      outcome: "Conceptual clarity, logical reasoning, and analytical decision-making.",
    },
    {
      step: "2",
      title: "Guided Practice",
      desc: "Practice carefully selected GMAT-level questions under live mentor supervision with timed exercises.",
      outcome: "Speed, accuracy, confidence, and section pacing.",
    },
    {
      step: "3",
      title: "Personalized Performance Review",
      desc: "Every student's mistakes are reviewed individually to eliminate recurring errors and improve scores.",
      outcome: "Error elimination, pattern recognition, smarter strategies, and consistent score growth.",
    },
    {
      step: "4",
      title: "Action Plan",
      desc: "Every class concludes with a customized roadmap for self-study, revision, and targeted practice.",
      outcome: "Daily study targets, assignments, revision plans, and improvement milestones.",
    },
  ],
  learningHighlights: [
    "Live Interactive Classes",
    "Personalized Learning Environment",
    "Recording Access",
    "Advanced GMAT Focus Strategies",
    "Individual Performance Reviews",
    "Structured Study Plans",
    "Continuous Mentor Support",
  ],
  performanceTracking: [
    "Weekly Progress Reviews",
    "Smart Performance Analytics",
    "Topic-Wise Score Reports",
    "Error Tracking",
    "Improvement Recommendations",
    "Customized Feedback Sessions",
  ],
  curriculum: {
    quant: {
      topics: [
        "Arithmetic",
        "Algebra",
        "Word Problems",
        "Number Properties",
        "Statistics",
        "Geometry",
        "Ratios & Percentages",
        "Data Sufficiency Techniques",
      ],
      questionTypes: [
        "Problem Solving",
        "Data Sufficiency",
        "Multi-Step Reasoning",
        "Quantitative Comparison",
      ],
    },
    verbal: {
      focusAreas: [
        "Reading Comprehension",
        "Critical Reasoning",
        "Sentence Correction",
        "Argument Analysis",
        "Logical Evaluation",
        "Inference Skills",
      ],
    },
    data: {
      title: "Data Insights",
      topics: [
        "Data Sufficiency",
        "Multi-Source Reasoning",
        "Table Analysis",
        "Graphics Interpretation",
        "Two-Part Analysis",
        "Integrated Data Evaluation",
      ],
      skills: [
        "Fast Calculations",
        "Percentage Analysis",
        "Ratio Applications",
        "Trend Identification",
        "Data Interpretation",
      ],
    },
  },
  practiceFramework: [
    "5,000+ GMAT-Focused Practice Questions",
    "20+ Sectional & Full-Length Mock Tests",
    "Adaptive Practice Modules",
    "Timed Drill Sessions",
    "Performance Analytics",
    "Personalized Assignments",
  ],
  communityBenefits: [
    "24/7 Doubt Resolution",
    "Peer Collaboration",
    "Study Accountability",
    "Resource Sharing",
    "Important Updates",
  ],
  idealFor: [
    "Students targeting 655–705+ GMAT scores",
    "MBA aspirants seeking personalized small-group coaching",
    "Applicants to top global business schools",
    "Working professionals balancing jobs with preparation",
    "Learners who need structured mentor accountability",
    "Students wanting focused attention without full private tutoring",
  ],
  deliverables: [
    {
      component: "Live Training",
      deliverables: "Intensive Live Interactive Classes",
      benefits: "Personalized Learning",
    },
    {
      component: "Micro Batch Size",
      deliverables: "Maximum 4 Students",
      benefits: "Individual Attention",
    },
    {
      component: "Study Strategy",
      deliverables: "Customized Study Roadmap",
      benefits: "Faster Score Improvement",
    },
    {
      component: "Practice Arsenal",
      deliverables: "5,000+ Questions & Mock Tests",
      benefits: "Complete GMAT Readiness",
    },
    {
      component: "Study Materials",
      deliverables: "Official + Premium Notes",
      benefits: "Comprehensive Learning",
    },
    {
      component: "Recording Access",
      deliverables: "Full Course Recordings",
      benefits: "Flexible Revision",
    },
    {
      component: "Performance Tracking",
      deliverables: "Weekly Analytics & Reports",
      benefits: "Continuous Improvement",
    },
    {
      component: "Mentor Support",
      deliverables: "Direct WhatsApp & Live Guidance",
      benefits: "Instant Academic Support",
    },
  ],
  pricing: {
    amount: "₹1,20,000",
    note: "Full Program · 3 months intensive",
    includes: [
      "Intensive 3-Month GMAT Preparation",
      "Live Interactive Micro Batch Classes",
      "Recording Access",
      "Personalized Mentoring",
      "Customized Study Plan",
      "Premium Study Material",
      "5,000+ Practice Questions",
      "20+ Mock Tests",
      "Performance Analytics",
      "Continuous Mentor Support",
    ],
    cta: "Book a Free Consultation",
  },
  ctaBand: {
    title: "Start Your GMAT Micro Batch Journey",
    subtitle:
      "Book a free consultation with Tarun Kaushik and receive a personalized GMAT preparation strategy tailored to your MBA goals, timeline, and target score.",
  },
  enquiryTitle: "Book a Free Consultation",
  comparePath: "/gmat/plans-pricing",
  sidebarHighlights: [
    { label: "Student rating", value: "4.8 ★" },
    { label: "Students mentored", value: "10,000+" },
    { label: "Batch size", value: "Max 4" },
    { label: "Duration", value: "3 months" },
    { label: "Mock tests", value: "20+" },
    { label: "Practice Qs", value: "5,000+" },
    { label: "Fee", value: "₹1,20,000" },
  ],
};
