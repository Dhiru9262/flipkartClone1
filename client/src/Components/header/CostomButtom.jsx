import { Badge, Box,Button, Typography,styled } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginDialog from "../Login/loginDialogue";
import { useState , useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Wrapper = styled(Box)(({theme})=>({
  color:'black',
  display:'flex',
  marginLeft:10,

  [theme.breakpoints.down('md')]:{
    display:'block',
    paddindTop:18
  }

}))

const CartWrapper = styled(Link)({
  display:'flex',
  margin:'0 75px',
  color:"black",
  textDecoration:'none'
});

const CostomButton =()=>{
//state for dialog for login
const[open,setOpen] = useState(false);
const {account,setAccount}= useContext(DataContext);

const {cartItems}= useSelector(state => state.cart);


const openDialog =()=>{
  setOpen(true);
}



  return(
    <Wrapper>
    {
      account ? <Profile account={account} setAccount={setAccount}></Profile>
      :
      <Button onClick={()=>{openDialog()}} style={{backgroundColor:"transparent", color: 'black', textDecoration:'none',boxShadow:'none'}} variant="contained"> <AccountCircleOutlinedIcon /> LogIn</Button>
    }
  
      <CartWrapper to="/cart">
      <Badge badgeContent={cartItems?.length} color="primary">
      <ShoppingCartOutlinedIcon style={{ color: 'black' }}/>
      </Badge>
      <Typography>Cart</Typography>
      </CartWrapper>
      <Box display={'flex'} >
      <StorefrontOutlinedIcon style={{ color: 'black' }} />
      <Typography>Become a Seller</Typography>
      </Box>
    <MoreVertIcon style={{marginLeft:23}} />
    <LoginDialog open={open} setOpen={setOpen}/>
    
    </Wrapper>
  )
}

export default CostomButton;