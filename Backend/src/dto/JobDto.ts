export interface CreateJobDTO {
  title: string;
  department: string;
  location: string;
  status: "OPEN" | "CLOSED" | "IN_REVIEW";
  headcount: number;
  description: string;
  requirements: string;
}

export interface ResponseJobDTO {
  id: string;
  title: string;
  department: string;
  location: string;
  status: "OPEN"| "CLOSED" | "IN_REVIEW";
  headcount: number;
  description: string;
  requirements: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateJobDTO {
  title: string;
  department: string;
  location: string;
  status: "OPEN" | "CLOSED" | "IN_REVIEW";
  headcount: number;
  description: string;
  requirements: string;
}

export interface updateJobReposnseDTO{
  id:string
}

export interface updateJobRes{
  statusCode: number,
  message:string,
  data:updateJobReposnseDTO
}

export interface deleteJobResponseDTO{
  statusCode:number,
  message:string
}

export interface getJobResponsePaginationDTO{
  currentPage:number,
  totalPages:number,
  totalResults:number
}

export interface getJobsResponseDTO{
  statusCode:number,
  message:string,
  pagination:getJobResponsePaginationDTO
  data:ResponseJobDTO[]
}

export interface getJobCount{
  totalJobs:number,
  openJobs:number,
  closedJobs:number,
  inReviewJobs:number
}

export interface getJobCountResponseDTO{
  statusCode:number,
  message:string,
  data:getJobCount
}