
# Bet Challenge App

This is a full-stack React application built with Vite and Supabase. Users can create, read, update, and delete (CRUD) challenge posts, and place bets on them. All data is stored and synced with a Supabase Postgres database.

## Features

- **Create**: Add new challenge posts with a title, author, and description.
- **Read**: View all challenge posts on the homepage, loaded live from the Supabase database.
- **Update**: Edit any post and save changes directly to the database.
- **Delete**: Remove posts from the database.
- **Bet Count**: Click the bet button on any post to increment its bet count, which is saved and persisted in the database.

## Live Demo

Deployed on Netlify: [https://elaborate-pasca-28eaba.netlify.app/](https://elaborate-pasca-28eaba.netlify.app/)

## Video Walkthrough

Loom video: [https://www.loom.com/share/c8c6c8bf4f5e4d9fafd179defd1eb383](https://www.loom.com/share/c8c6c8bf4f5e4d9fafd179defd1eb383)

## Tech Stack

- React (with React Router)
- Vite
- Supabase (Postgres, Auth, REST API)
- Netlify (deployment)

## How It Works

1. **Homepage**: Displays all posts from the Supabase database, sorted by creation time.
2. **Create Post**: Fill out the form to add a new challenge. The post is saved to Supabase and appears on the homepage.
3. **Edit Post**: Click the three-dot menu on a post to edit or delete it. Updates and deletions are reflected in the database and UI.
4. **Bet Button**: Click the bet button to increment the bet count for a post. The count is updated in the database and persists across reloads.

## SPA Routing on Netlify

This app uses client-side routing. The `/public/_redirects` file ensures all routes are served by `index.html` to prevent 404 errors on refresh or direct navigation.

---

Enjoy using and customizing the Bet Challenge App!
