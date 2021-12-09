import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { userSignUp, userLogin } from "../controller/user-controller.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
