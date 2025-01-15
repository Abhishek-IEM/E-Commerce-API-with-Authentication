import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  UserCart,
} from "../Controllers/cart.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

//add to cart
router.post("/add", isAuthenticated, addToCart);

//get user cart
router.get("/user", isAuthenticated, UserCart);

//remove product from cart
router.delete("/remove/:productId", isAuthenticated, removeProductFromCart);

//clear cart
router.delete("/clear", isAuthenticated, clearCart);

// decrease qty
router.post("/--qty", isAuthenticated, decreaseProductQty);

export default router;
