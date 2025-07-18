import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.jpeg"

const Cards = ({data,title}) => {
  
  

  return (
    <div className="bg-[#1F1E24] px-[5%] pt-[2%] flex flex-wrap w-full ">
      {data && data.map((c,i)=>(
        <Link className="w-[25vh] mr-[5%] mb-[5%] hover:scale-110 duration-300 " key={i}>
          <img src={
                c.backdrop_path || c.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      c.backdrop_path || c.poster_path
                    }`
                  : noimage} className="h-[35vh] w-[100%] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]" alt="" />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">{c.title || c.name || c.original_title}</h1>
          
        </Link>
      ))}
      
    </div>
  )
}

export default Cards;
