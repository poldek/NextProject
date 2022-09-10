import Image from "next/image";
import Link from "next/link";
export default function Verify() {
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
              Check your email A sign in link has been sent to your email
              address.
            </h2>
          </div>

          <div className="flex flex-1 justify-center text-sm">
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
