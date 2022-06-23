// pkgs:
import express from "express";
import newsLetterSubscription from "../controllers/collections/newsletter-subscription.controller";

// utils:

// create new router:
const router = express.Router();
router.post("/newsletter-subscription/:userEmail", newsLetterSubscription);

export default router;
