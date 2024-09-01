import { getCountries, getCountry } from "@/db";
import Image from "next/image";

export default function Home() {
  const data = getCountry("pakistan");
  if (!data) return <main>Loading...</main>;

  return <main className="text-xl font-medium">{JSON.stringify(data)}</main>;
}
