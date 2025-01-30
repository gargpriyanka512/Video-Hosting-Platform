import dotenv from "dotenv" 
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed!!! ", err);
})


// Not using this approach as writing db connection code in the index.js file is populating this file unnecessarily.
//We will write this code in db folder.

/*
import express from "express"
const app = express()
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log('App is listening on port ${process.env.PORT}')
        })
    } catch (error){
        console.error("ERROR: ", error);
        throw error
    }
})()
*/