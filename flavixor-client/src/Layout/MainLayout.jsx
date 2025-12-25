import React from "react";

import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-screen mx-auto  bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-black ">
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-242px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
