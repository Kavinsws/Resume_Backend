import {
  prop,
  getModelForClass,
  index,
  modelOptions,
} from "@typegoose/typegoose";

enum Status{
  OPEN = "OPEN",
  CLOSED= "CLOSED",
  IN_REVIEW= "IN_REVIEW"
}

@index({ location: 1 })
@index({ title: 1, status: 1 })
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Job {
  @prop({ required: true, unique: true })
  public title!: string;

  @prop({ required: true })
  public department!: string;

  @prop({ required: true })
  public location!: string;

  @prop({ required: true,enum:Status,default:Status.OPEN})
  public status!: Status;

  @prop({ required: true })
  public headcount!: number;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public requirements!: string;

  @prop()
  public createdAt!: Date;

  @prop()
  public updatedAt!: Date;
}

export const JobModel = getModelForClass(Job);
