import { number, z } from "zod";

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
  status: z.enum(["OPEN","CLOSED","HOLD"]),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
});

export type updateJob = z.infer<typeof updateJobSchema>;

export const updateJobResponseSchema = z.object({
  id: z.string().min(24, "Invalid id"),
});

export const paramIdSchema = z.object({
  id: z.string().min(24, "Invalid id"),
})

export type paramType = z.infer<typeof paramIdSchema>;

export const getJobsResponse = z.object({
  id:z.string().min(24,"Invalid id"),
  title: z.string().min(1, "Title is Required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  status: z.enum(["OPEN","CLOSED","HOLD"]),
  headcount: z.number().int().positive(),
  description: z.string().min(1),
  requirements: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const getJobsResponseSchema = z.array(getJobsResponse);

export const queryParamsSchema = z.object({
  page:z.coerce.number().int().min(1).optional().default(1),
  limit:z.coerce.number().int().min(1).max(15).optional().default(3)
})

export const getJobResponseMetricsSchema = z.object({
  currentPage: z.number().int().positive().min(1),
  totalPages: z.number().int().positive().min(1),
  totalResults: z.number().int().positive().min(0),
});
