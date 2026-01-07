import { Request, Response, NextFunction } from "express";
import { HttpError } from "../error/HttpError";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if(err instanceof ZodError){
        return res.status(400).json({
            message:"Validation failed",
            errors:err.issues,
        })
    }

    if(err instanceof HttpError){
        return res.status(err.statusCode).json({
            message:err.message,
            details:err.details
        })
    }

    return res.status(500).json({
        message:"Internal Server Error"
    })
};
