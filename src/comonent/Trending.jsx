import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [trending, settrending] = useState([]);
  const [duration, setduration] = useState("day");
  const [category, setcategory] = useState("all");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      //settrending(data.results);
      if(data.results.length > 0){
        settrending((prevState)=>[...prevState,...data.results]);
        setpage(page+1);

      }else{
        sethasMore(false);

      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHendler = ()=>{
    if(trending.length === 0){
      GetTrending();
    }else{
      settrending([]);
      setpage(1);
      GetTrending();
    }
  }

  useEffect(() => {
    refreshHendler();
  }, [category, duration]);

  return trending.length >0?(
    <div className="h-full">
      <div className="w-screen flex items-center justify-between px-[3%] ">
        <div className="text-2xl text-zinc-300 flex gap-2 items-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line text-2xl hover:text-[#6556CD] cursor-pointer "
          ></i>
          <h1>Trending</h1>
        </div>
        <div className="w-[80%] flex items-center gap-3">
          <Topnav />
          <Dropdown
            title={"Category"}
            func={(e) => setcategory(e.target.value)}
            options={["movie", "tv", "all"]}
          />

          <Dropdown
            title={"Duration"}
            func={(e) => setduration(e.target.value)}
            options={["day", "week"]}
          />
        </div>
      </div>
      <div className="">
        <InfiniteScroll
          dataLength={trending.length}
          hasMore={hasMore}
          next={GetTrending}
          loader={<h4 className="text-3xl text-white">loader...</h4>}
        >
          <Cards data={trending} title={"ujjwal"} />
        </InfiniteScroll>
      </div>
    </div>
  ):<Loading />
};

export default Trending;

// import  { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "./templates/Topnav";
// import Dropdown from "./templates/Dropdown";
// import axios from "../utils/axios";
// import Cards from "./templates/Cards";
// import Loading from "./Loading";
// import InfiniteScroll from "react-infinite-scroll-component";

// const Trending = () => {
//   const [category, setcategory] = useState("all");
//   const [duration, setduration] = useState("day");
//   const [trending, settrending] = useState([]);
//   const [pages, setpages] = useState(1)
//   const [hashMore, sethashMore] = useState(true)

//   const getTrending = async () => {
//     try {
//       const { data } = await axios.get(`/trending/${category}/${duration}?page=${pages}`);
//      // settrending(data.results);
//      if(data.results.length > 0){
//             settrending((prevState) =>[...prevState, ...data.results])
//       setpages(pages+1);
//      }else{
//       sethashMore(false)

//      }
//       console.log(pages);

//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const refreshHendler = ()=>{
//     if(trending.length === 0 ){
//       getTrending();
//     }else{
//       setpages(1);
//       settrending([]);
//       getTrending();
//     }
//   }

//   useEffect(() => {
//     refreshHendler();
//   }, [category, duration]);

//   const navigate = useNavigate();

//   return trending && trending.length > 0 ? (
//     <div className="w-screen h-screen px-[2%]  ">
//       <div className="w-full text-zinc-400  flex items-center justify-between   ">
//         <div className="flex gap-2">
//           <i
//             onClick={() => navigate("/")}
//             className="ri-arrow-left-line text-2xl hover:text-[#6556CD] cursor-pointer "
//           ></i>
//           <h1 className=" text-2xl font-semibold">Trending</h1>
//         </div>
//         <div className="flex w-[80%] items-center  gap-2">
//           <Topnav />
//           <Dropdown
//             title={"Category"}
//             func={(e) => setcategory(e.target.value)}
//             options={["movie", "tv", "all"]}
//           />

//           <Dropdown
//             title={"Duration"}
//             func={(e) => setduration(e.target.value)}
//             options={["day", "week"]}
//           />
//         </div>
//       </div>

//       <InfiniteScroll
//       dataLength={trending.length}
//       next={getTrending}
//       hasMore={hashMore}
//       loader={<h4>Loading....</h4>}
//       >
//         <Cards title={category} data={trending} />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Trending;

// import Cards from "./templates/Cards";
// import { useNavigate } from "react-router-dom";
// import Topnav from "./templates/Topnav";
// import Dropdown from "./templates/Dropdown";
// import axios from "../utils/axios";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const Trending = () => {
//   const [category, setcategory] = useState("all");
//   const [trending, settrending] = useState([]);
//   const [duration, setduration] = useState("day");
//   const [page, setpage] = useState(1);
//   const [hashMore, sethashMore] = useState(true);

//   const GetTrending = async () => {
//     try {
//       const { data } = await axios.get(
//         `/trending/${category}/${duration}?page=${page}`
//       );
//       if (data.results.length > 0) {
//         settrending((prevState) => [...prevState, ...data.results]);
//         setpage(page + 1);
//       } else {
//         sethashMore(false);
//       }
//       //settrending(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const refreshHendler = () => {
//     if (trending.length === 0) {
//       GetTrending();
//     } else {
//       setpage(1);
//       settrending([]);
//       GetTrending();
//     }
//   };

//   useEffect(() => {
//     refreshHendler();
//   }, [category, duration]);
//   const navigate = useNavigate();
//   return (
//     <div className="h-screen w-screen">
//       <div className="flex items-center justify-between">
//         <div className=" text-zinc-200 flex gap-2 items-center pl-[3%] ">
//           <i
//             onClick={() => navigate("/")}
//             className="ri-arrow-left-line text-2xl hover:text-[#6556CD] cursor-pointer "
//           ></i>
//           <h1 className=" text-3xl font-semibold">Trending</h1>
//         </div>
//         <div className="w-[80%] flex gap-4 items-center pr-[3%] ">
//           <Topnav />
//           <Dropdown
//             title={"Category"}
//             func={(e) => setcategory(e.target.value)}
//             options={["movie", "tv", "all"]}
//           />

//           <Dropdown
//             title={"Duration"}
//             func={(e) => setduration(e.target.value)}
//             options={["day", "week"]}
//           />
//         </div>
//       </div>
//       <div className="py-[1%] px-[5%] bg-[#1F1E24]">
//         <InfiniteScroll
//           dataLength={trending.length}
//           next={GetTrending}
//           hasMore={hashMore}
//           loader={<h4>Loading...</h4>}
//         >
//           <Cards data={trending} title={category} />
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// };

// export default Trending;
