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

export type createJob = z.infer<typeof createJobSchema>;

export const updateJobSchema = z.object({
  title: z.string().min(1, "Title is Required").optional(),
  department: z.string().min(1, "Department is required").optional(),
  location: z.string().min(1, "Location is required").optional(),
  status: z.string().min(1, "Select the status").optional(),
  headcount: z.number().int().positive().optional(),
  description: z.string().min(1).optional(),
  requirements: z.string().min(1).optional(),
});

export type updateJob = z.infer<typeof updateJobSchema>;

export const jobIdSchema = z.object({
  id: z.string().min(1, "Job ID is required"),
});

export type jobId = z.infer<typeof jobIdSchema>;

export const responseJobSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is Required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  status: z.string().min(1, "Select the status"),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const deleteResponseSchema = z.object({
  id: z.string(),
});
