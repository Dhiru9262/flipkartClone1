import {useSelector} from 'react-redux';
import {Typography ,Grid,Box, styled, Button} from '@mui/material'
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
 

const Container = styled(Grid)(({theme})=>({
  padding:'30px 135px',
  marginTop:5,
[theme.breakpoints.down('md')]:{
  padding:'15px 0'
}
}))

const Header = styled(Box)({
padding:'15px 24px',
backgroundColor:'white'
})

const ButtonWrapper = styled(Box)({
  padding:'16px 22px',
  backgroundColor:'white',
  boxShadow:'0 -2px 10px 0 rgb(0 0 0 / 10%)',
  borderTop:' 1px solid #f0f0f0'
})

const StyledButton = styled(Button)({
  display: 'flex',
  marginLeft: 'auto',
  backgroundColor: '#fb641b',
  color:'#fff',
  width:250,
  borderRadius:2
})

const LeftComponent= styled(Grid)(({theme})=>({
[theme.breakpoints.down('md')]:{
  marginBotton:15
}
}));

const Cart =()=>{

  const { cartItems } = useSelector(state => state.cart);


  const buyNow = () =>{
    let response = payUsingPaytm({amount:500, email: 'dhirajdky9262@gmail.com' });
    let information = {
      action:'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }
  return(
   <>
{
  cartItems.length?
  <Container container>
      <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>My Cart ({cartItems.length})</Typography>
          </Header>
          {
            cartItems.map(item =>(
                <CartItem item={item}/>
            ))
          }

          <ButtonWrapper>
            <StyledButton onClick={buyNow}>place order</StyledButton>

          </ButtonWrapper>
      </LeftComponent>
    
      <Grid style={{paddingLeft:15}} item lg={3} md={3} sm={12} xs={12}>
          <TotalView  cartItems={cartItems}/>
      </Grid>
  </Container>
  :
 <EmptyCart />
}

   </>
  )
}

export default Cart;