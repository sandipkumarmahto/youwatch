import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
   username:{
       type:String,
       required:true,
       unique:true,
       lowercase:true,
       trim:true,
       index:true
   },
   email:{
       type:String,
       required:true,
       unique:true,
       lowercase:true,
       trim:true,
   },
   fullname:{
       type:String,
       required:true,
       trim:true,
       index:true
   },
   avatar:{
       type:String,//cloudinary url
       required:true
   },
   coverImage:{
       type:String, //cloudinary
   },
   watchHistory:[
       {
           type:Schema.Types.ObjectId,
           ref: "video"
       }
   ],
   password:{
       type:String,
       required:[true,'password is required'  ]

   },
   refreshToken:{
        type:String
   }

},
{
    timestamps:true
}

)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect=async function 
(password) {
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname: this.fullname,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECTRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)