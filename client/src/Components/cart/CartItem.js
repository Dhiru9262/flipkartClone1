
import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)({
  borderTop: '1px solid #f0f0f0',
  backgroundColor:'white',
  display:'flex'
})

const LeftComponent = styled(Box)({
  margin: '20px',
  display:'flex',
  flexDirection:"column"
}) 
const SmallText = styled(Typography)({
  color:'#878787',
  fontSize:14,
  marginTop:10
})

const Remove = styled(Button)({
  marginTop:'20px',
  fontSize:'16px',
  color:'#000',
  fontWeight:500
})


const CartItem = ({item}) =>{

  const dispatch = useDispatch();

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  const removeItemFromCart= (id) =>{
    dispatch(removeFromCart(id));
  }

  return(
    <Component>
    <LeftComponent>
      <img style={{height:110, width:110}} src={item.url} alt="Product" />
      <GroupedButton />
    </LeftComponent>
    <Box style={{margin:20}}>
        <Typography>{ addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet <Box component='span'><img style={{width:50, marginLeft:10}} src={fassured} alt="img" /></Box></SmallText>
        {/* price tag */}
        <Typography>
                    <Box component='span' style={{fontSize:18,fontWeight:600}}>₹{item.price.cost}</Box>
                    <Box component='span' style={{color:'#878787', margin:10}}><strike>₹{item.price.mrp}</strike></Box>
                    <Box component='span' style={{color:'#388e3c'}}>{item.price.discount}</Box>
        </Typography>
        <Remove onClick={()=>{removeItemFromCart(item.id)}}>Remove</Remove>
    </Box>
    </Component>
  )
}

export default CartItem;