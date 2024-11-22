import mongoose from "mongoose";



export const Connection =async()=>{
  
  const URL=`mongodb://dhirajdky9262:eE7J50l3ZXSr986t@flipkartclone-shard-00-00.kd22p.mongodb.net:27017,flipkartclone-shard-00-01.kd22p.mongodb.net:27017,flipkartclone-shard-00-02.kd22p.mongodb.net:27017/?ssl=true&replicaSet=atlas-co1yvq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=flipkartClone`;
  try {
    await mongoose.connect(URL,{useUnifiedTopology: true,usenewUrlParser:true});
    console.log("db connect Successfully");
    
  } catch (error) {
    console.log("error while connecting the db"+error.message);
  }
}