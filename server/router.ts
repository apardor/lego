import { Router } from "express";
import { readThemes } from "./controllers";

const router = Router();

router.get('/themes', readThemes);


export default router;