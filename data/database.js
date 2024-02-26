import mongoose from "mongoose";

//Database connection: 

export const connectDatabase = ()=>{
        mongoose.connect(process.env.MONGO_URI,{
        dbName:"backendAPI" 
    }).then((c)=>{
        console.log(`Database Connected with ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    })
} 