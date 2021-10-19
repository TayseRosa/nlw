import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AthenticateUserController";

const router = Router();

router.post("Authenticate", new AuthenticateUserController().handle)

export { router }