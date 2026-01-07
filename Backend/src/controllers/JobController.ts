import { Request, Response, NextFunction } from "express";
import { createJobService } from "../services/JobServices";
import { createJobSchema } from "../validator/JobSchemaValidator";

export const createJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try{
        const result = await createJobService(req.body);
        
        if(result){
            const safeRes = createJobSchema.parse(result.data);
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
