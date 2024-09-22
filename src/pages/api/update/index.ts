import { NextApiRequest, NextApiResponse } from "next";
import { updateData } from "@/pages/utils/thairun-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(updateData);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
}
