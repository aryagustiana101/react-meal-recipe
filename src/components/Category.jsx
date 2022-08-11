import { Link } from "react-router-dom";
import { BsEggFried } from "react-icons/bs";
import { GiChopsticks } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";

import React from "react";

export default function Category() {
  const location = useLocation();

  const categories = [
    {
      name: "Italian",
      icon: <FaPizzaSlice color="white" />,
      path: "/cuisine/italian",
    },
    {
      name: "American",
      icon: <FaHamburger color="white" />,
      path: "/cuisine/american",
    },
    {
      name: "Korean",
      icon: <BsEggFried color="white" />,
      path: "/cuisine/korean",
    },
    {
      name: "Chinese",
      icon: <GiChopsticks color="white" />,
      path: "/cuisine/chinese",
    },
  ];

  return (
    <div className="flex justify-center my-8">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.path}
          className={`flex flex-col justify-center items-center rounded-full mx-1 md:mr-8 w-20 h-20 ${location.pathname == category.path ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-gradient-to-r from-slate-400 to-stone-500"}`}
        >
          {category.icon}
          <h4 className="text-xs font-semibold text-white">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
}
