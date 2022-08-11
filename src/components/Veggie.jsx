import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const dataStorage = localStorage.getItem("veggie");
    if (dataStorage) {
      setVeggie(JSON.parse(dataStorage));
    } else {
      const response = await fetch(`${apiUrl}/recipes/random?apiKey=${apiKey}&number=10&tags=vegetarian`);
      const data = await response.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div className="mb-10 mx-0">
      <h3 className="font-bold text-2xl mb-3">Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 2,
            },
            768: {
              perPage: 2,
            },
          },
          arrows: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="min-h-[10rem] rounded-3xl overflow-hidden relative mb-10">
                <p className="p-3 absolute z-10 left-1/2 bottom-0 -translate-y-1/2 -translate-x-1/2 text-white w-full text-center font-semibold text-base h-1/2 flex justify-center items-center">{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} className="rounded-3xl absolute left-0 w-full h-full object-cover" />
                <div className="z-[3] absolute w-full h-full bg-gradient-to-b from-black/0 to-black/50"></div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
