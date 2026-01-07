import { HttpError } from "../error/HttpError";
import { createJobRepo, findJobByTitle } from "../repository/JobRepo";
import { createJob } from "../validator/JobSchemaValidator";

export const createJobService = async (data: createJob) => {
  try {
    const duplicate = await findJobByTitle(data.title);

    if (duplicate) {
      throw new HttpError(409, "Job already exists");
    }
    const result = await createJobRepo(data);

    return {
      statusCode: 201,
      message: "Job created Successfully",
      data: result,
    };
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError(500, "Failed to create job");
  }
};
