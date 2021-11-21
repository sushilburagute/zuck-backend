import { Router } from "express";
import { validate } from "../middleware/ValidateMiddleware";
import {
  logoutHandler,
  signInHandler,
  signUpHandler,
  userInfoHandler,
} from "../controllers/AuthController";
import { signInSchema, signUpSchema } from "../validation/AuthValidation";
import { requiresAuth } from "../middleware/AuthMiddleware";

const router = Router();

router.route("/sign-up").post(validate(signUpSchema), signUpHandler);
router.route("/sign-in").post(validate(signInSchema), signInHandler);
router.route("/logout").post(logoutHandler);
router.route("/user-info").get(requiresAuth, userInfoHandler);
export = router;
