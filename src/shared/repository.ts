// This interface defines a generic repository with a method to find all items of type T.
export interface Repository<T> {
  findAll(): T[] | undefined;
  findOne(item: { id: string }): T | undefined;
  add(item: T): T | undefined;
  update(item: T): T | undefined;
  delete(item: { id: string }): T | undefined;
}
