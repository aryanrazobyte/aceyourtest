import tarunMentorImg from "@/assets/tarun-kaushik-mentor.png";
import shipraMentorImg from "@/assets/shipra-sharma-mentor.png";

export type MentorContent = {
  image: string;
  imageAlt: string;
  title: string;
  homeSubtitle: string;
  highlights: readonly string[];
  aboutParagraphs: readonly string[];
};

export const tarunMentor: MentorContent = {
  image: tarunMentorImg,
  imageAlt: "Tarun Kaushik, Founder and Quant Expert at AceYourTest",
  title: "Tarun Kaushik — Quant Expert & Lead Mentor",
  homeSubtitle:
    "A coach trusted by 10,000+ students across GMAT, GRE and SAT. Tarun has worked with leading test-prep organisations and built one of India's most respected quant programs.",
  highlights: [
    "15+ Years Experience",
    "10,000+ Students Mentored",
    "Worked with reputed test-prep brands",
    "Quant Expert: GMAT, GRE & SAT",
  ],
  aboutParagraphs: [
    "A quant expert across GMAT, GRE and SAT, Tarun has trained 10,000+ students and worked with several leading test-prep organisations before founding AceYourTest. Over 15 years of full-time coaching, he has built proprietary frameworks for problem-solving that help students think clearly under exam pressure.",
    "Founded by passion for teaching and simplifying complex problem-solving, Tarun built AceYourTest on the belief that great outcomes come from great thinking — not rote preparation. His focus has always been clarity, discipline, and transforming how students approach competitive exams.",
    "Today he remains hands-on with each student's study plan — mentoring top-percentile scorers across cohorts and guiding ambitious aspirants toward admits at MIT, Stanford, Oxford, INSEAD, and other leading global universities.",
  ],
};

export const shipraMentor: MentorContent = {
  image: shipraMentorImg,
  imageAlt: "Shipra Sharma, Verbal Expert and Lead Mentor at AceYourTest",
  title: "Shipra Sharma — Verbal Expert & Lead Mentor",
  homeSubtitle:
    "A passionate educator and mentor with extensive experience in English Literature, Verbal Aptitude, and Communication Skills. Shipra has guided thousands of students preparing for GMAT, GRE, SAT, and other competitive examinations through structured learning, strategic problem-solving, and personalized mentoring.",
  highlights: [
    "12+ Years Experience",
    "UGC-NET Qualified in English Literature",
    "Founder – Parwaaz Foundation",
    "500+ Lives Impacted Through Education",
  ],
  aboutParagraphs: [
    "Shipra has served as a University Assistant Professor, Content Writer, and Soft Skills & Placement Trainer for MBA, M.Com., and M.Tech students. As a seasoned Verbal Aptitude Mentor, she has successfully coached aspirants preparing for leading Indian and international undergraduate and postgraduate entrance examinations.",
    "Beyond academics, she is the Founder of Parwaaz Foundation, an NGO dedicated to the holistic education and empowerment of 500+ underprivileged students, women, rag-pickers, school dropouts, and street destitutes. Her commitment to education extends beyond classrooms, making a lasting impact on countless lives.",
    "Known for her practical teaching methods, simplified verbal strategies, and exam-focused techniques, Shipra has helped numerous students achieve 99th percentile scores, enabling them to secure admissions to prestigious universities and business schools worldwide.",
  ],
};
