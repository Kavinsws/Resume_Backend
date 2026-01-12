import { Router } from "express";
import { validate } from "../middleware/Validation";
import { createJobSchema } from "../validator/JobSchemaValidator";
import { createJobController, getAllJobsController } from "../controllers/JobController";

const router = Router();

router.post("/newJob",validate(createJobSchema),createJobController);
router.get("/getJobs",getAllJobsController);

export default router