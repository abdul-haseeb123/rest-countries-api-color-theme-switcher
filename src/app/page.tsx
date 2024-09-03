import { getCountries, getCountry } from "@/db";

export default function Home() {
  const data = getCountries("Asia", "pa");

  return <main className="text-xl font-medium">{JSON.stringify(data)}</main>;
}
