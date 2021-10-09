import { Country } from '../../types/Country';
import { SortState } from '../../types/SortState';

export const sortCountries = (
  countries: Country[],
  { sortKey, sortOrder }: SortState<Country>
) => {
  if (sortKey && sortOrder) {
    return [...countries].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      if (valueA < valueB) {
        return sortOrder === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  return countries;
};

// If new sortKey, set sortKey to asc, else go to next sortOrder.
// asc => desc => no sorting
export const getNextSortState = (
  { sortKey: prevSortKey, sortOrder: prevSortOrder }: SortState<Country>,
  accessor: keyof Country
): SortState<Country> => {
  if (accessor !== prevSortKey) {
    return {
      sortKey: accessor,
      sortOrder: 'asc',
    };
  }
  return {
    sortKey:
      prevSortKey === accessor && prevSortOrder === 'desc'
        ? undefined
        : accessor,
    sortOrder:
      prevSortOrder === 'asc' ? 'desc' : prevSortOrder === 'desc' ? '' : 'asc',
  };
};
