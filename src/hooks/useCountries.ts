import { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import { Country } from '../types/Country';

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setLoading(true);
    try {
      const countries = await fetchCountries();
      setCountries(countries);
      setError(true);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    countries,
    loading,
    error,
  };
};
