import { IdType } from '../types';

export interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(obj: T | IdType): Promise<T | null>
  update(id: string, obj: T): Promise<T | null>
  delete(id:string): Promise<T | null>
}
