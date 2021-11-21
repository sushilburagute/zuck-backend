import { Router } from "express";
import { dishList } from "../controllers/DishControllers";

const router = Router();

router.route("/").get(dishList);
router.route("/:id").get();
export = router;
