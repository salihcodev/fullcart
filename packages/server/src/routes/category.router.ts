// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createCategory } from "../controllers/collections/category/creating.controller";
import { deleteCategory } from "../controllers/collections/category/deleting.controller";
import {
    getAllCategories,
    getAllCategoriesComputed,
    getCategoryById,
} from "../controllers/collections/category/reading.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, getAllCategories);
router.get(`/computed`, getAllCategoriesComputed);
router.get(`/:id`, getCategoryById);

// POST::
router.post(`/new`, authMiddleware, createCategory);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteCategory);

export default router;
