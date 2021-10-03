import { Country } from '../../types/Country';
import styles from './CountryTable.module.scss';
import { formatArea, formatPopulation } from './utils';

type CountryTableProps = {
  countries: Country[];
};

export const CountryTable = ({ countries }: CountryTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th className={styles.alignRight}>Area</th>
          <th className={styles.alignRight}>Population</th>
        </tr>
      </thead>
      <tbody>
        {countries.map(({ name, region, population, area }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{region}</td>
            <td className={styles.alignRight}>{formatArea(area)}</td>
            <td className={styles.alignRight}>
              {formatPopulation(population)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
