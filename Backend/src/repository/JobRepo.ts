import { JobDao, JobDocument, UpdateJobDAO } from "../dao/JobDao";
import { getJobCount } from "../dto/JobDto";
import { HttpError } from "../error/HttpError";
import { Job, JobModel } from "../model/Job";
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

export const findJobById = async (id: string) :Promise<JobDocument| null> => {
  try {
    return await JobDao.findById(id);
  } catch (error) {
    throw new HttpError(500, "Failed to locate the job");
  }
};
export const updateJobRepo = async (id: string, data: UpdateJobDAO):Promise<JobDocument|null> => {
  try {
    return await JobModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new HttpError(500, "Failed to update job");
  }
};

export const deleteJobRepo = async(id : string) : Promise<JobDocument | null> =>{
  try{
    return await JobModel.findByIdAndDelete(id);
  }
  catch(error){
    throw new HttpError(500,"Failed to delete the Job")
  }
}

export const getAllJobsRepo = async (skip:number,limit:number): Promise<JobDocument[] | null> => {
  try {
    return await JobDao.find().skip(skip).limit(limit);
  } catch (error) {
    throw new HttpError(500, "Failed to getJobs");
  }
};

export const getAllJobsCountRepo = async():Promise<number> =>{
  try{
    return await JobDao.countDocuments();
  }
  catch(error){
    throw new HttpError(500,"Failed to get job count");
  }
}

export const getJobCountsRepo = async():Promise<getJobCount>=>{
  try{
    const totalJobs = await JobDao.countDocuments();
    const openJobs = await JobDao.countDocuments({status:"OPEN"});
    const closedJobs = await JobDao.countDocuments({status:"CLOSED"});
    const holdJobs = await JobDao.countDocuments({status:"HOLD"});

    return{totalJobs,openJobs,closedJobs,holdJobs}
  }
  catch(error){
    throw new HttpError(500,"Failed to count the jobs");
  }
}