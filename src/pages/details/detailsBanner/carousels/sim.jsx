// import React from "react";

// import Carousel from "../../../../components/carousel/Carousel";
// import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";

// import useFetch from "../../../../hooks/useFetch";
// import { useParams } from "react-router-dom";

// const SimilarMovies = () => {
//   const  {id,mediaType} = useParams()

//     const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  
//     return (
//         <div className="carouselSection">
//             <ContentWrapper>
//                 <span className="carouselTitle">{mediaType==="movie"?"Simiar Movies":"Similar TV Shows"}</span>
           
//             </ContentWrapper>
//             <Carousel
//                 data={data?.results}
//                 loading={loading}
//                 endpoint={mediaType}
               
//             />
//         </div>
//     );
// };

// export default SimilarMovies;