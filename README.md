# CoachAI - AI Fitness Mobile App

A production-ready AI fitness mobile app built with React Native + Expo.

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

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components
├── screens/
│   ├── auth/        # Authentication screens
│   └── tabs/        # Main tab screens
├── store/           # Zustand stores
├── services/        # API clients (Supabase, React Query)
├── hooks/           # Custom hooks
├── types/           # TypeScript types
└── data/            # Static data

app/
├── _layout.tsx      # Root layout
├── index.tsx        # Onboarding screen
├── signin.tsx       # Sign in screen
├── signup.tsx       # Sign up screen
└── home.tsx         # Main dashboard
```

## Available Scripts

- `npm start` - Start Expo dev server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check