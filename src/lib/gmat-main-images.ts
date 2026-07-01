import gmatFeaturesHub from "@/assets/gmat/gmat-features-hub.png";
import { GMAT_CITY_IMAGES } from "@/lib/gmat-city-images";
import { GMAT_PROGRAM_IMAGES } from "@/lib/gmat-program-pages";

/** Clean Cloudinary vectors — avoids clipped PDF slice composites */
export const GMAT_MAIN_IMAGES = {
  aboutIllustration: GMAT_CITY_IMAGES.groupLearning,
  advantagesIllustration: GMAT_PROGRAM_IMAGES.group,
  partnerIllustration: GMAT_CITY_IMAGES.privateCoaching,
  strategyPhoto: GMAT_CITY_IMAGES.studyMaterials,
  trustedIllustration: GMAT_CITY_IMAGES.classroomTraining,
  journeyIllustration: GMAT_CITY_IMAGES.studentsStudy,
  standoutIllustration: GMAT_PROGRAM_IMAGES.group,
  rocketIllustration: GMAT_PROGRAM_IMAGES.microBatch,
  featuresHub: gmatFeaturesHub,
} as const;
