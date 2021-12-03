import { response } from "express";
import Product from "../model/productsSchema.js";

export const getProducts = async (request, response) => {
  try {
    const Products = await Product.find({});
    response.json(Products);
  } catch (error) {
    console.log("Error: ", error);
  }
};
