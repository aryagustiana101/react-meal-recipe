import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="my-8 p-4 text-center text-base border-t-2 text-gray-500 font-medium">
      Made with
      <FaHeart className="text-base mx-1 inline text-red-400" />
      by{" "}
      <a href="https://github.com/aryagustiana101" target="_blank" className="no-underline">
        Arya Gustiana
      </a>
    </div>
  );
}
