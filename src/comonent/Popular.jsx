import React from 'react'

const Popular = () => {
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
  return (
    <div>Popular</div>
  )
}

export default Popular