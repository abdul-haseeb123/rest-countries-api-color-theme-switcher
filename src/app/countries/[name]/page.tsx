import PreviousPageButton from "@/components/previous-page-button";
import { getCountry } from "@/db";

import Image from "next/image";
import Link from "next/link";

export const generateMetadata = ({ params }: { params: { name: string } }) => {
  return {
    title: `${decodeURIComponent(
      params.name
    ).toLocaleUpperCase()} | REST Countries API | Frontend Mentor Project`,
  };
};

export default function CountryDetailPage({
  params,
}: {
  params: { name: string };
}) {
  const country = getCountry(decodeURIComponent(params.name));
  return (
    <main className="max-w-screen-xl mx-auto px-4 xl:px-0 mb-12">
      <PreviousPageButton />
      <div className="flex flex-col md:flex-row md:gap-40 gap-14">
        <Image
          src={country.flags.svg}
          width={320}
          height={260}
          alt={country.name}
          className="w-full max-w-96 self-start md:max-w-md"
        />

        <div className="flex gap-4 flex-col md:self-center w-full mx-auto max-w-96 md:max-w-none">
          <h1 className="font-extrabold text-4xl">{country.name}</h1>
          <div className="flex gap-12 md:flex-row flex-col md:justify-between ">
            <div className="space-y-2">
              <div className="flex gap-2">
                <p className="font-semibold">Native Name:</p>
                <p>{country.nativeName}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Population:</p>
                <p>{country.population.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Region:</p>
                <p>{country.region}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Sub Region:</p>
                <p>{country.subregion}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Capital:</p>
                <p>{country.capital}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <p className="font-semibold">Top Level Domain:</p>
                <p>{country.topLevelDomain}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Currencies:</p>
                <p>
                  {country.currencies?.map((currency) => (
                    <span key={currency.code} className="mx-0.5">
                      {currency.name}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Languages:</p>
                <p>
                  {country.languages.map((language, idx) => (
                    <span key={idx} className="mx-0.5">
                      {language.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14 mb-12 md:mb-0 flex flex-col md:flex-row flex-wrap gap-4 md:items-center">
            <h2 className="font-semibold">Border Countries:</h2>
            <div className="flex gap-2 flex-wrap items-center">
              {country.borderCountries &&
                country.borderCountries.map((border, idx) => (
                  <Link
                    key={border + idx}
                    className="bg-white dark:bg-[hsl(209,23%,22%)] dark:shadow-2xl shadow-sm rounded-md px-3 py-2 font-medium"
                    href={`/countries/${border}`}
                  >
                    {border}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
