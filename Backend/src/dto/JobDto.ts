export interface CreateJobDTO {
  title: string;
  department: string;
  location: string;
  status: string;
  headcount: number;
  description: string;
  requirements: string;
}

export interface ResponseJobDTO {
  id: string;
  title: string;
  department: string;
  location: string;
  status: string;
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
  status: "OPEN" | "CLOSED" | "HOLD";
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