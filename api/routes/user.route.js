import express from "express";
const router = express.Router();

import { childOverview } from "../controllers/childOverview.controller.js";
import { CareGiverOverview } from "../controllers/CareGiverOverview.controller.js";
import { signout } from "../controllers/signout.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.get("/dashboard/childOverview", verifyToken, childOverview);
router.get("/dashboard/CareGiverOverview", verifyToken, CareGiverOverview);

router.post("/signout", signout);

export default router;
