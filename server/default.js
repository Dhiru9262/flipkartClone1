import { products } from "./constant/data.js"
import Product from "./model/productSchema.js";

const DefaultData = async()=>{
try {
  // await Product.deleteMany({});
   await Product.insertMany(products);
  console.log("data imported sucessfully")
} catch (error) {
  console.log("error while inserting the DefoultData"+error.message);
}
}

export default DefaultData;