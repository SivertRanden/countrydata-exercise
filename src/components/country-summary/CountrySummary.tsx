import { useMemo } from 'react';
import { Country } from '../../types/Country';
import { formatArea, formatPopulation } from '../../utils';
import styles from './CountrySummary.module.scss';
import {
  getAveragePopulation,
  getLargestCountry,
  getSmallestCountry,
} from './utils';

type CountrySummaryProps = {
  countries: Country[];
};

export const CountrySummary = ({ countries }: CountrySummaryProps) => {
  const averagePopulation = useMemo(
    () => getAveragePopulation(countries),
    [countries]
  );

  const largestCountry = useMemo(
    () => getLargestCountry(countries),
    [countries]
  );

  const smallestCountry = useMemo(
    () => getSmallestCountry(countries),
    [countries]
  );

  return (
    <div className={styles.container}>
      <SummaryItem
        label="Average population"
        value={formatPopulation(averagePopulation)}
      />
      <SummaryItem
        label="Largest area"
        value={`${largestCountry.name} (${formatArea(largestCountry.area)})`}
      />
      <SummaryItem
        label="Smallest area"
        value={`${smallestCountry.name} (${formatArea(smallestCountry.area)})`}
      />
    </div>
  );
};

const SummaryItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.summaryItem}>
    <span className={styles.label}>{label}</span>
    <span>{value}</span>
  </div>
);
