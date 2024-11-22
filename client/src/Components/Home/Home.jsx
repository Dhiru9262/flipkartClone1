import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productAction";
import {useDispatch, useSelector} from 'react-redux';
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


const Home = ()=>{

//usesse of reduxDB
const {products} = useSelector(state => state.getProducts)
//  console.log(products);




// it is use to transfer data from db to redux db 
  const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(getProducts())
   },[dispatch])

  return(
    <>
      <NavBar />
      <Banner />
      <MidSlide products={products} title="Deal of the day" timer={true}/>
      <MidSection />
      <Slide products={products} title="Discounts for you" timer={false}/>
      <Slide products={products} title="Suggested Items" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
    </>
  )
}
export default Home;