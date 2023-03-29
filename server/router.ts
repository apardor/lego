import { Router } from "express";
import { readCityThemes, readCreatorThemes, readKnightsThemes, readMovieThemes, readPirateThemes, readSetId, readSets, readSpaceThemes, readSportsThemes, readThemes } from "./controllers";

const router = Router();

router.get('/themes', readThemes);
router.get('/themes/movies', readMovieThemes);
router.get('/themes/city', readCityThemes);
router.get('/themes/space', readSpaceThemes);
router.get('/themes/pirates', readPirateThemes);
router.get('/themes/knights', readKnightsThemes);
router.get('/themes/creator', readCreatorThemes);
router.get('/themes/sports', readSportsThemes);
router.get('/sets', readSets);
router.get('/sets/:id', readSetId);


export default router;