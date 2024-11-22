import express from 'express';
import { Connection } from './Database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';




const app= express();
const port = 8000;

const password=process.env.DB_PASSWORD;

Connection();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router);






app.listen(port,()=>{
  console.log("running server "+port)
})

DefaultData();