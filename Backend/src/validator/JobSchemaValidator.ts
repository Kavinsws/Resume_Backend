import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string().min(1, "Title is Required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  status: z.string().min(1, "Select the status"),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
});

export type createJob = z.infer<typeof createJobSchema>

export const responseJobSchema = z.object({
  title: z.string().min(1, "Title is Required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  status: z.string().min(1, "Select the status"),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
  createdAt:z.date(),
  updatedAt:z.date()
});

export const updateJobSchema = z.object({
  title: z.string().min(1, "Title is Required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  status: z.string().min(1, "Select the status"),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
});

export type updateJob = z.infer<typeof updateJobSchema>;

export const updateJobResponseSchema = z.object({
  id: z.string().min(24, "Invalid id"),
});