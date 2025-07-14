import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import noimage from "../../../public/noimage.jpeg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const getSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSerches();
  }, [query]);

  return (
    <>
    <div className=" h-[10vh]  w-[90vh]  relative  flex justify-start items-center ml-[15%] ">
      <i className="ri-search-line text-3xl text-zinc-400 w-fit"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="border-none outline-none w-full p-5  mx-2 text-zinc-200 text-xl"
        type="text"
        placeholder="search anything"
        />
      {query.length > 0 ? (
        <i
        onClick={() => setquery("")}
        className="text-zinc-400 text-3xl w-fit   ri-close-fill cursor-pointer"
        ></i>
      ) : (
        " "
      )}

      <div className="w-[100%]  max-h-[60vh] bg-zinc-200   overflow-auto rounded-md  absolute top-[80%]">
        {searches.map((s, i) => {
          return (
            <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] text-zinc-600 flex  justify-start items-center border-b-2 border-zinc-100 p-6"
            >
              <img
                className="w-[10vh] h-[10vh]  object-cover shadow-lg rounded mr-5"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                    : noimage
                  }
                  alt=""
                  />
              <span className="text-3xl">
                {s.name || s.title || s.original_title || s.original_name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
          </>
  );
};

export default Topnav;
