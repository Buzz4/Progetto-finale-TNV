import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { getFavorite, createFavorite, getFavoriteByUserId } from "../controllers/favorite-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);
router.get(`${API_ROOT}/:userId`, getFavorite);
router.post(`${API_ROOT}/favorite`, createFavorite);
router.get(`${API_ROOT}/favorite/:userId`, getFavoriteByUserId);

export default router;
