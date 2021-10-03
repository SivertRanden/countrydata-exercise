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
