import mongoose from  "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        dbName: "Hospital Management System"
    }).then(()=>{
        console.log("Connected to database");
        
    }).catch((err)=>{
        console.log(`Some error occured while connecting to db: ${err}`);
        
    })
}