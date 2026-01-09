import { HttpError } from "../error/HttpError";
import {
  createJobRepo,
  findJobByTitle,
  findJobById,
  updateJobRepo,
  deleteJobRepo,
} from "../repository/JobRepo";
import { JobTransformer } from "../trasnformer/JobTransformer";
import { createJob, updateJob } from "../validator/JobSchemaValidator";

export const createJobService = async (data: createJob) => {
  try {
    const transformedJob = JobTransformer.toCreateDTO(data);
    const checkfields = {
      title: transformedJob.title,
      department: transformedJob.department,
      location: transformedJob.location,
    };
    const duplicate = await findJobByTitle(
      checkfields.title,
      checkfields.department,
      checkfields.location
    );

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

export const updateJobService = async (id: string, data: updateJob) => {
  try {
    const existingJob = await findJobById(id);

    if (!existingJob) {
      throw new HttpError(404, "Job not found");
    }

    const transformedJob = JobTransformer.toUpdateDTO(data);

    if (Object.keys(transformedJob).length === 0) {
      throw new HttpError(400, "No fields to update");
    }

    const result = await updateJobRepo(id, transformedJob);

    if (!result) {
      throw new HttpError(500, "Failed to update job");
    }

    const transformedJobResponse = JobTransformer.toResponseDTO(result);

    return {
      statusCode: 200,
      message: "Job updated Successfully",
      data: transformedJobResponse,
    };
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError(500, "Failed to update job");
  }
};

export const deleteJobService = async (id: string) => {
  try {
    const existingJob = await findJobById(id);

    if (!existingJob) {
      throw new HttpError(404, "Job not found");
    }

    const result = await deleteJobRepo(id);

    if (!result) {
      throw new HttpError(500, "Failed to delete job");
    }

    const transformedJobResponse = JobTransformer.toDeleteResponseDTO(result);

    return {
      statusCode: 200,
      message: "Job deleted Successfully",
      data: transformedJobResponse,
    };
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError(500, "Failed to delete job");
  }
};
