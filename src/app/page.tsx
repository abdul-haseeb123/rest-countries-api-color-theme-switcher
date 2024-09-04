import SearchFilterBox from "@/components/search-filter-box";
import { getCountries } from "@/db";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "REST Countries API | Frontend Mentor Project",
};

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const name = searchParams?.name ?? "";
  const region = searchParams?.region ?? "";
  console.log(name, region);

  const data = getCountries(region, name);
  if (!data) {
    return (
      <main className="min-h-screen grid place-content-center">
        <h1 className="text-3xl font-bold">No Countries Found</h1>
      </main>
    );
  }
  return (
    <main className="max-w-screen-xl mx-auto xl:px-0 px-4 my-14">
      <SearchFilterBox />
      <div className="mt-12 flex gap-6 flex-wrap justify-center">
        {data.length === 0 && (
          <h1 className="text-3xl font-bold">No Countries Found</h1>
        )}
        {data.length > 0 &&
          data.map((c, index) => (
            <Link
              key={c.name + index}
              href={`/countries/${c.name.toLowerCase()}`}
              className="bg-white dark:bg-[hsl(209,23%,22%)] rounded-md drop-shadow-md dark:shadow-[hsl(209,23%,22%)] overflow-hidden flex flex-col cursor-pointer w-full max-w-72 hover:scale-105 hover:drop-shadow-lg transition duration-150 hover:brightness-110"
            >
              <Image
                src={c.flags.png}
                width={320}
                height={192}
                alt={c.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Population:</span>{" "}
                  {c.population.toLocaleString()}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Region:</span> {c.region}
                </p>
                <p className="text-sm pb-5">
                  <span className="font-semibold">Capital:</span>{" "}
                  {c.capital ?? "N/A"}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
