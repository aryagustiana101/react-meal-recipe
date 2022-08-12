import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Cuisine() {
  const { category } = useParams();
  const [cuisines, setCuisines] = useState([]);

  const navigate = useNavigate();
  const categories = ["italian", "american", "korean", "chinese"];

  const getCuisines = async (category) => {
    const dataStorage = localStorage.getItem(`cuisines-${category}`);
    if (dataStorage) {
      setCuisines(JSON.parse(dataStorage));
    } else {
      const response = await fetch(`${apiUrl}/recipes/complexSearch?apiKey=${apiKey}&cuisine=${category}`);
      const data = await response.json();
      setCuisines(data.results);
      localStorage.setItem(`cuisines-${category}`, JSON.stringify(data.results));
    }
  };

  useEffect(() => {
    const isCategoryFound = categories.find((item) => item === category);
    if (!isCategoryFound) {
      navigate("/not-found");
    }

    getCuisines(category);
  }, [category]);

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-2 place-items-center md:grid-cols-3 gap-6">
      {cuisines.map((cuisine) => (
        <div key={cuisine.id}>
          <Link to={`/recipe/${cuisine.id}`} className="no-underline text-gray-800 hover:text-gray-800">
            <img src={cuisine.image} alt={cuisine.title} className="w-full rounded-3xl" />
            <h4 className="text-center p-3 font-semibold">{cuisine.title}</h4>
          </Link>
        </div>
      ))}
    </motion.div>
  );
}
