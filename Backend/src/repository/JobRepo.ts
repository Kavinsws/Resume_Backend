import { JobDao } from "../dao/JobDao";
import { HttpError } from "../error/HttpError";
import { createJob } from "../validator/JobSchemaValidator";

export const createJobRepo = async (data: createJob) => {
  try {
    return JobDao.create(data);
  } catch (error) {
    throw new HttpError(500, "Failed to create job");
  }
};

export const findJobByTitle = async (title: string) => {
  try {
    return JobDao.findOne({ title });
  } catch (error) {
    throw new HttpError(500, "Internal server Error");
  }
};
