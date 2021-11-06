export interface IWrite<T> {
  create(item: T): Promise<T>;
  createMany(item: T[]): Promise<T[]>;
  update(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
