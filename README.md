# Web - React Room Management Application

A modern React application built with TypeScript, Vite, and TailwindCSS for managing and viewing rooms. This project features a clean UI with room cards and navigation capabilities.

## 🚀 Features

- **Room Listing**: View all available rooms in a responsive grid layout
- **Room Navigation**: Navigate to individual room pages
- **Modern UI**: Built with TailwindCSS and Radix UI components
- **Type Safety**: Full TypeScript support
- **State Management**: React Query for efficient data fetching
- **Responsive Design**: Mobile-first approach with responsive grid

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **Styling**: TailwindCSS 4.1.11
- **UI Components**: Radix UI
- **State Management**: TanStack React Query 5.83.0
- **Routing**: React Router DOM 7.6.3
- **Icons**: Lucide React 0.525.0
- **Code Quality**: Biome 2.0.6

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Backend API** running on `http://localhost:3000`

## 🏃‍♂️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd web
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the backend server

**Important**: This application expects a backend API to be running on `http://localhost:3000` that provides:

- `GET /rooms` - Returns an array of room objects with the following structure:
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
  ```

Make sure your backend server is running before starting the frontend application.

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:5173` (or another available port).

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx
├── main.tsx
└── index.css
```

## 🔗 API Integration

The application currently connects to a backend API running on `http://localhost:3000`. The main endpoints used are:

- **GET** `/rooms` - Fetch all available rooms

### Example API Response

```json
[
  {
    "id": "room-1",
    "name": "Conference Room A",
    "description": "A spacious conference room with modern amenities"
  },
  {
    "id": "room-2",
    "name": "Meeting Room B",
    "description": "Small meeting room perfect for team discussions"
  }
]
```

## 🎨 Styling

This project uses:

- **TailwindCSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **Lucide React** for consistent iconography
- **Class Variance Authority** for component variants

## 🔧 Configuration

The project includes configuration files for:

- **TypeScript**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Vite**: `vite.config.ts`
- **Biome**: `biome.jsonc` (for linting and formatting)
- **Components**: `components.json` (for shadcn/ui components)

## 🚦 Development

1. Ensure your backend API is running on port 3000
2. Start the development server with `npm run dev`
3. Open your browser to `http://localhost:5173`
4. The app will automatically reload when you make changes

## 🏗️ Building for Production

```bash
npm run build
```

This will:

1. Run TypeScript compilation
2. Build the optimized production bundle
3. Output files to the `dist` directory

To preview the production build:

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure code follows the project's linting rules
5. Submit a pull request

## 📝 Notes

- The application expects a backend server to be running on `http://localhost:3000`
- Make sure to update API endpoints if your backend runs on a different port
- The project uses modern React features and requires Node.js 18+

## ⚡ Quick Start Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Backend API running on `http://localhost:3000`
- [ ] Development server started (`npm run dev`)
- [ ] Application accessible at `http://localhost:5173`

---

Built with ❤️ using React, TypeScript, and Vite.
