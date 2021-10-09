import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '../../types/Country';
import { formatArea, formatPopulation } from '../../utils';
import { CountryTable } from './CountryTable';

const mockCountries: Country[] = [
  { name: 'Norway', region: 'Europe', population: 5379475, area: 323802 },
  { name: 'Sweden', region: 'Europe', population: 10353442, area: 450295 },
  { name: 'Denmark', region: 'Europe', population: 5831404, area: 43094 },
];

const renderCountryTable = () =>
  render(<CountryTable countries={mockCountries} />);

describe('CountryTable', () => {
  beforeEach(() => renderCountryTable());

  it('renders all rows', () => {
    mockCountries.forEach((country) => {
      expect(
        screen.getByRole('cell', { name: country.name })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('cell', { name: formatPopulation(country.population) })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('cell', { name: formatArea(country.area) })
      ).toBeInTheDocument();
    });
    expect(screen.getAllByRole('cell', { name: 'Europe' })).toHaveLength(3);
  });

  it('handles sorting', () => {
    // The table header is row 0, so we get row 1
    const initialFirstRow = screen.getAllByRole('row')[1];
    expect(
      within(initialFirstRow).getByRole('cell', { name: 'Norway' })
    ).toBeInTheDocument();

    // Trigger sort, should now be sorted ascending by area
    userEvent.click(screen.getByRole('button', { name: 'Area' }));

    const firstRow = screen.getAllByRole('row')[1];
    expect(
      within(firstRow).getByRole('cell', { name: 'Denmark' })
    ).toBeInTheDocument();
  });
});
