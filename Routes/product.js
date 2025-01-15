import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getproductById,
  updateProductById,
} from "../Controllers/product.js";

const router = express.Router();

//add Product
router.post("/add", addProduct);

//get All Product
router.get("/all", getAllProducts);

//get product by id
router.get("/:id", getproductById);

//update product by id
router.put("/:id", updateProductById);

//delete product by id
router.delete("/:id", deleteProductById);

export default router;
