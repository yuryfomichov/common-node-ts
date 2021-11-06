export interface IRead<T> {
  findOne(item: any): Promise<T>;
  findById(id: string): Promise<T>;
  findByIds(ids: string[]): Promise<T[]>;
  exist(id: string): Promise<boolean>;
}
