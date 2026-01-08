import { DocumentType } from "@typegoose/typegoose";
import { CreateJobDTO, ResponseJobDTO } from "../dto/JobDto";
import { Job } from "../model/Job";

export class JobTransformer {
  static toCreateDTO(data: CreateJobDTO) {
    return {
      title: data.title?.trim(),
      department: data.department?.trim(),
      location: data.location?.trim(),
      status: data.location?.trim(),
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
      status: data.location,
      headcount: Number(data.headcount),
      description: data.description,
      requirements: data.requirements,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}
