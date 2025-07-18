
import { Link } from "react-router-dom";

const Sidenav = () => {
 
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-10 ">
      <h1 className="text-2xl ">
        <i className="text-[#6556CD] text-3xl  ri-tv-fill mr-2"></i>
        <span className="text-white font-black ">FILMORY</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to={'/trending'} className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
          <i className="ri-fire-fill mr-2"></i> Trending
        </Link>
        <Link to={'/popular'} className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
       
          <i className="ri-bard-fill mr-2"></i> Popular

        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
          <i className="ri-movie-2-fill mr-2"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
          <i className="ri-slideshow-4-fill mr-2"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] my-8 bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mb-3 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-information-fill mr-2"></i> About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg">
          <i className="ri-phone-fill mr-2"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
