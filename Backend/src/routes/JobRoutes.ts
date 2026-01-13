import { Router } from "express";
import { validate } from "../middleware/Validation";
import { createJobSchema } from "../validator/JobSchemaValidator";
import { createJobController, updateJobController } from "../controllers/JobController";

const router = Router();

router.post("/newJob",validate(createJobSchema),createJobController);
router.put("/updateJob/:id",updateJobController)
export default router