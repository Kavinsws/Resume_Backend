import { ZodError, ZodType } from "zod";
import { Request, Response, NextFunction } from "express";
import { createJob, paramType } from "../validator/JobSchemaValidator";

export const validate =
  (schema: ZodType<createJob>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try{
        req.body = schema.parse(req.body);
        next();
    }
    catch(error){
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          error: error.issues,
        });
      }
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

export const validateParams=(schema : ZodType<paramType>)=>(req:Request,res:Response,next:NextFunction)=>{
  try{
    req.params = schema.parse(req.params);
    next();
  }
  catch(error){
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        error: error.issues,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
