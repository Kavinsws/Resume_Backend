import { JobModel } from "../model/Job";
import { createJob } from "../validator/JobSchemaValidator";

export const createJobRepo = async (data:createJob)=>{
    return JobModel.create(data)
}

export const findJobByTitle = async (title : string)=>{
    return JobModel.findOne({title})
}