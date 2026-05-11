# CoachAI - AI Fitness Mobile App

A production-ready AI fitness mobile app built with React Native + Expo.

## Current Phase: Tab Navigation Implementation ✅

### What Was Implemented Today
- Added proper bottom tab navigation using Expo Router
- Created 5 functional tabs:
  - Home
  - Workouts
  - Calories
  - Progress
  - Meals
- Redesigned dashboard into a summarized overview screen
- Added dark-themed UI consistent with the original design
- Implemented placeholder screens for all major sections
- Fixed NativeWind configuration and styling issues
- Fixed Expo Router layout structure
- Fixed onboarding alignment and responsiveness
- Fixed authentication flow crashes
- Connected routing between onboarding, sign in, sign up, and home screens
- Fixed multiple Babel and Metro bundler configuration issues
- App now successfully runs on Expo Go


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
app/
├── (tabs)/
│   ├── _layout.tsx      # Bottom tab navigator
│   ├── home.tsx         # Dashboard overview
│   ├── workouts.tsx     # Workout system
│   ├── calories.tsx     # Nutrition & calorie tracking
│   ├── progress.tsx     # Progress analytics
│   └── meals.tsx        # Meal suggestions & planning
│
├── _layout.tsx          # Root authentication layout
├── index.tsx            # Onboarding screen
├── signin.tsx           # Sign in screen
├── signup.tsx           # Sign up screen
└── home.tsx             # Redirect handler

## Available Scripts

- `npm start` - Start Expo dev server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check