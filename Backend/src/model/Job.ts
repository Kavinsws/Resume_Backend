import {
  prop,
  getModelForClass,
  index,
  modelOptions,
} from "@typegoose/typegoose";

@index({ location: 1 })
@index({ title: 1, status: 1 })
@index({ title: 1 })
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

  @prop({ required: true })
  public status!: string;

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
