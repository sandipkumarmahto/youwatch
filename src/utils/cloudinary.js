import { v2 as cloudinary } from "cloudinary"
import fs from fs

import { v2 as cloudinary } from 'cloudinary';



// Configuration
cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
});

const uploadcloudinary= async (localFilePath) => {
    
    try {
        if(!localFilePath) return null
        // upload the file on cloudiary
        cloudiary.uploader.upload(localFilePath, {
            resource_type:"auto"

        })
        //file have een uploaded successfully
        console.log("file is uploaded of cloudinary",
        response.url);
        return response;

    } catch (error) {
        fs.unlinSync(localFilePath) //remove the locally save temperory file as the upload  got failed
        return nulll;
    }
}
  

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'ddojnr1zn', 
        api_key: '878683171669146', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();