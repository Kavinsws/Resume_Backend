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

export const findJobByTitle = async (
  title: string,
  department: string,
  location: string
) => {
  try {
    return JobDao.findOne({
      title: title,
      department: department,
      location: location,
    });
  } catch (error) {
    throw new HttpError(500, "Internal server Error");
  }
};



export const getAllJobs = async()=>{
  try{
    return JobDao.find({});
  }catch(error){
    throw new HttpError(500,"Failed to fetch the jobs");
  }
}