import { InputBase,Box,styled, List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productAction";
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)({
  display:'flex',
  backgroundColor:'#eeeff4',
  width:'40%',
  height: 40,
  marginLeft:50,
 borderRadius:6,
})

const InputSearch = styled(InputBase)({
  marginLeft:5,
  marginTop:2,
  width:'100%',
  fontSize:18
})

const ListWrapper = styled(List)({
  position: "absolute",
  background:'white',
  color:'black',
  marginTop:36
})






const Search = ()=>{


   const [text,setText]= useState('');
   const {products} = useSelector(state => state.getProducts);
   const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(getProducts())
   },[dispatch]);

   const getText =(text)=>{
      setText(text);
    }
  return(
    <SearchContainer>
    <SearchIcon color="action"  style={{margin:'8px 4px'}}/>
<InputSearch color="action" placeholder="Search for product, Brand and more"
onChange={(e)=>getText(e.target.value)}
 />
{

text && 
<ListWrapper>
  {
    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
      <ListItem>
        {
          <Link to={`/product/${product.id}`} onClick={()=>{setText('')}} style={{textDecoration:'none', color:'black'}}>
          {product.title.longTitle}
          </Link>
        }
      </ListItem>
    ))
  }
</ListWrapper>


}


</SearchContainer>
  )
}
export default Search;