# CoachAI - AI Fitness Mobile App

A production-ready AI fitness mobile app built with React Native + Expo.

## Current Phase: Tab Navigation Implementation ✅

### What Was Implemented Today
1. Major UI Improvements

-Redesigned the overall app layout for a cleaner modern fitness app look.
-Removed the “stacked card” feel from the dashboard and blended sections into a more seamless screen design.
-Improved spacing, sizing, and alignment across all tabs.
-Made Workout screen sizing match Calories screen proportions.
2. Bottom Navigation Bar Redesign
Improvements:

-Converted floating navbar into a bottom-attached navbar.
-Removed unwanted transparent gaps and overlap issues.
-Fixed content showing behind navbar.
-Removed Android/iOS separator/shadow lines.
-Improved icon alignment and spacing.
-Reduced oversized active tab button.
-Improved responsiveness and stability.

3. Dashboard / Home Screen Upgrade
Added:
-Modern dashboard layout
-App branding section
-Workout summary
-Weekly progress section
-Recent activity
-Streak system UI
-Better visual hierarchy

4. Workout Screen Redesign
Added:
-Weekly split interaction section
-Better workout cards
-Search bar UI
-Improved categories layout
-Interactive workout cards


5. Real Exercise Search API Integration
Integrated:

ExerciseDB API via RapidAPI.

Features:
-Live exercise searching
-Real workout data
-Dynamic search results
-Muscle group information
-Equipment information
-Body part information
-Technologies:
-Axios
-RapidAPI
-ExerciseDB API

6. Workout Detail Navigation
Added:
-Dynamic routing for workouts
-Interactive navigation
-Workout detail page structure

Features:
-Exercise instructions
-Sets & reps
-Difficulty
-Duration
-Detailed exercise descriptions

7. Improved Interactivity
App now includes:
-Search interaction
-Touch feedback
-Navigation transitions
-Dynamic API fetching
-Expandable app structure
## Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router
- NativeWind
- Zustand
- React Query
- Supabase


## Setup

1. Install Node.js (LTS version recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Current Navigation Structure

```txt
AI-FITNESS-COACH/
│
├── app/
│   │
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Bottom tab navigator
│   │   ├── home.tsx           # Dashboard / home screen
│   │   ├── workouts.tsx       # Workout search & categories
│   │   ├── calories.tsx       # Calories & nutrition tracker
│   │   ├── progress.tsx       # Progress analytics
│   │
│   ├── workout/
│   │   └── [id].tsx           # Dynamic workout detail page
│   │
│   ├── _layout.tsx            # Root navigation layout
│   ├── index.tsx              # Entry / redirect screen
│   ├── onboarding.tsx         # Onboarding flow
│   ├── signin.tsx             # Login screen
│   └── signup.tsx             # Registration screen
│
├── src/
│   │
│   ├── components/            # Reusable UI components
│   │
│   ├── data/
│   │   └── onboarding-data.ts # Onboarding content
│   │
│   ├── hooks/                 # Custom React hooks
│   │
│   ├── navigation/            # Navigation utilities
│   │
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── SignInScreen.tsx
│   │   │   ├── SignUpScreen.tsx
│   │   │   └── OnboardingScreen.tsx
│   │
│   ├── services/
│   │   ├── exerciseApi.ts     # ExerciseDB API integration
│   │   ├── query-client.ts    # React Query configuration
│   │   └── supabase.ts        # Supabase client setup
│   │
│   ├── store/
│   │   ├── app-store.ts       # Global app state
│   │   └── auth-store.ts      # Authentication state
│   │
│   ├── types/                 # TypeScript types/interfaces
│   │
│   └── utils/                 # Helper functions & utilities
│
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
│
├── .env                       # Environment variables
├── app.json                   # Expo configuration
├── babel.config.js
├── global.css                 # Global styles
├── nativewind-env.d.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md

## Available Scripts

- `npm start` - Start Expo dev server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check