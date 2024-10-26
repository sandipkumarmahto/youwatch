import {asyncHander} from "../utils/asyncHandler.js"
src


const registerUser = asyncHander( async (req,res) =>{
    res.status(200).json({
        message: "ok"
    })
} )


export {registerUser}