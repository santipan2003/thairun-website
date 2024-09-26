import { NextApiRequest, NextApiResponse } from "next";
import { productData } from "@/utils/thairun-product";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query; // Extract id from query

    // Convert id to a number
    const productId = Number(id);

    // Find the product by id
    const product = productData.find((item) => item.id === productId);

    // If product not found, return a 404 status
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // If product is found, return it
    res.status(200).json(product);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
}
