// pkgs:
import express from "express";

// utils:
import { handelContactUsForm } from "../controllers/contact-us.controller";

// create new router:
const router = express.Router();

// receive a email form users.
router.post(`/contact-us`, handelContactUsForm);

export default router;
