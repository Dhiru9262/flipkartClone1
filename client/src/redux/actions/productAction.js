import axios from "axios";
import * as actionTypes from '../constants/productConstant'


const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch)=>{
  try {
    // object destructuring 
    let { data } = await axios.get(URL+'/products');
    
    dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS , payload: data})
  } catch (error) {
    console.log('error while calling getProduct calling'+ error.message);
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
  } 
}

export const getProductDetails =(id)=>async(dispatch)=>{
try {
   dispatch({type: actionTypes.GET_PRODUCT_DETAIL_REQUEST});

   const {data} = await axios.get(URL+`/product/${id}`);
   dispatch({type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS , payload: data})

} catch (error) {
  dispatch({type:actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message})
}
}