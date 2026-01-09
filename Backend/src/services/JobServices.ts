import { HttpError } from "../error/HttpError";
import { createJobRepo, findJobByTitle } from "../repository/JobRepo";
import { JobTransformer } from "../trasnformer/JobTransformer";
import { createJob } from "../validator/JobSchemaValidator";

export const createJobService = async (data: createJob) => {
  try {
    const transformedJob = JobTransformer.toCreateDTO(data);
    const checkfields = {
      title:transformedJob.title,
      department:transformedJob.department,
      location:transformedJob.location
    }
    console.log(checkfields)
    const duplicate = await findJobByTitle(checkfields.title,checkfields.department,checkfields.location);

    if (duplicate) {
      throw new HttpError(409, "Job already exists");
    }
    const result = await createJobRepo(transformedJob);
    const transformedJobResponse = JobTransformer.toResponseDTO(result);

    return {
      statusCode: 201,
      message: "Job created Successfully",
      data: transformedJobResponse,
    };
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError(500, "Failed to create job");
  }
};
