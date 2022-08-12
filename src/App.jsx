import Home from "./pages/Home";
import Result from "./pages/Result";
import Recipe from "./pages/Recipe";
import Cuisine from "./pages/Cuisine";
import NotFound from "./pages/NotFound";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { useLocation, useMatch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import HandleNotFound from "./pages/HandleNotFound";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={!useMatch("/not-found") ? `mx-4 md:mx-[20%]` : ""}>
        {!useMatch("/not-found") ? <Navbar /> : ""}
        {!useMatch("/not-found") ? <Search /> : ""}
        {!useMatch("/not-found") ? <Category /> : ""}
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Result />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route exact path="/cuisine/:category" element={<Cuisine />} />
          <Route path="*" element={<HandleNotFound />} />
        </Routes>
        {!useMatch("/not-found") ? <Footer /> : ""}
      </div>
    </AnimatePresence>
  );
}
