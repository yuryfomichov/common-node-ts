// import all interfaces
import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  create(item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  createMany(items: T[]): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  update(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findOne(conditions: any): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findByIds(ids: string[]): Promise<T> {
    throw new Error("Method not implemented.");
  }
  exist(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
