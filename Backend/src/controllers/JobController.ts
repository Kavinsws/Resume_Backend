import { Request, Response, NextFunction } from "express";
import { createJobService, deleteJobService, getAllJobsService, updateJobService } from "../services/JobServices";
import { getJobResponseMetricsSchema, getJobsResponseSchema, queryParamsSchema, responseJobSchema, updateJobResponseSchema } from "../validator/JobSchemaValidator";

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

export const updateJobController = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {id} = req.params
        const result = await updateJobService(id,req.body);

        if(result){
            const safeRes = updateJobResponseSchema.parse(result.data);
            res.status(result.statusCode).json({
                message:result.message,
                data:safeRes
            })
        }
    }
    catch(error){
        next()
    }
}

export const deleteJobController = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {id} = req.params;
        const result = await deleteJobService(id);

        if(result){
            res.status(result.statusCode).json({
                message:result.message
            })
        }
    }
    catch(error){
        next(error);
    }
}

export const getJobsController = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const { page, limit } = queryParamsSchema.parse(req.query);
        const result = await getAllJobsService(Number(page),Number(limit));
        if(result){
            const safeRes = getJobsResponseSchema.parse(result.data);
            const safeResMetrics = getJobResponseMetricsSchema.parse(result.metrics);
            res.status(result.statusCode).json({
                message:result.message,
                metrics:safeResMetrics,
                data:safeRes
            })
        }
    }
    catch(error){
        next(error);
    }
}