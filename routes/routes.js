import express from "express";
import { getProducts } from "../controller/product-controller.js";
import { userSignUp, userLogin } from "../controller/user-controller.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

router.get("/products", getProducts);

export default router;
