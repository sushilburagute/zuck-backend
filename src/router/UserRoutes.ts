import { Router } from "express";
import { requiresAuth } from "../middleware/AuthMiddleware";
import {
  fetchFavouritesHandler,
  fetchCartHandler,
  modifyFavouritesHandler,
  modifyCartHandler,
} from "./../controllers/UserControllers";

const router = Router();

router.route("/favourites").get(requiresAuth, fetchFavouritesHandler);
router.route("/cart").get(requiresAuth, fetchCartHandler);

router.route("/favourites").post(requiresAuth, modifyFavouritesHandler);
router.route("/cart").post(requiresAuth, modifyCartHandler);

export = router;
