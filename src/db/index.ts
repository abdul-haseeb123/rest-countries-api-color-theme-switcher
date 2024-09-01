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

type CountryDetail = {};

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
  let result;
  const r = data.map((c) => {
    if (c.alpha3Code === alpha3Code) {
      result = c.name;
    }
  });

  return result;
};

export const getCountry = (name: string) => {
  let result = {};
  let coun = data.filter((c) => c.name.toLowerCase() === name.toLowerCase());
  if (coun.length == 0) return null;
  coun = coun[0];
  const country = data.map((c) => {
    if (c.name.toLowerCase() === name.toLowerCase()) {
      let borderCountries = c.borders == undefined ? [] : c.borders;
      let bc;
      if (borderCountries.length > 0) {
        bc = borderCountries.map((b) => {
          return getCountryByAlpha3Code(b);
        });
      }
      return (result = {
        name: c.name,
        nativeName: c.nativeName,
        topLevelDomain: c.topLevelDomain,
        population: c.population,
        currencies: c.currencies,
        region: c.region,
        subRegion: c.subregion,
        languages: c.languages,
        capital: c.capital,
        borderCountries: bc,
        flags: c.flags,
      });
    }
  });
  return result;
};
