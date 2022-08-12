import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HandleNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/not-found");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-8xl text-gray-800 mb-2">404</h1>
      <h3 className="font-bold text-4xl text-gray-800 mb-4">Not Found</h3>
      <Link to="/" className="bg-gray-800 no-underline px-6 py-2 rounded-lg text-white text-base font-medium hover:bg-gray-700 hover:shadow-2xl hover:text-white">
        Back
      </Link>
    </div>
  );
}
