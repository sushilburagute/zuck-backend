import { Router } from "express";
import { seedData } from "../controllers/AdminControllers";

const router = Router();

router.route("/seed").post(seedData);

export = router;
