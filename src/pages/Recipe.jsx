import { useEffect, useState } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { useNavigate, useParams } from "react-router-dom";

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const getRecipe = async (id) => {
    const dataStorage = localStorage.getItem(`recipe-${id}`);
    if (dataStorage) {
      setRecipe(JSON.parse(dataStorage));
    } else {
      const response = await fetch(`${apiUrl}/recipes/${id}/information?apiKey=${apiKey}`);
      const data = await response.json();
      setRecipe(data);
      localStorage.setItem(`recipe-${id}`, JSON.stringify(data));
    }
  };

  const handleClickInstructions = () => {
    setActive(true);
  };

  const handleClickIngredients = () => {
    setActive(false);
  };

  useEffect(() => {
    if (!id) {
      navigate("/not-found");
    }
  }, []);

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  return (
    <div className="mt-10 bg-white p-10 rounded-xl">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-xl font-bold text-center mb-6">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="rounded-2xl" />
      </div>
      <div className="text-base text-justify mb-6 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>

      <div className="flex flex-row gap-6 mb-4">
        <button
          type="button"
          className={`${active ? "bg-gray-800" : "bg-slate-100"}  no-underline px-4 py-1 md:px-6 md:py-2 rounded-sm ${active ? "text-white" : "text-gray-800"} text-base font-medium ${active ? "" : "border-2 border-gray-800"}`}
          onClick={handleClickInstructions}
        >
          Instructions
        </button>
        <button
          type="button"
          className={`${!active ? "bg-gray-800" : "bg-slate-100"}  no-underline px-4 py-1 md:px-6 md:py-2 rounded-sm ${!active ? "text-white" : "text-gray-800"} text-base font-medium ${!active ? "" : "border-2 border-gray-800"}`}
          onClick={handleClickIngredients}
        >
          Ingredients
        </button>
      </div>

      {active ? (
        <div className="text-base text-justify text-gray-800" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
      ) : (
        <div className="text-base text-justify text-gray-800">
          <ol className="list-disc">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
