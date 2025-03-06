# React Movie Picker - Multi-Stage Project

This repository contains a multi-stage React project for building a movie picker application. Each folder represents a different stage of development, from initial setup to the fully completed project.

## Concepts Covered:

Routing in SPAs: Implementing client-side navigation for a seamless user experience.

Nested Routing: Creating and managing nested routes for better application structure.

Navigation with React Router DOM:

Using Link for navigation between pages.

Handling searchParams for dynamic queries.

Accessing route params for dynamic route matching.

## Features:

A single-page application (SPA) structure with seamless navigation.

Nested routing for better organization and scalability.

Dynamic route handling with params and searchParams.

Intuitive navigation using React Router DOM's Link component.

## 📁 Project Structure

```
react-movie-picker/
│-- 0_react-movie-picker-initial-setup/   # Basic project setup with dependencies
│-- 1_react-movie-picker-API-react-query/ # Core functionality implemented, but missing UI
│-- 2_react-movie-final-project/          # Fully completed version with UI
```

## 🚀 Getting Started

Each project folder is a separate React project. To run any stage of the project, follow the instructions below.

### 1️⃣ Initial Setup (Basic Setup)

Navigate to the `0_react-movie-picker-initial-setup/` folder and run:

```sh
cd 0_react-movie-picker-initial-setup
npm install
npm run dev
```

This will start the Vite development server and serve the initial project.

### 2️⃣ API Integration with React Query (Intermediate Stage)

The `1_react-movie-picker-API-react-query/` folder contains the movie picker with core API functionality but no UI styling. To run it:

```sh
cd 1_react-movie-picker-API-react-query
npm install
npm run dev
```

### 3️⃣ Final Project (Fully Completed Version)

The `2_react-movie-final-project/` folder contains the full implementation, including API integration, UI, and all functionalities.

```sh
cd 2_react-movie-final-project
npm install
npm run dev
```

Open in Browser:
Open http://localhost:5173 in your browser to view the app.

## 🛠 Technologies Used

- **React 18** - Component-based UI library
- **Vite** - Fast build tool
- **React Router** - Routing management
- **React Query** - Data fetching and caching
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first styling framework
- **ESLint** - Code quality enforcement
- **Vitest** - Testing framework

## 📌 Notes

- The final project includes additional dependencies like `@tanstack/react-query` and `react-spinners` for enhanced functionality.
- Ensure you have **Node.js** installed before running the projects.
- If you encounter any errors, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

Happy coding! 🎬🚀
