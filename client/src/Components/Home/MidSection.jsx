import {Grid, Grid2 } from "@mui/material";

export const imageURL = [
  'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
  'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
  'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];



const MidSection =()=>{

return(
  <Grid lg={12} sm={12} md={12} xs={12} container>
{
imageURL.map( image=>(
  <Grid item lg={4} sm={12} md={4} xs={12} >
  <img src={image} alt="img" width={'100%'}  /> 
</Grid>
  ))
}
  </Grid>
)

}

export default MidSection;