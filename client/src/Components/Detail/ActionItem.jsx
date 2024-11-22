import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
 


const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding:'40px 0 0 80px',
  [theme.breakpoints.down('md')]:{
    padding:5
  }

}))
const Image = styled('img')({
  width:'95%'  
   
})

const StyledButton = styled(Button)({
  width:'45%',
  marginTop:5,
  fontSize:13
})


const ActionItems = ({product}) =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [quantities , setQuantities]= useState(1);
  const {id} = product;


const addItemToCart = ()=>{
  dispatch(addCart(id,quantities))
navigate('/cart')
}

const buyNow = () =>{
  let response = payUsingPaytm({amount:500, email: 'dhirajdky9262@gmail.com' });
  let information = {
    action:'https://securegw-stage.paytm.in/order/process',
    params: response
  }
  post(information);
}


  return(
    <LeftContainer>
        <Box   style={{  padding: '15px 20px', border:'1px solid #f0f0f0' , marginRight:20}}>
        <Image src={product.detailUrl} alt="product" /> 
        </Box>

        <StyledButton onClick={()=>addItemToCart()} variant="contained" style={{marginRight:'4%',backgroundColor:'#ff9f00'}}> <ShoppingCartIcon />Add to cart</StyledButton>
        <StyledButton onClick={()=>{buyNow()}} variant="contained" style={{backgroundColor:'#fb541b'}}><FlashOnIcon />Buy now</StyledButton>
    </LeftContainer>
      
    
  )
}

export default ActionItems;