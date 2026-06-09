# Deployment Links

## Front‑end (Vercel)
- URL: https://recipe-plateform.vercel.app
- Make sure the following environment variables are set in Vercel:
  - `NEXT_PUBLIC_STRAPI_URL=https://recipe-plateform.onrender.com`
  - `UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY`
  - `NEXT_PUBLIC_STRAPI_API_TOKEN=YOUR_STRAPI_API_TOKEN` (if you expose the token to the client)

## Back‑end (Render)
- URL: https://recipe-plateform.onrender.com
- Environment variables in Render:
  - `DATABASE_URL` (Neon DB connection string)
  - `STRAPI_API_TOKEN` (secret token for API authentication)
  - `UNSPLASH_ACCESS_KEY` (optional, if you want backend calls to Unsplash)

Feel free to update the placeholders with the actual keys.
