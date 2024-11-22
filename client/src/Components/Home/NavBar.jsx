import { Box , styled, Typography} from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({theme})=>({
  backgroundColor:'white',
  display:'flex',
  margin:'80px 10px 0 10px',
  padding:'0 40px 20px 40px ',
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]:{
    margin:0,
  },
  overflow:'overlay'
}))
const Container = styled(Box)({
  textAlign:'center'
}) 

const Text = styled(Typography)({
  fontSize:14,
  fontWeight:600
})

const NavBar =() =>{
  return(
    <Component>
      {
        navData.map(data=>(
          <Container >
            <img src={data.url} alt='nav'  style={{width:64, marginTop:10}}></img>
            <Text>{data.text}</Text>
          </Container>
        ))
      }
      </Component>
  )
}

export default NavBar;