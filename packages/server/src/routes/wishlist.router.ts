// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createNewWishlistItem } from "../controllers/collections/wishlist/creating.controller";
import {
    deleteWishlistItem,
    dropWishlistCollection,
} from "../controllers/collections/wishlist/deleting.controller";
import { getAllWishlistItems } from "../controllers/collections/wishlist/reading.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, authMiddleware, getAllWishlistItems);

// POST::
router.post(`/new`, authMiddleware, createNewWishlistItem);
router.post(`/wipe`, authMiddleware, dropWishlistCollection);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteWishlistItem);

export default router;
