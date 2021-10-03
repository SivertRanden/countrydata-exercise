import mockData from './mockdata.json';
import { Country } from './types/Country';

export const fetchCountries = async () => {
  // TODO: Re-enable api call
  // const res = await fetch(
  //   `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`,
  //   {
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );
  // const countries: Country[] = await res.json();
  // return countries;
  return mockData as Country[];
};
