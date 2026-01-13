import { HttpError } from "../error/HttpError";
import { createJobRepo, findJobById, findJobByTitle, updateJobRepo } from "../repository/JobRepo";
import { JobTransformer } from "../trasnformer/JobTransformer";
import { createJob, updateJob } from "../validator/JobSchemaValidator";

export const createJobService = async (data: createJob) => {
  try {
    const transformedJob = JobTransformer.toCreateDTO(data);
    const checkfields = {
      title:transformedJob.title,
    }
    const duplicate = await findJobByTitle(checkfields.title);

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

export const updateJobService = async(id:string,data:updateJob)=>{
  try{
    const transformedJob = JobTransformer.updateJob(data);
    const isJobExists = await findJobById(id);
    
    if(!isJobExists){
      throw new HttpError(404,"Job Not found");
    }

    const result = await updateJobRepo(id,transformedJob);
    if(!result){
      throw new HttpError(500,"Failed to update the job");
    } 
    const responseTransformedJob = JobTransformer.updateJobResponse(result)
    return {
      statusCode:200,
      message:"Job updated Successfully",
      data:responseTransformedJob
    }
  }
  catch(error){
    if(error instanceof HttpError){
      throw error
    }
    throw new HttpError(500,"Failed to update Job");
  }
}