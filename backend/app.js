import express from "express"
import cors from "cors"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js"
const app= express()
config ({ path: ".env"})
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js"


app.use(
    cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], 
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
    })
);

app.use(cookieParser())

// used to convert json into string
app.use(express.json()) 

app.use(express.urlencoded({extended: true}))

app.use(
    fileUpload({
    useTempFiles: true,
    tempFilesDir: "/temp/"
}))

app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/appointment",appointmentRouter)

dbConnection()

app.use(errorMiddleware)
export default app;