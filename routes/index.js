import { Router } from "express";
import { createProduct, delete_Product, getAllProducts, getProduct, updateProduct } from "../handlers/index.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", delete_Product);

export default router;