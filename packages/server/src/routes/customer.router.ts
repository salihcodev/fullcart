// pkgs:
import express from "express";

// utils:
import {
    cartAddItem,
    getRegisteredUsers,
    signinHandler,
    signupHandler,
    terminateUser,
    updateUserRole,
} from "../controllers/auth/customer.controller";

// create new router:
const router = express.Router();
router.get("/all", getRegisteredUsers);
router.post("/signup", signupHandler);
router.post("/signin", signinHandler);
router.post("/cart-add", cartAddItem);
router.post("/new-role/:id", updateUserRole);
router.delete("/terminate/:id", terminateUser);

export default router;
