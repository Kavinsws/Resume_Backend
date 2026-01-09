import { Request, Response, NextFunction } from "express";
import {
  createJobService,
  updateJobService,
  deleteJobService,
} from "../services/JobServices";
import {
  createJobSchema,
  responseJobSchema,
  deleteResponseSchema,
} from "../validator/JobSchemaValidator";

export const createJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createJobService(req.body);

    if (result) {
      const safeRes = responseJobSchema.parse(result.data);
      res.status(result.statusCode).json({
        message: result.message,
        data: safeRes,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const updateJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await updateJobService(id, req.body);

    if (result) {
      const safeRes = responseJobSchema.parse(result.data);
      res.status(result.statusCode).json({
        message: result.message,
        data: safeRes,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await deleteJobService(id);

    if (result) {
      const safeRes = deleteResponseSchema.parse(result.data);
      res.status(result.statusCode).json({
        message: result.message,
        data: safeRes,
      });
    }
  } catch (error) {
    next(error);
  }
};
