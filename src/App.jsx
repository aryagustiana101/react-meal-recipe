import Home from "./pages/Home";
import Result from "./pages/Result";
import Cuisine from "./pages/Cuisine";
import NotFound from "./pages/NotFound";
import Search from "./components/Search";
import { useMatch } from "react-router-dom";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import HandleNotFound from "./pages/HandleNotFound";

export default function App() {
  return (
    <div className={!useMatch("/not-found") ? `mx-4 md:mx-[20%]` : ""}>
      {!useMatch("/not-found") ? <Search /> : ""}
      {!useMatch("/not-found") ? <Category /> : ""}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cuisine/:category" element={<Cuisine />} />
        <Route exact path="/search" element={<Result />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route path="*" element={<HandleNotFound />} />
      </Routes>
    </div>
  );
}
