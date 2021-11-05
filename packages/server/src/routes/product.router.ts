// pkgs:
import express from "express";

// utils:
import {
    getAllProducts,
    getSingleProduct,
} from "../controllers/collections/product/reading.controller";
import authMiddleware from "../common/middlewares/auth.middleware";
import { createNewProduct } from "../controllers/collections/product/creating.controller";
import { deleteProduct } from "../controllers/collections/product/deleting.controller";
import { updateProduct } from "../controllers/collections/product/updating.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, getAllProducts);
router.get(`/s/:slug`, getSingleProduct);

// POST::
router.post(`/new`, authMiddleware, createNewProduct);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteProduct);

// PATCH::
router.patch(`/:id`, authMiddleware, updateProduct);

export default router;
