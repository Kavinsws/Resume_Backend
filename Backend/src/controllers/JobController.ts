import { Request, Response, NextFunction } from "express";
import { createJobService, getAllJobsService } from "../services/JobServices";
import { alljobresponseSchema, createJobSchema, responseJobSchema } from "../validator/JobSchemaValidator";

export const createJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try{
        const result = await createJobService(req.body);
        
        if(result){
            const safeRes = responseJobSchema.parse(result.data);
            res.status(result.statusCode).json({
                message:result.message,
                data:safeRes
            })
        }
    }
    catch(error){
        next(error)
    }
};

export const getAllJobsController = async(req:Request,res:Response,next:NextFunction)=>{
  try{
    const result = await getAllJobsService();
    if(result){
      const safeRes = alljobresponseSchema.parse(result.data);
      res.status(result.statusCode).json({
        message:result.message,
        jobs:safeRes
      })
    }
  }
  catch(error){
    next(error);
  }
}