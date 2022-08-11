import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cuisine/:category" element={<Cuisine />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
