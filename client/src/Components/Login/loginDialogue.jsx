 import{ Dialog, TextField ,Box,Typography,Button,styled}from '@mui/material'
 import { useState,useContext } from 'react'
import { authenticateSignup , authenticateLogin} from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';
const Component = styled(Box)({
  display:'flex',
height:'70vh',
width:'90vh',
})

const Image = styled(Box)({
background:'#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) 85% center no-repeat',
height:'82%',
width:'40%',
padding:'45px 35px'
})

const Wrapper = styled(Box)({
  display:'flex',
  flexDirection:'column',
  padding:'25px 35px',
  // flex:1
})

const LoginButton=styled(Button)({
textTransform:'none',
backgroundColor:'#fb641b',
color:'#fff',
height:48,
borderRadius:3
})

const RequestButton=styled(Button)({
textTransform:'none',
backgroundColor:'#fff',
color:'#2874f0',
height:48,
borderRadius:3,
boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)'
})

 const LoginDialog = ({open,setOpen})=>{

  const accountInitialValues ={
    login:{
      view:'login',
      heading:'Login',
      subHeading:'Get access to your Orders, wishlist and Recomandation '
    },
    signup:{
      view:'signup',
      heading:'Looks like you are new here',
      subHeading:'signup with your mobile to get start'
    }
  }


  const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  }

  const loginInitialValues={
    username:'',
    password:''
  }

  const [account,toggleAccount]=useState(accountInitialValues.login);
  const [signup,setSignup]=useState(signupInitialValues)
  const {setAccount}= useContext(DataContext);
  const [login,setLogin]=useState(loginInitialValues);
  const [error ,setError]= useState(false);

  const toggleSignup=()=>{
    toggleAccount(accountInitialValues.signup)
  }

const handleClose =()=>{
  setOpen(false);
  toggleAccount(accountInitialValues.login);
  setError(false);
}

const onInputChange =(e)=>{
setSignup({
  ...signup, [e.target.name]:e.target.value}
)
// console.log(signup)
}

const signupUser =async()=>{
  let response = await authenticateSignup(signup);
  if (!response) {
    return;
  }
  handleClose();
  setAccount(signup.firstname)
}


const onValueChange = (e)=>{
setLogin({...login,[e.target.name]: e.target.value})
}

const loginUser= async()=>{
let response = await authenticateLogin(login);
if (response.status === 200) {
  handleClose();
  setAccount(response.data.data.firstname);
}
else{
setError(true);
}
}

  return(
//onclose use for "bahar click krne pe kya hoga"
<Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'none',maxHeight:'none'}}}>  
 <Component>
 <Image>

    <Typography variant='h5' style={{color:'white'}}>{account.heading}</Typography>
    <Typography style={{marginTop:20,color:'white'}}>{account.subHeading} </Typography>

 </Image>
      {
        account.view==='login'?
            <Wrapper>  
            <TextField onChange={(e)=>{onValueChange(e)}} name='username' variant="standard" label='Entre Username'/>
            <TextField onChange={(e)=>{onValueChange(e)}} name='password' variant="standard" label='Entre password'/>

           {error && <Typography color='warning'>please entre valid username password</Typography>}

            <Typography style={{margin:'10px 0', fontSize:12}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
            <LoginButton onClick={()=>{loginUser()}}>Login</LoginButton>
            <Typography style={{textAlign:'center', margin:19}}>or</Typography>
            <RequestButton>Request OTP</RequestButton>
            <Typography onClick={()=>toggleSignup()} style={{textAlign:'center', marginTop:10 , cursor:'pointer', color:'#2874f0'}}>New to Flipkart? Create an account</Typography>
            </Wrapper>
      :
            <Wrapper>  
          
            <TextField onChange={(e)=>onInputChange(e)} name='firstname' variant="standard" label='Entre FirstName'/>
            <TextField onChange={(e)=>onInputChange(e)} name='lastname' variant="standard" label='Entre LastName'/>
            <TextField onChange={(e)=>onInputChange(e)} name='username' variant="standard" label='Entre UserName'/>
            <TextField onChange={(e)=>onInputChange(e)} name='email' variant="standard" label='Entre Email'/>
            <TextField onChange={(e)=>onInputChange(e)} name='password' variant="standard" label='Entre Password'/>
            <TextField onChange={(e)=>onInputChange(e)} name='phone' variant="standard" label='Entre Phone Number'/>
            <LoginButton onClick={()=>{signupUser()}} style={{marginTop:30,width:300}}>Continue</LoginButton>
            
            </Wrapper>

}

 </Component>

</Dialog>
  )
 }

 export default LoginDialog;