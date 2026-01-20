import { Document } from "mongoose";
import { Job, JobModel } from "../model/Job";
import { DocumentType } from "@typegoose/typegoose";

export const JobDao = JobModel;


export interface UpdateJobDAO {
    title: string;
    department: string;
    location: string;
    status: "OPEN" | "CLOSED" | "IN_REVIEW";
    headcount: number;
    description: string;
    requirements: string;
  }

export type JobDocument = DocumentType<Job>;