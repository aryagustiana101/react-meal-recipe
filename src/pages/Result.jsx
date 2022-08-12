import { useState, useEffect } from "react";
import { apiUrl, apiKey } from "../config/api.js";
import { useSearchParams, useNavigate } from "react-router-dom";

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
    <div>
      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 gap-6">
        {results.length > 0
          ? results.map((result) => (
              <div key={result.id}>
                <img src={result.image} alt={result.title} className="w-full rounded-3xl" />
                <h4 className="text-center p-3 font-semibold">{result.title}</h4>
              </div>
            ))
          : "asd"}
      </div>
    </div>
  );
}
