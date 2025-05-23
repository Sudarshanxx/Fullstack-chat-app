import express from 'express';
import { getUsersForSidebar } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js"; // Assuming you have a controller for messages


const router = express.Router();


router.get("/users", protectRoute,  getUsersForSidebar);
router.get("/users/:id", protectRoute,  getMessages); // Assuming you want to get a specific user by ID`


router.post("/send/:id", protectRoute, sendMessage); // Assuming you want to send a message to a specific user by ID`

export default router;











