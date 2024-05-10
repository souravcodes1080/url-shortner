import express from 'express';
import dotenv from 'dotenv';
import {connectdb} from './db/db.config.js'
import { urlRouter } from './route/url.route.js';

//middleware configuration
dotenv.config();
const app = express();

app.use(express.json())

//database connection
connectdb();


//api endpoints
app.use("/", urlRouter)



//create a http server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}\n${process.env.BACKEND_DOMAIN}`)
});