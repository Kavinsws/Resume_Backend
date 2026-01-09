import { JobDao } from "../dao/JobDao";
import { HttpError } from "../error/HttpError";
import { createJob, updateJob } from "../validator/JobSchemaValidator";

export const createJobRepo = async (data: createJob) => {
  try {
    return await JobDao.create(data);
  } catch (error) {
    throw new HttpError(500, "Failed to create job");
  }
};

export const findJobByTitle = async (
  title: string,
  department: string,
  location: string
) => {
  try {
    return await JobDao.findOne({
      title: title,
      department: department,
      location: location,
    });
  } catch (error) {
    throw new HttpError(500, "Internal server Error");
  }
};

export const findJobById = async (id: string) => {
  try {
    return await JobDao.findById(id);
  } catch (error) {
    throw new HttpError(500, "Internal server Error");
  }
};

export const updateJobRepo = async (id: string, data: updateJob) => {
  try {
    return await JobDao.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new HttpError(500, "Failed to update job");
  }
};

export const deleteJobRepo = async (id: string) => {
  try {
    return await JobDao.findByIdAndDelete(id);
  } catch (error) {
    throw new HttpError(500, "Failed to delete job");
  }
};
