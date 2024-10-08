import { Router } from "express";
import {  
    changeCurrentPassword,
    getCurrentUser, 
    loginUser, 
    logoutUser, 
    refreshAccessToken,
    UpdateAccountDetails,
    register,
    getmessage,
    profilelink
} from "../controllers/user.controller.js";
import { verifyJwt } from '../middlewares/auth.middleware.js';

const router = Router();

// Public Routes
router.route("/register").post(register);
router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/change-password").patch(verifyJwt, changeCurrentPassword);
router.route("/current-user").get(verifyJwt, getCurrentUser);
router.route("/update-account").patch(verifyJwt, UpdateAccountDetails);
router.route('/generatelink').get(verifyJwt, profilelink);
router.route("/getmessages").get(verifyJwt, getmessage);

export default router;
