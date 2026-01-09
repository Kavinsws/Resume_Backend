import { Router } from "express";
import { validate, validateParams } from "../middleware/Validation";
import {
  createJobSchema,
  updateJobSchema,
  jobIdSchema,
} from "../validator/JobSchemaValidator";
import {
  createJobController,
  updateJobController,
  deleteJobController,
} from "../controllers/JobController";

const router = Router();

router.post("/newJob", validate(createJobSchema), createJobController);
router.put(
  "/updateJob/:id",
  validateParams(jobIdSchema),
  validate(updateJobSchema),
  updateJobController
);
router.delete(
  "/deleteJob/:id",
  validateParams(jobIdSchema),
  deleteJobController
);

export default router;
