import { Router } from "express";
import { readCityThemes, readMovieThemes, readSetId, readSets, readSpaceThemes, readThemes } from "./controllers";

const router = Router();

router.get('/themes', readThemes);
router.get('/themes/movies', readMovieThemes);
router.get('/themes/city', readCityThemes);
router.get('/themes/space', readSpaceThemes);
router.get('/sets', readSets);
router.get('/sets/:id', readSetId);


export default router;