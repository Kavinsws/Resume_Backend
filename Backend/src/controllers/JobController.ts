import { Request, Response, NextFunction } from "express";
import { createJobService, deleteJobService, getAllJobsService, getJobCountsService, updateJobService } from "../services/JobServices";
import { getJobCountResponseSchmea, getJobResponsePaginationSchema, getJobsResponseSchema, queryParamsSchema, responseJobSchema, updateJobResponseSchema } from "../validator/JobSchemaValidator";

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
            const safeRessponse = getJobsResponseSchema.parse(result.data);
            const safeResponsePaginationData = getJobResponsePaginationSchema.parse(result.pagination);
            res.status(result.statusCode).json({
                message:result.message,
                pagination:safeResponsePaginationData,
                data:safeRessponse
            })
        }
    }
    catch(error){
        next(error);
    }
}

export const getJobCountsController = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const result = await getJobCountsService();

        if(result){
            const safeJobCountsResponse = getJobCountResponseSchmea.parse(result.data);

            res.status(result.statusCode).json({
                message:result.message,
                data:safeJobCountsResponse
            })
        }
    }
    catch(error){
        next(error);
    }
}