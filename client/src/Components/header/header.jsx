import {AppBar, Toolbar, styled,Box ,Drawer,IconButton,List,ListItem} from '@mui/material';
import Search from './Search';
import CostomButton from './CostomButtom';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';


const StyledHeader = styled(AppBar)({
  background:'#FFFFFF',
  boxShadow:'none'

});
const RightComponents = styled(Box)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
  }));

const MenuButton = styled (IconButton)(({ theme })=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
      display:"block"
    }
}))






const Header = ()=>{
  const list =()=>{
    return(
    <Box width={300}>
      <List>
        <ListItem>
        <CostomButton />
        </ListItem>
      </List>
    </Box>);
  }

  const [open,setOpen]=useState(false);

  const handleOpen = ()=>{
setOpen(true)
  }
  const handleClose = ()=>{
setOpen(false)
  }




  const logoURL ='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
  return(
    <div className="App">
       <StyledHeader>
        <Toolbar>
       <MenuButton color='action' aria-label="delete" onClick={handleOpen}>
       <MenuIcon />
    </MenuButton>

    <Drawer open={open} onClose={handleClose}>
     {list()} </Drawer>

          <Link to={'/'}>
<img style={{marginLeft:5}} src={logoURL}></img>
          </Link>

          <Search />
          <RightComponents>
          <CostomButton />
          </RightComponents>
        </Toolbar>
       </StyledHeader>
    </div>
  )
}

export default Header;