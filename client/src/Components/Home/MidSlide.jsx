import { Box , styled} from "@mui/material";
import Slide from "./Slide";


const Component = styled(Box)({
  display:'flex'
})

const LeftComponent= styled(Box) (({theme})=>({
  width:'83%',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}));
const RightComponent= styled(Box)(({theme})=> ({
width:215,
height:355,
marginTop:10,
[theme.breakpoints.down('md')]:{
  display:'none'
}
}))


const MidSlide=({products,title,timer})=>{
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    < Component>
     <LeftComponent>
      <Slide products={products} title={title} timer={timer} />
     </LeftComponent>
     <RightComponent>
      <img src={adURL} alt='ad' style={{width:215,height:355}}></img>
     </RightComponent>
    </ Component>
  )
}

export default MidSlide;