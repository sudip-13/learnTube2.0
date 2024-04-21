import express from 'express';
import { uploadVideo,getVideoDetails} from '../controllers/video';
import multer from 'multer';
const VideoRouter = express.Router();

const storage = multer.diskStorage({
    destination: './build/uploads/',
});

const upload = multer({ storage });


VideoRouter.post('/uploadvideo', uploadVideo);

VideoRouter.post('/getvideodetails', getVideoDetails);


export default VideoRouter;