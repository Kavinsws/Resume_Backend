import { DocumentType } from "@typegoose/typegoose";
import { CreateJobDTO, getJobResponsePaginationDTO, ResponseJobDTO,UpdateJobDTO, updateJobReposnseDTO } from "../dto/JobDto";
import { Job } from "../model/Job";
import { JobDocument } from "../dao/JobDao";
import { da } from "zod/v4/locales";

export class JobTransformer {
  static toCreateDTO(data: CreateJobDTO) {
    return {
      title: data.title?.trim(),
      department: data.department?.trim(),
      location: data.location?.trim(),
      status: data.status?.trim(),
      headcount: Number(data.headcount),
      description: data.description?.trim(),
      requirements: data.requirements?.trim(),
    };
  }

  static toResponseDTO(data: ResponseJobDTO) {
    return {
      id: data.id.toString(),
      title: data.title,
      department: data.department,
      location: data.location,
      status: data.status,
      headcount: Number(data.headcount),
      description: data.description,
      requirements: data.requirements,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
  static updateJob(data: UpdateJobDTO) {
    return {
      title: data.title.trim(),
      department: data.department.trim(),
      location: data.location.trim(),
      status: data.status,
      headcount: Number(data.headcount),
      description: data.description.trim(),
      requirements: data.requirements.trim(),
    };
  }

  static updateJobResponse(data: JobDocument): updateJobReposnseDTO {
    return {
      id: data._id.toString(),
    };
  }

  static getJobResponse(data: JobDocument): ResponseJobDTO {
    return {
      id: data._id.toString(),
      title: data.title,
      department: data.department,
      location: data.location,
      status: data.status,
      headcount: data.headcount,
      description: data.description,
      requirements: data.requirements,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }

  static getJobsResponsemap(data: JobDocument[]): ResponseJobDTO[] {
    return data.map((datas) => this.getJobResponse(datas));
  }

  static getJobResponsePagination(data:getJobResponsePaginationDTO):getJobResponsePaginationDTO{
    return{
      currentPage:data.currentPage,
      totalPages:data.totalPages,
      totalResults:data.totalResults
    }
  }
}
