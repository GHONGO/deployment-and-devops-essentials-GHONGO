Deployment options

Backend options:
- Render: create a Web Service from this repo, set root to backend, set build command to "npm ci" and start command to "npm start"; add env vars.
- Railway/Heroku: push Dockerfile in backend or use Node buildpack; set envs.

Frontend options:
- Netlify: site root frontend, build "npm run build", publish directory "frontend/dist"; set VITE_API_BASE_URL.
- Vercel: import frontend; framework React; build and output as detected.

Secrets to set in GitHub for CD:
- RENDER_BACKEND_DEPLOY_HOOK
- NETLIFY_AUTH_TOKEN
- NETLIFY_SITE_ID

