// pkgs:
import express from "express";

// utils:
import {
    getRegisteredUsers,
    getUserById,
    signinHandler,
    signupHandler,
    terminateUser,
    updateUserRole,
} from "../controllers/auth/suppler.controller";

// create new router:
const router = express.Router();
router.get("/all", getRegisteredUsers);
router.get("/user/:id", getUserById);
router.post("/signup", signupHandler);
router.post("/signin", signinHandler);
router.delete("/terminate/:id", terminateUser);
router.post("/new-role/:id", updateUserRole);

export default router;
