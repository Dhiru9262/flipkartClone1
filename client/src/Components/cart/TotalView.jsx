import { Box, Typography , styled } from "@mui/material";
import { useState, useEffect } from "react";

const Header = styled(Box)({
  padding:'15px 24px',
  background:'#fff',
  borderBottom:'1px solid #f0f0f0'
})

const Heading = styled(Typography)({
  color: '#878787'
})

const Conatiner = styled(Box)`
 padding:15px 24px;
 background:#fff;
 &>p{
  margin-bottom: 20px;
  font-size:14px
 }
`;

const Price = styled(Box)({
  float: "right"
})

const Discount = styled(Typography)({
  marginTop:15,
  color:'green',
  fontWeight:500
})

const TotalView =({cartItems}) =>{
 const [price,setPrice]= useState(0);
 const [discount, setDiscount]=useState(0);

 useEffect(()=>{
totalAmount();
 },[cartItems]);

 const totalAmount = () =>{
  let price =0;
  let discount=0;

  cartItems.map(item =>{
    price += item.price.mrp;
    discount += (item.price.mrp - item.price.cost);
  })

  setPrice(price);
  setDiscount(discount);
 }


  return(
   <Box>
    <Header>
      <Heading>PRICE DETAILS</Heading>
    </Header>
    <Conatiner>
      <Typography>Price ({cartItems?.length} item) 
        <Price component='span'> ₹{price} </Price>
      </Typography>
      <Typography> Discount  
        <Price component='span'> -₹{discount} </Price>
      </Typography>
      <Typography> Delivery Charges 
        <Price component='span'> ₹40 </Price>
      </Typography>
      <Typography variant="h6"> Total Amount 
        <Price component='span'> ₹{price - discount+40} </Price>
      </Typography>
      <Discount>you will save ₹{discount-40} on this order</Discount>
    </Conatiner>
   </Box>
  )
}

export default TotalView;