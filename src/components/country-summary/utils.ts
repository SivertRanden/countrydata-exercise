import { Country } from '../../types/Country';

export const getAveragePopulation = (countries: Country[]) =>
  countries.reduce((prev, current) => prev + current.population, 0) /
  countries.length;

export const getLargestCountry = (countries: Country[]) =>
  countries.reduce((prevLargest, current) =>
    prevLargest.area > current.area ? prevLargest : current
  );

export const getSmallestCountry = (countries: Country[]) =>
  countries.reduce((prevSmallest, current) =>
    prevSmallest.area < current.area ? prevSmallest : current
  );
