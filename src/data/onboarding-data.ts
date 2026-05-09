import { OnboardingSlide } from "../types";

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Your AI Fitness Coach",
    description:
      "Get personalized workout plans powered by AI that adapt to your progress",
    image: ({ size = 100 }) => null
  },
  {
    id: 2,
    title: "Track Your Progress",
    description:
      "Monitor your workouts, nutrition, and achievements all in one place",
    image: ({ size = 100 }) => null
  },
  {
    id: 3,
    title: "Reach Your Goals",
    description:
      "Whether you want to lose weight, build muscle, or stay fit - we've got you covered",
    image: ({ size = 100 }) => null
  }
];