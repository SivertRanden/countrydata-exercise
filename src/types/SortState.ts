export type SortState<T> = {
  sortOrder: 'asc' | 'desc' | '';
  sortKey?: keyof T;
};
