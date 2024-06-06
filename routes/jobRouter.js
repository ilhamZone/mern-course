import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
