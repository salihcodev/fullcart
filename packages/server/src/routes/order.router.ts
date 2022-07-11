// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createNewOrder } from "../controllers/collections/order/creating.controller";
import { getAllOrders } from "../controllers/collections/order/reading.controller";
import {
    deleteAnOrder,
    dropOrderCollection,
} from "../controllers/collections/order/deleting.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/s`, authMiddleware, getAllOrders);

// POST::
router.post(`/new`, authMiddleware, createNewOrder);
router.post(`/wipe`, authMiddleware, dropOrderCollection);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteAnOrder);

export default router;
