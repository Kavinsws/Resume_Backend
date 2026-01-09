import { DocumentType } from "@typegoose/typegoose";
import { CreateJobDTO, ResponseJobDTO, UpdateJobDTO } from "../dto/JobDto";
import { Job } from "../model/Job";

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

  static toUpdateDTO(data: UpdateJobDTO) {
    const updateData: UpdateJobDTO = {};

    if (data.title) updateData.title = data.title.trim();
    if (data.department) updateData.department = data.department.trim();
    if (data.location) updateData.location = data.location.trim();
    if (data.status) updateData.status = data.status.trim();
    if (data.headcount) updateData.headcount = Number(data.headcount);
    if (data.description) updateData.description = data.description.trim();
    if (data.requirements) updateData.requirements = data.requirements.trim();

    return updateData;
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

  static toDeleteResponseDTO(data: any) {
    return {
      id: data._id.toString(),
    };
  }
}
