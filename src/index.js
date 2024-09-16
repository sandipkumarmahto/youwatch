import connectDB from "./db/index.js";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        Credential:true
    }
))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extends:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 5000,() =>{
        console.log(`server is runnig at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongo db connection failed !!!",err)
})