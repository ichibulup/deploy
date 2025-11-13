import { Router } from "express";

const router = Router();

router.get("/demo", (req, res) => {
  res.status(200).json({ message: "Demo route is working!" });
});

export default router;