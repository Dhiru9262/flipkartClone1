import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import {Box, styled, Typography,Grid} from"@mui/material";
import ActionItems from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)({
  background:'#f2f2f2',
  
});

const Mcontainer = styled(Grid)(({ theme })=>({
  backgroundColor:'#fff',
  display:"flex",
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}));

const RightContainer = styled(Grid)({
marginTop:50
})



const DetailView =()=>{

 


  const dispatch = useDispatch();
  const {id}=useParams();


  const {loading, product}= useSelector(state=>state.getProductDetails);

  useEffect(() =>{
    if (product && id !==product.id) {
      dispatch(getProductDetails(id))
    }
  },[dispatch,id,product,loading])

 
 console.log(product);
  return(
<Component>
  {   product && Object.keys(product).length &&
    <Mcontainer container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItems product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <ProductDetail product={product} />
            </RightContainer>
          
        </Mcontainer>
  }
</Component>
  )

}

export default DetailView;