
# AROGYAM PRO - Production Setup

## Frontend Deployment (Netlify)
1. Ensure `import.meta.env.VITE_API_URL` is used for API calls.
2. Build the project: `npm run build`.
3. Deploy the `dist` folder.
4. The `_redirects` file ensures React Router works correctly.

## Backend Deployment (Render / Railway)
1. Environment Variables:
   - `MONGO_URI`: MongoDB Atlas connection string.
   - `JWT_SECRET`: Random secure string.
   - `AI_API_KEY`: Google Gemini API key.
2. Ensure `cors` is configured to allow your Netlify domain.

## Key Features
- **Workout Library**: 40+ exercises with categories.
- **Diet Planner**: Balanced, Bulking, and Cutting plans.
- **Mindfulness**: Audio library with loop controls and visualizers.
- **AI Coach**: Integrated with Gemini 3 for instant wellness tips.
- **Booking**: 1-to-1 mentor session management.
- **BMI**: Smart health assessment.
