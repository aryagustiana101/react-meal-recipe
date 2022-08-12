import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function HandleNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/not-found");
  }, []);

  return <></>;
}
