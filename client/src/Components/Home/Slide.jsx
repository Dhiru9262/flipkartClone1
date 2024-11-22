import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Button, Divider, Typography,colors,styled} from '@mui/material';
import Countdown from 'react-countdown';
import  {Link} from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Component =styled(Box)({
  margin:10,
  backgroundColor:"white"

});

const Deal = styled(Box)({
  padding:'15px 20px',
  display:'flex'
});

const DealText = styled(Typography)({
fontSize:22,
fontWeight:600,
marginRight:25
});

const VeiwAllButton = styled(Button)({
  marginLeft:'auto',
  backgroundColor:'#2874f0',
  borderRadius:2,
  fontSize:13,
  fontWeight:600

});

const Image = styled('img')({
  width:'auto',
  height:150
});

const Text = styled(Typography)({
  fontSize:14
})

const renderer = ({ hours, minutes, seconds}) => {
 
    return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>
};

const Slide = ({ products , title, timer}) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <Component>
    <Deal>

      <DealText>{title}</DealText>

      <Box display={"flex"} marginLeft={'10px'} alignItems={"center"} color={'#7f7f7f'} width={'80%'} >
      { timer && <>
        <img style={{width:24}} src={timerURL} alt="timer" /> 
        <Countdown date={Date.now()+5.04e+7} renderer={renderer} />
        </>
      }
        <VeiwAllButton variant="contained" > View All </VeiwAllButton>
      </Box>
    </Deal>
    <Divider /> 
    <Carousel responsive={responsive} containerClass="carousel-container"   swipeable={false}
    draggable={false}
    infinite={true} 
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    centerMode={true}
  >
      {products.map((product, index) => (
        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}> 
            <Box textAlign={'center'} style={{padding:'25px 15px'}}>
                  <Image key={index} src={product.url} alt={`product-${index}`} />
                  <Text style={{fontWeight:600 , color:'#212121'}}>{product.title.shortTitle}</Text>
                  <Text style={{color:'green'}}>{product.discount}</Text>
                  <Text  style={{color:'#7f7f7f'}}> {product.tagline}</Text>
            </Box>
        </Link>
      ))}
    </Carousel>
    </Component>
  );
};

export default Slide;
