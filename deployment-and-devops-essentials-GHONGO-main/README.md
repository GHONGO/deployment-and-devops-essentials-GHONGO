**Please note this project is still ongoing

# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week7-Assignment.md` file
4. Use the provided templates and configuration files as a starting point

## Files Included

- `Week7-Assignment.md`: Detailed assignment instructions
- `.github/workflows/`: GitHub Actions workflow templates (CI/CD)
- `deployment/`: Deployment configuration notes
- `monitoring/`: Monitoring configuration examples
- `backend/`: Express API with MongoDB, production middleware, health endpoint
- `frontend/`: Vite React app consuming the API

Environment variables you must provide in your platform settings (no `.env` file in repo):
- Backend: `PORT`, `MONGODB_URI`, optional `SENTRY_DSN`
- Frontend: `VITE_API_BASE_URL` (e.g., `https://your-backend.example.com/api/v1`)

## Requirements

- A completed MERN stack application from previous weeks
- Accounts on the following services:
  - GitHub
  - MongoDB Atlas
  - Render, Railway, or Heroku (for backend)
  - Vercel, Netlify, or GitHub Pages (for frontend)
- Basic understanding of CI/CD concepts

## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available
- **Railway**: Developer-friendly, generous free tier
- **Heroku**: Well-established, extensive documentation

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:
- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform

Provider secrets to add in GitHub Repository Settings > Secrets and variables > Actions:
- `RENDER_BACKEND_DEPLOY_HOOK` (if using Render)
- `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` (if using Netlify)

Backend CI runs on changes under `backend/`, frontend CI runs on changes under `frontend/`.

Deploy workflows auto-trigger on pushes to `main` and can be run manually.

## How to Run Locally

Backend:
1. `cd backend && npm ci`
2. Set `MONGODB_URI` in your environment
3. `npm run dev` (starts on port 4000)

Frontend:
1. `cd frontend && npm ci`
2. Set `VITE_API_BASE_URL=http://localhost:4000/api/v1`
3. `npm run dev` (opens Vite dev server)

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all deployment tasks
2. Set up CI/CD pipelines with GitHub Actions
3. Deploy both frontend and backend to production
4. Document your deployment process in the README.md
5. Include screenshots of your CI/CD pipeline in action
6. Add URLs to your deployed applications

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/) 
