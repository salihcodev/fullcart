// pkgs:
import express from "express";

// utils:
import authMiddleware from "../common/middlewares/auth.middleware";
import { createSubCategory } from "../controllers/collections/subcategory/creating.controller";
import { deleteSubCategory } from "../controllers/collections/subcategory/deleting.controller";
import {
    getAllSubCategories,
    getSubCategoryById,
} from "../controllers/collections/subcategory/reading.controller";

// create new router:
const router = express.Router();

// setup HTTP requests:
// GET::
router.get(`/`, getAllSubCategories);
router.get(`/:id`, getSubCategoryById);

// POST::
router.post(`/new`, authMiddleware, createSubCategory);

// DELETE::
router.delete(`/:id`, authMiddleware, deleteSubCategory);

export default router;
