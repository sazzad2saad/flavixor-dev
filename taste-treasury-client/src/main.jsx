import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";


// 🔧 DEBUG: Expose env vars to console (development only)
// if (import.meta.env.DEV) {
//   // Option A: Direct assignment
//   window.API_URL = import.meta.env.VITE_API_URL;
  
//   // Option B: Object with all env vars (safer)
//   window.env = {
//     VITE_API_URL: import.meta.env.VITE_API_URL,
//     MODE: import.meta.env.MODE,
//     DEV: import.meta.env.DEV,
//     PROD: import.meta.env.PROD,
//   };
  
//   console.log("🚀 Development Mode Active");
//   console.log("📡 API URL:", import.meta.env.VITE_API_URL);
//   console.log("🔍 Access via: window.API_URL or window.env");
// }


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster position="top-center" />
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
