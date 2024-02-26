import express from "express";
import userRoute from './routes/user.js'
import taskRoute from './routes/task.js'
import {config} from 'dotenv';
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from 'cors';

export const app = express();
const router = express.Router();

// to access ENV file
config({
    path:'./data/config.env'
})

// using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    // what methods can be allowed :
    methods:['GET',"POST",'PUT',"DELETE"],
    //credentials property is used to indicate whether the browser should include credentials 
    //such as cookies, HTTP authentication, and client-side SSL certificates in cross-origin requests
    credentials:true

}))
// using routes
app.use("/api/v1/users",userRoute);
app.use("/api/v1/task",taskRoute);


app.get('/',(req,res)=>{
    res.send("Working");
})

// error middleware
app.use(errorMiddleware)


