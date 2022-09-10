import Image from "next/image";
import Link from "next/link";

import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:mt-40">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex justify-center sm:px-24">
              <Image
                className="mx-auto h-12 w-auto"
                src="https://pgmsoft.com/wp-content/uploads/2022/04/pgmsoft_logotyp-04-300x38.png"
                alt="PGMSOFT LTD"
                width={300}
                height={38}
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <form
            method="post"
            className="mt-8 space-y-6"
            action="/api/auth/signin/email"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-2 rounded-md shadow-lg">
              <div>
                <label htmlFor="email" className="sr-only flex space-y-4">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  pattern=".+@.+\..+"
                  maxLength={320}
                  className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="flex flex-1 justify-between text-sm">
            <Link href="/">
              <a className="no-underline hover:underline">About project</a>
            </Link>
            <Link href="/">
              <a className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
                Back home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
