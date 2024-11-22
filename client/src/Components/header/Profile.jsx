import { Box, Typography, Menu,MenuItem, styled } from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

const Component = styled(Menu)({
  marginTop:5
})
const Logout=styled(Typography)({
  fontSize:14,
  marginLeft:20
})

const Profile =({account,setAccount})=>{

  const[open , setOpen]=useState(false);

 const handleClick=(event)=>{
setOpen(event.currentTarget);
  }

const handleClose=()=>{
  setOpen(false);
}

const logoutUser=()=>{
setAccount('');
}

  return(
    <>
<Box>
<Typography onClick={handleClick} style={{color: 'black', marginTop:2 , cursor:'pointer'}}> <AccountCircleOutlinedIcon />{account}</Typography>
</Box>
 <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={(e)=>{handleClose();logoutUser()}}>
        <PowerSettingsNewIcon color="primary" fontSize="small" /><Logout> Logout </Logout></MenuItem>
      </Component> 
      
    </>
  )
}

export default Profile;