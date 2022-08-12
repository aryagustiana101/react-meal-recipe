import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="pt-8 flex">
      <Link to={"/"} className="flex gap-1 flex-row no-underline text-gray-800 text-2xl hover:text-gray-500 justify-start items-center">
        <BiFoodMenu />
        <p className="font-logo">Meal Recipe</p>
      </Link>
    </div>
  );
}
