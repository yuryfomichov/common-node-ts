// import all interfaces
import mongoose from "mongoose";
import { BaseRepository } from "./BaseRepository";

export abstract class BaseMongoRepository<T extends mongoose.Document, U>
  implements BaseRepository<T>
{
  private model: mongoose.Model<T>;
  private schema: mongoose.Schema<T>;

  constructor(name: string, schema: mongoose.Schema<T>) {
    this.model = mongoose.model<T, mongoose.Model<T>>(name, schema);
    this.schema = schema;
  }
  build(attrs: U): T {
    return new this.model(attrs);
  }
  create(item: T): Promise<T> {
    return this.model.create(item);
  }
  createMany(items: T[]): Promise<T[]> {
    return this.model.insertMany(items);
  }
  update(item: T): Promise<boolean> {
    // @ts-ignore
    return this.model.updateOne(item);
  }
  delete(id: string): Promise<boolean> {
    // @ts-ignore
    return this.model.findByIdAndDelete(id);
  }
  findOne(conditions: mongoose.FilterQuery<T>): Promise<T> {
    // @ts-ignore
    return this.model.findOne(conditions);
  }
  findById(id: string): Promise<T> {
    // @ts-ignore
    return this.model.findById(id);
  }
  findByIds(ids: string[]): Promise<T[]> {
    // @ts-ignore
    return this.model.find().where("_id").in(ids);
  }
  exist(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
    //return this.model.exists({ _id: id });
  }
}
