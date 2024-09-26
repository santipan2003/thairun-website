import { NextApiRequest, NextApiResponse } from "next";
import { marathonData } from "@/utils/thairun-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(marathonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
