import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/LazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
const HeroBanner = () => {
  const [bg, setBg] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
const {data,loading}=useFetch("/movie/upcoming")

useEffect(()=>{
const bgImg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
setBg(bgImg)
},[data])


   
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
         <Img src={bg}/>
     </div>
      } 
       <div className="opacity-layer">

        
       </div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="Subtitle">
            Millions of movies,TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
