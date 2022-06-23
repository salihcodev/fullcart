// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createNewOrder } from "../controllers/collections/order/creating.controller";
import { getAllOrders } from "./../controllers/collections/order/reading.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, getAllOrders);
// router.get(`/s/:slug`, getSingleProductBySlug);
// router.get(`/s/:id`, getSingleProductById);

// POST::
router.post(`/new/:userId`, createNewOrder);

// DELETE::
// // router.delete(`/:id`, authMiddleware, deleteProduct);

// PATCH::
// router.patch(`/:id`, authMiddleware, updateProduct);

export default router;
