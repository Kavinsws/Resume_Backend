import { ZodError, ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try{
        req.body = schema.parse(req.body);
        next();
    }
    catch(error:any){
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
