import {app} from './app.js';
import {connectDatabase} from './data/database.js';


connectDatabase();

// console.log(process.env.PORT);
app.listen(process.env.PORT, (req,res)=>{
    console.log(`Server Listening at port:  ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})