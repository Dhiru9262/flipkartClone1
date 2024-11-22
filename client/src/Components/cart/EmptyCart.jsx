import { Box, styled, Typography } from "@mui/material"


const Component = styled(Box)({
  height:'65vh',
  // backgroundColor:'black',
  width:'80%',
  margin:'80px 120px',
  textAlign:'center'
})

const EmptyCart = () =>{


  return(
    <Box>
      <Component>
        <img src="   https://cdn-icons-png.flaticon.com/512/13983/13983166.png " />
        <Typography variant="h5"> Your cart is empty !</Typography>
      </Component>
    </Box>
  )
 
}
export default EmptyCart;