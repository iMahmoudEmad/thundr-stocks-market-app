# Stock Market Web App

A scalable and maintainable React web application for browsing Nasdaq-listed stocks.

## 📋 Table of Contents

- [Stock Market Web App](#stock-market-web-app)
  - [📋 Table of Contents](#-table-of-contents)
  - [👋 Introduction](#-introduction)
  - [✨ Features](#-features)
    - [Splash Screen](#splash-screen)
    - [Explore Screen](#explore-screen)
  - [🚀 Installation](#-installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [🏃‍♂️ Running the Application](#️-running-the-application)
    - [Development Mode](#development-mode)
    - [Production Build](#production-build)
    - [Preview Production Build](#preview-production-build)
    - [Linting](#linting)
  - [📡 API Integration](#-api-integration)
  - [📁 Project Structure](#-project-structure)
  - [🛠 Technology Stack](#-technology-stack)
  - [🧸 Wireframes](#-wireframes)
  - [🔧 Development](#-development)
    - [Key Implementation Details](#key-implementation-details)
    - [Code Organization](#code-organization)

## 👋 Introduction

This is a React-based stock market application that displays all stocks listed on the Nasdaq exchange. The app provides a clean, responsive interface for exploring stocks with search functionality and pagination.

## ✨ Features

### Splash Screen
- Displays Nasdaq logo centered on the screen
- Shows developer's name at the bottom of the screen

### Explore Screen
- Lists stocks from Nasdaq exchange with ticker and full name
- Infinite scrolling for loading more stocks
- Real-time search functionality (backend search)
- Search triggers while typing for better user experience

## 🚀 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd stock-market-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Polygon.io API key:
```env
VITE_POLYGON_API_KEY=your_polygon_api_key_here
```

> **Note:** You need to sign up at [Polygon.io](https://polygon.io/) to get a free API key.

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📡 API Integration

This application uses the [Polygon.io Stocks API](https://polygon.io/docs/stocks/get_v3_reference_tickers) to fetch stock data:

- **Endpoint:** `/v3/reference/tickers`
- **Features:** 
  - Fetches stock list with ticker and company name
  - Supports pagination for loading more results
  - Includes search functionality
  - API responses are cached to reduce redundant requests

## 📁 Project Structure

```
stock-market-web-app/
├── public/
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Static assets
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   └── thundr.svg
│   ├── components/        # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SplashScreen.tsx
│   │   └── index.ts
│   ├── constants/         # App constants and query keys
│   │   ├── index.ts
│   │   └── queryKeys.ts
│   ├── interfaces/        # TypeScript interfaces
│   │   ├── dividends.ts
│   │   └── index.ts
│   ├── services/          # API services and hooks
│   │   ├── http.ts
│   │   ├── index.ts
│   │   └── useStocks.ts
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   ├── main.tsx           # App entry point
│   └── vite-env.d.ts      # Vite type definitions
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
├── tsconfig.app.json     # TypeScript config for app
├── tsconfig.json         # Main TypeScript config
├── tsconfig.node.json    # TypeScript config for Node
└── vite.config.ts        # Vite configuration
```

## 🛠 Technology Stack

- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** TanStack Query (React Query)
- **HTTP Client:** Axios
- **API:** Polygon.io Stocks API
- **Linting:** ESLint

## 🧸 Wireframes

The application follows the provided wireframes for both splash screen and explore screen layouts, ensuring a clean and intuitive user interface.

## 🔧 Development

### Key Implementation Details

- **TypeScript:** Full type safety throughout the application
- **Responsive Design:** Clean and responsive UI that works on all devices
- **Error Handling:** Proper error handling for API rate limiting and network issues
- **Caching:** API responses are cached to minimize redundant requests
- **Search:** Real-time search functionality with debouncing
- **Infinite Scrolling:** Smooth pagination for browsing large datasets

### Code Organization

The codebase is organized for scalability and maintainability:
- Modular component structure
- Separation of concerns between UI and business logic
- Reusable service layer for API interactions
- Type-safe interfaces for all data structures
- Centralized constants and configuration

---

**Developer:** Mahmoud Emad Eldin  
**Version:** 0.1.0  
**License:** Private