import { bannerData } from "../../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Banner = ()=>{
  return(
    <Box style={{margin:10}}>
   <Carousel responsive={responsive} 
   containerClass="carousel-container"
   swipeable={false}
  draggable={false}
  infinite={true} 
  autoPlay={true}
  autoPlaySpeed={3000}
>
   { bannerData.map(data =>(
<img style={{width:'100%', height:280 }} src={data.url}></img>

    ))}
   </Carousel>
   </Box>
  )
}

export default Banner;