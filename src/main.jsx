import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

// Theme Management Functionality
const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Check for saved theme in localStorage on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme in localStorage
  };

  return (
    <div>
      {children}
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-800 dark:border-gray-200"
      >
        🌙
      </button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
