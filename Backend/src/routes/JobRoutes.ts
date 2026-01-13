import { Router } from "express";
import { validate, validateParams } from "../middleware/Validation";
import { createJobSchema, paramIdSchema } from "../validator/JobSchemaValidator";
import { createJobController, deleteJobController, getJobsController, updateJobController } from "../controllers/JobController";

const router = Router();

router.post("/newJob",validate(createJobSchema),createJobController);
router.put("/updateJob/:id",validateParams(paramIdSchema),updateJobController)
router.delete("/deleteJob/:id",validateParams(paramIdSchema),deleteJobController)
router.get("/getJobs",getJobsController);
export default router