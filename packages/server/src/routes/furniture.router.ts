// pkgs:
import express from "express";

// utils:
import {
    getAllProducts,
    getSingleProduct,
} from "../controllers/collections/furniture/reading.controller";
import authMiddleware from "../common/middlewares/auth.middleware";
import { createNewProduct } from "../controllers/collections/furniture/creating.controller";
import { deleteProduct } from "../controllers/collections/furniture/deleting.controller";
import { updateProduct } from "../controllers/collections/furniture/updating.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/all`, getAllProducts);
router.get(`/s/:id`, getSingleProduct);

// POST::
router.post(`/new`, authMiddleware, createNewProduct);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteProduct);

// PATCH::
router.patch(`/:id`, authMiddleware, updateProduct);

export default router;
