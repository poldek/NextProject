import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="mx-auto max-w-7xl  lg:fixed
          p-4
          inset-x-0
          bottom-0"
    >
      <footer className="bg-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022
          <Link href="https://pgmsoft.com/">
            <a className="mr-4 hover:underline md:mr-6 ml-3" target="_blank">
              PGMSOFT LTD™
            </a>
          </Link>
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6">About project</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="mr-4 hover:underline md:mr-6">Licensing</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="mr-4 hover:underline md:mr-6">Contact</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
