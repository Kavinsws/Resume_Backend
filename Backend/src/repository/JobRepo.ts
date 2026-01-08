import { HttpError } from "../error/HttpError";
import { JobModel } from "../model/Job";
import { createJob } from "../validator/JobSchemaValidator";

export const createJobRepo = async (data:createJob)=>{
    try{
        return JobModel.create(data);
    }
    catch(error){
        throw new HttpError(500,"Failed to create job");
    }
}

export const findJobByTitle = async (title : string)=>{
    try{
        return JobModel.findOne({ title });
    }
    catch(error){
        throw new HttpError(500,"Internal server Error");
    }
}