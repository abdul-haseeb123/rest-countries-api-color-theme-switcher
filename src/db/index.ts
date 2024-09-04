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
  flags: { svg: string; png: string };
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

export const getCountries = (region: string, name: string) => {
  const countries: CountryList[] = data.map((country) => {
    return {
      name: country.name,
      population: country.population,
      region: country.region as Region,
      capital: country.capital,
      flags: country.flags,
    };
  });
  if (region.length == 0 && name.length == 0) return countries;
  if (region && name.length == 0)
    return countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );

  if (region.length == 0 && name)
    return countries.filter((country) =>
      country.name.toLowerCase().startsWith(name.toLowerCase())
    );
  else if (region && name)
    return countries.filter(
      (country) =>
        country.region.toLowerCase() === region.toLowerCase() &&
        country.name.toLowerCase().startsWith(name.toLowerCase())
    );
};

export const getCountryByAlpha3Code = (alpha3Code: string) => {
  let result = data.find((c) => c.alpha3Code == alpha3Code);
  if (!result)
    throw new Error(`Country with alpha3Code ${alpha3Code} does not exists`);
  return result.name.toLowerCase();
};

export const getCountry = (name: string): CountryDetail => {
  const country = data.find((c) => c.name.toLowerCase() == name.toLowerCase());
  if (!country) throw new Error(`Country with name ${name} does not exists`);
  let borderCountries = country.borders?.map((border) =>
    getCountryByAlpha3Code(border)
  );
  return {
    name: country.name,
    nativeName: country.nativeName,
    topLevelDomain: country.topLevelDomain,
    population: country.population,
    currencies: country.currencies,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
    capital: country.capital,
    borderCountries: borderCountries,
    flags: country.flags,
  };
};
