import { Router } from "express";
import { dishList, findDish } from "../controllers/DishControllers";

const router = Router();

router.route("/").get(dishList);
router.route("/:id").get(findDish);
export = router;
