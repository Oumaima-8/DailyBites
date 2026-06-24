# Project DailyBites

## Overview

This project is a frontend web application that allows users to browse a menu, filter items by category, and add products to a shopping cart. The data is dynamically fetched from a Supabase database.

## Features
Dynamic menu loaded from Supabase
Category filtering (e.g. drinks, food)
Shopping cart functionality (add/remove items)
Dynamic menu item rendering
Responsive layout (desktop and mobile)
Basic page navigation
Optional header with logo on all pages

## Tech Stack
React (Vite)
JavaScript 
Supabase (database & API)
Tailwind CSS 
React Router 

## Installation
1. Clone the repository
git clone <repo-url>
cd my-app
2. Install dependencies
npm install
3. Supabase configuration


4. Start the project
npm run dev
Build (Production)
npm run build

The output will be generated in the dist/ folder.

Deployment (e.g. Vercel)
Push the project to GitHub
Connect the repository to Vercel
Add environment variables in Vercel:
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
Deploy

### Important Notes
Row Level Security (RLS) must be configured correctly for data to be accessible

## Possible Extensions
User authentication (login/register)
Order storage in database
Admin dashboard for menu management
Payment integration
UI/UX improvements and animations

## Author

Developed as a student project using React and Supabase.

This project is intended for educational purposes only and is not meant for production use.
