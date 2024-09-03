import data from "./data.json";

type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "Polar"
  | "Antartic Ocean"
  | "Antartic";

type CountryList = {
  name: string;
  population: number;
  region: Region;
  capital: string | undefined;
};

type CountryDetail = {
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  population: number;
  currencies?: { code: string; name: string; symbol: string }[];
  region: string;
  subregion: string;
  languages: { name: string }[];
  capital?: string;
  borderCountries?: string[];
  flags: { svg: string; png: string };
};

export const getCountries = (region?: string, name?: string) => {
  const countries: CountryList[] = data.map((country) => {
    return {
      name: country.name,
      population: country.population,
      region: country.region as Region,
      capital: country.capital,
    };
  });
  if (!region && !name) return countries;
  if (region && !name)
    return countries.filter((country) => country.region === region);

  if (!region && name)
    return countries.filter((country) =>
      country.name.toLowerCase().startsWith(name.toLowerCase())
    );

  if (region && name)
    return countries.filter(
      (country) =>
        country.region === region &&
        country.name.toLowerCase().startsWith(name.toLowerCase())
    );
};

export const getCountryByAlpha3Code = (alpha3Code: string) => {
  let result = data.find((c) => c.alpha3Code == alpha3Code);
  if (!result)
    throw new Error(`Country with alpha3Code ${alpha3Code} does not exists`);
  return result.name;
};

export const getCountry = (name: string) => {
  const country: CountryDetail | undefined = data.find(
    (c) => c.name.toLowerCase() == name.toLowerCase()
  );
  if (!country) throw new Error(`Country with name ${name} does not exists`);
  return country;
};
