import { NextApiRequest, NextApiResponse } from "next";
import { partnerData } from "@/pages/utils/thairun-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(partnerData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
