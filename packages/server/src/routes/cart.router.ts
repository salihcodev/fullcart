// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createCartItem } from "../controllers/collections/cart/creating.controller";
import { getAllCartItem } from "../controllers/collections/cart/reading.controller";
import {
    deleteCartItem,
    dropCartCollection,
} from "../controllers/collections/cart/deleting.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, authMiddleware, getAllCartItem);

// POST::
router.post(`/new`, authMiddleware, createCartItem);
router.post(`/wipe`, authMiddleware, dropCartCollection);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteCartItem);

export default router;
