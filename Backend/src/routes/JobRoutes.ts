import { Router } from "express";
import { validate } from "../middleware/Validation";
import { createJobSchema } from "../validator/JobSchemaValidator";
import { createJobController } from "../controllers/JobController";

const router = Router();

router.post("/newJob",validate(createJobSchema),createJobController);

export default router