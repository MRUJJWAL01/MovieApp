import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizentalCards from "./templates/HorizentalCards";
import Loading from "./Loading";
import Dropdown from "../comonent/templates/Dropdown"

const Home = () => {
  document.title = "Ujjwal || Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper ? (
    
    <> 
    
      <Sidenav />
      <div className="w-[80%] h-full  overflow-y-auto overflow-x-hidden    ">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizentalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
