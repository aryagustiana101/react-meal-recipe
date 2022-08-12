import { useState, useEffect } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

export default function Result() {
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const getResults = async (category) => {
    const response = await fetch(`${apiUrl}/recipes/complexSearch?apiKey=${apiKey}&query=${category}`);
    const data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    if (!searchParams.get("keyword")) {
      navigate("/not-found");
    }
  }, []);

  useEffect(() => {
    getResults(keyword);
  }, [keyword]);

  return (
    <div className={results.length > 0 ? "grid grid-cols-2 gap-6 md:grid-cols-3" : "my-16"}>
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id}>
            <Link to={`/recipe/${result.id}`} className="no-underline text-gray-800 hover:text-gray-800">
              <img src={result.image} alt={result.title} className="w-full rounded-3xl" />
              <h4 className="text-center p-3 font-semibold">{result.title}</h4>
            </Link>
          </div>
        ))
      ) : (
        <h4 className="text-xl text-center">
          No results found for <span className="font-bold">{keyword}</span>
        </h4>
      )}
    </div>
  );
}
