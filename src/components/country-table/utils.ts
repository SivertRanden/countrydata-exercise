import { Country } from '../../types/Country';
import { SortState } from '../../types/SortState';

// Format in millions with one decimal
export const formatPopulation = (population: number) => {
  const populationInMillions = population / 1000000;
  const formattedPopulation = populationInMillions.toLocaleString('no-nb', {
    maximumFractionDigits: 1,
  });
  return `${formattedPopulation}M`;
};

// Format area in square miles
export const formatArea = (area: number) => {
  // Original area is in square km
  const areaInSquareMiles = area * 0.3861;

  const formattedArea = areaInSquareMiles.toLocaleString('no-nb', {
    maximumFractionDigits: 0,
  });

  return `${formattedArea} sq mi`;
};

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
