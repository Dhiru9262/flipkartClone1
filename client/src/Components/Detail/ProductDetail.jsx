
import { Typography,Box,styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)({
  verticalAlign:'baseline',
  marginBottom:20
})

const StyledIcon = styled(LocalOfferIcon)({
 marginRight:10,
 color:'#00cc00',
 fontSize:'15px',

})





const ProductDetail=({product})=>{

   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


   const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


   let today = new Date();
   today.setDate(today.getDate() + 5); // Add 5 days to the current date
   let options = { weekday: 'long', year: undefined, month: 'long', day: 'numeric' };
   // Optional: Format the date to a readable string
   let formattedDate = today.toLocaleDateString('en-US', options); 
  return(
    <>
 <Typography>{ product.title.longTitle }</Typography>
                <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>8 Ratings and 1 Reviews
                    <Box component='span'><img src={fassured}  style={{width:'11%', marginLeft:20}}/></Box>
                </Typography>
                <Typography>
                    <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>
                    <Box component='span' style={{color:'#878787', margin:10}}><strike>₹{product.price.mrp}</strike></Box>
                    <Box component='span' style={{color:'#388e3c'}}>{product.price.discount}</Box>
                </Typography>
                
                <Typography>Avilable offers</Typography>
                <SmallText>
                    <Typography style={{fontSize:14, marginTop:10}}><StyledIcon /> Partner Offer Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</Typography>

                    <Typography style={{fontSize:14, marginTop:10}}><StyledIcon /> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</Typography>

                    <Typography style={{fontSize:14, marginTop:10}} ><StyledIcon />Bank Offer 10% off up to ₹1,500 on Axis Bank Credit Card (incl. migrated ones) on orders of ₹4,990 and above T&C</Typography>

                    <Typography style={{fontSize:14, marginTop:10}}><StyledIcon />Bank Offer 10% off up to ₹1,750 on Axis Bank Credit EMI (incl. migrated ones) on orders of ₹4,990 and above T&C</Typography>
                </SmallText>
                
                <Table >
                    <TableBody>
                        <TableRow >
                          <TableCell style={{color:'#878787',fontWeight:600,borderBottom:'none'}}>Delivery</TableCell>
                          <TableCell style={{fontWeight:600,borderBottom:'none'}}>Delivery by {formattedDate} | ₹40</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell style={{color:'#878787',fontWeight:600,borderBottom:'none'}}>Warranty</TableCell>
                          <TableCell style={{borderBottom:'none'}} > No Warranty</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell style={{color:'#878787',fontWeight:600,borderBottom:'none'}}>Seller</TableCell>
                          <TableCell style={{borderBottom:'none'}}> 
                          <Box component='span'style={{color:'#2874f0' ,fontSize:16,borderBottom:'none'}}>
                             SupperCommnet 
                          </Box>
                          <Typography style={{fontSize:12,borderBottom:'none'}}>• No Returns Allowed</Typography>
                          <Typography style={{fontSize:12,borderBottom:'none'}}>• GST invoce avilable</Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell colSpan={2} style={{borderBottom:'none'}}>
                            <img src={adURL} alt='ad' style={{width:'55%'}}/>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell style={{color:'#878787',fontWeight:600}}>Description</TableCell>
                          <TableCell > {product.description}</TableCell>
                        </TableRow>

                    </TableBody>

                </Table>


                    </>
  )
}

export default ProductDetail;