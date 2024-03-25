import express from "express"
import connectToDB from "./db/db.js";
import dotenv from "dotenv"
const port = process.env.PORT || 4000
dotenv.config({
    path: './env'
});
const app = express();

// connecting to db
connectToDB()
//server starting
.then(()=>{
    app.listen(port, ()=>{
        console.log(`app is running on ${port}`);
    })    
})