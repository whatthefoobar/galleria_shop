import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile') // add the protect middleware wherever we want to protect a route w jwt
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
