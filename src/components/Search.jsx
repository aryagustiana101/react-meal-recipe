import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate({
        pathname: "/search",
        search: `?keyword=${keyword}`,
      });
    }
  };

  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setKeyword(keyword);
    }
  }, []);

  useEffect(() => {
    if (keyword) {
      navigate({
        pathname: "/search",
        search: `?keyword=${keyword}`,
      });
    } else {
      navigate("/");
    }
  }, [keyword]);

  return (
    <form className="mt-8" onSubmit={onSubmitHandler}>
      <div className="w-full relative">
        <FaSearch className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-3/4 text-xl text-slate-700" />
        <input onChange={onChangeHandler} type="text" className="w-full border-none outline-none rounded-2xl py-4 px-12 bg-slate-200 text-xl" value={keyword} />
      </div>
    </form>
  );
}
