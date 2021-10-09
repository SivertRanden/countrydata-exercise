import { useMemo, useState } from 'react';
import { Country } from '../../types/Country';
import { Header } from '../../types/Header';
import { SortState } from '../../types/SortState';
import styles from './CountryTable.module.scss';
import {
  formatArea,
  formatPopulation,
  getNextSortState,
  sortCountries,
} from './utils';

type CountryTableProps = {
  countries: Country[];
};

export const CountryTable = ({ countries }: CountryTableProps) => {
  const [sortState, setSortState] = useState<SortState<Country>>({
    sortOrder: '',
  });

  const headers: Header<Country>[] = useMemo(
    () => [
      {
        accessor: 'name',
        header: 'Name',
        renderCell: ({ name }) => name,
      },
      {
        accessor: 'region',
        header: 'Region',
        renderCell: ({ region }) => region,
      },
      {
        accessor: 'area',
        header: 'Area',
        renderCell: ({ area }) => formatArea(area),
      },
      {
        accessor: 'population',
        header: 'Population',
        renderCell: ({ population }) => formatPopulation(population),
      },
    ],
    []
  );

  const sortColumn = (accessor: keyof Country) => {
    setSortState((prevState) => getNextSortState(prevState, accessor));
  };

  const sortedCountries = useMemo(
    () => sortCountries(countries, sortState),
    [countries, sortState]
  );

  const getSortSymbol = (accessor: keyof Country) => {
    if (accessor === sortState.sortKey) {
      return sortState.sortOrder === 'asc' ? '🔼' : '🔽';
    }
    return '';
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map(({ accessor, header }) => (
            <th key={accessor}>
              <button onClick={() => sortColumn(accessor)}>
                {header}
                {getSortSymbol(accessor)}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedCountries.map((country) => (
          <tr key={country.name}>
            {headers.map(({ accessor, renderCell }) => (
              <td key={accessor}>{renderCell(country)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
