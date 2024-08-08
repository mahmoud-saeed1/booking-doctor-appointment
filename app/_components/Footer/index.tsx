import React from "react";
import { DoctorsSpecialties, LinksData } from "@/app/_data";
import Link from "next/link";

/*~~~~~~~~$ Footer Component $~~~~~~~~*/
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-10">
        {/*~~~~~~~~$ Footer Main Content $~~~~~~~~*/}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/*~~~~~~~~$ Logo and Description Section $~~~~~~~~*/}
          <div>
            <div className="text-teal-600">
              <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
            </p>
          </div>

          {/*~~~~~~~~$ Links Section $~~~~~~~~*/}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {/*~~~~~~~~$ Specialties Section $~~~~~~~~*/}
            <div>
              <p className="font-medium text-gray-900">Specialties</p>
              <ul className="mt-6 space-y-4 text-sm">
                {DoctorsSpecialties.map((specialty) => (
                  <li key={specialty.id}>
                    <Link
                      href={"search/" + specialty.specialty}
                      className="text-gray-700 transition hover:text-teal-600"
                    >
                      {specialty.specialty}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*~~~~~~~~$ Company Section $~~~~~~~~*/}
            <div>
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">About</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Meet the Team</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Accounts Review</Link>
                </li>
              </ul>
            </div>

            {/*~~~~~~~~$ Helpful Links Section $~~~~~~~~*/}
            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {LinksData.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="capitalize text-gray-700 transition hover:text-teal-600"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*~~~~~~~~$ Legal Section $~~~~~~~~*/}
            <div>
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Accessibility</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Returns Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Refund Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:text-teal-600">Hiring Statistics</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*~~~~~~~~$ Footer Bottom Section $~~~~~~~~*/}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
