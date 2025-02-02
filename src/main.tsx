import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Categories from "./components/Categories.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ContactFooter from "./components/ContactFooter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Categories />
    <AboutUs />
    <ContactFooter />
  </StrictMode>
);
