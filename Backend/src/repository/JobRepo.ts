import { JobDao } from "../dao/JobDao";
import { HttpError } from "../error/HttpError";
import { JobModel } from "../model/Job";
import { createJob } from "../validator/JobSchemaValidator";
import { updateJob } from "../validator/JobSchemaValidator";

export const createJobRepo = async (data: createJob) => {
  try {
    return JobModel.create(data);
  } catch (error) {
    throw new HttpError(500, "Failed to create job");
  }
};

export const findJobByTitle = async (
  title: string,
) => {
  try {
    return JobDao.findOne({
      title: title,
    });
  } catch (error) {
    throw new HttpError(500, "Internal server Error");
  }
};

export const findJobById = async (id: string) => {
  try {
    return await JobDao.findById(id);
  } catch (error) {
    throw new HttpError(500, "Failed to locate the job");
  }
};
export const updateJobRepo = async (id: string, data: updateJob) => {
  try {
    return await JobModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new HttpError(500, "Failed to update job");
  }
};