import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Category from "../components/Category";
import { apiUrl, apiKey } from "../config/api.js";
import { useParams, useNavigate } from "react-router-dom";

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
    <div className="mx-4 md:mx-[20%]">
      <Category />
      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 gap-6">
        {cuisines.map((cuisine) => (
          <div key={cuisine.id}>
            <img src={cuisine.image} alt={cuisine.title} className="w-full rounded-3xl" />
            <h4 className="text-center p-3 font-semibold">{cuisine.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
