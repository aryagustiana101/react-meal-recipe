import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const dataStorage = localStorage.getItem("popular");
    if (dataStorage) {
      setPopular(JSON.parse(dataStorage));
    } else {
      const response = await fetch(`${apiUrl}/recipes/random?apiKey=${apiKey}&number=10`);
      const data = await response.json();
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="my-16 mx-0">
      <h3 className="font-bold text-2xl">Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "0px",
            },
            768: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="min-h-[15rem] md:min-h-[20rem] rounded-3xl overflow-hidden relative mx-5 md:mx-0">
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
