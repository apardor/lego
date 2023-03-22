import { Router } from "express";
import { readCityThemes, readMovieThemes, readSpaceThemes, readThemes } from "./controllers";

const router = Router();

router.get('/themes', readThemes);
router.get('/themes/movies', readMovieThemes);
router.get('/themes/city', readCityThemes);
router.get('/themes/space', readSpaceThemes);


export default router;