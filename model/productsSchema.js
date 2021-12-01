import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  discount: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);
export default Product;
