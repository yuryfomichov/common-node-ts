// import all interfaces
import mongoose from "mongoose";
import { BaseRepository } from "./BaseRepository";

export abstract class BaseMongoRepository<T extends mongoose.Document>
  implements BaseRepository<T>
{
  private model: mongoose.Model<T>;

  constructor(name: string, schema: mongoose.Schema<T>) {
    this.model = mongoose.model<T, mongoose.Model<T>>(name, schema);
  }
  create(item: T): Promise<T> {
    return this.model.create(item);
  }
  createMany(item: T[]): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findOne(conditions: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<T> {
    // @ts-ignore
    return this.model.findById(id);
  }
  findByIds(ids: string[]): Promise<T> {
    throw new Error("Method not implemented.");
  }
  exist(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
