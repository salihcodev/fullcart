// pkgs:
import express from "express";

// utils:
import {
    getRegisteredUsers,
    signinHandler,
    signupHandler,
    terminateUser,
    updateUserRole,
} from "../controllers/auth/customer.controller";

// create new router:
const router = express.Router();
router.get("/", getRegisteredUsers);
router.post("/signup", signupHandler);
router.post("/signin", signinHandler);
router.delete("/terminate/:id", terminateUser);
router.post("/new-role/:id", updateUserRole);

export default router;
