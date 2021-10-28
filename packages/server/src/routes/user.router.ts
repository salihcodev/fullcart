// pkgs:
import express from "express";

// utils:
import { getRegisteredUsers } from "../controllers/auth/get-all-users.controller";
import { signinHandler } from "../controllers/auth/signin.controller";
import { signupHandler } from "../controllers/auth/signup.controller";
import { terminateUser } from "../controllers/auth/terminate-user.controller";
import { updateUserRole } from "../controllers/auth/update-user-role.controller";

// create new router:
const router = express.Router();
router.get("/reg-users", getRegisteredUsers);
router.post("/signup", signupHandler);
router.post("/signin", signinHandler);
router.delete("/terminate/:id", terminateUser);
router.post("/new-role/:id", updateUserRole);

export default router;
