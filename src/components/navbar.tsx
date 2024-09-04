import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="dark:bg-[hsl(209,23%,22%)] bg-white text-foreground dark:drop-shadow-2xl drop-shadow-md">
      <nav>
        <ul className="flex justify-between items-center py-7 px-3 sm:px-5">
          <li>
            <Link href={"/"} className="font-extrabold text-lg sm:text-xl">
              Where in the world?
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
