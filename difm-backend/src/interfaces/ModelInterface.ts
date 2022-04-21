export interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(obj: T): Promise<T | null>
  update(id: string, obj: T): Promise<T | null>
  delete(id:string): Promise<T | null>
}
