import { Country } from './types/Country';

export const fetchCountries = async () => {
  const res = await fetch(
    `https://restcountries.com/v2/all?fields=name,region,population,area`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const countries: Country[] = await res.json();
  return countries;
};
