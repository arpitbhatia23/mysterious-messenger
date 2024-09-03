import { Router } from "express";
import {  
    changeCurrentPassword,
    getCurrentUser, 
    loginUser, 
    logoutUser, 
    refreshAccessToken,
 UpdateAccountDetails,
 register
     } from "../controllers/user.controller.js";
  import {verifyJwt} from '../middlewares/auth.middleware.js'
import { getmessage ,profilelink} from "../controllers/user.controller.js";

const router =Router()
router.route("/register").post(register)
router.route("/login").post(loginUser)     
// secured 
router.route("/logout").post(verifyJwt ,logoutUser)

router.route("/refreshToken").post(refreshAccessToken)
  
router.route("/change-password").post(verifyJwt,changeCurrentPassword)

router.route("/current-user").get(verifyJwt ,getCurrentUser)

router.route("/update-account").patch(verifyJwt,UpdateAccountDetails)
router.route('/generatelink').get(verifyJwt,profilelink)


// take otp and newPassword

router.route("/getmessages").get(verifyJwt,getmessage)


    export default router