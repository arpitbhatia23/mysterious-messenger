import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app =express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())
app.use(express.static("public"))
app.use((req, res, next) => {
    console.log(`Worker ${process.pid} handling request`);
    next();
  });
  
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.routes.js"


app.use("/api/v1/users",userRouter)
app.use("/api/v1/message",messageRouter)


export {app}