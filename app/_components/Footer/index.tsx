import React from "react";
import { DoctorsSpecialties, LinksData, SocialLinksData } from "@/app/_data";
import Link from "next/link";
import Socials from "../Socials";
import IconContainer from "../IconContainer";
import { AppLogo } from "@/app/_icons";

/*~~~~~~~~$ Footer Component $~~~~~~~~*/
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-10">
        {/*~~~~~~~~$ Footer Main Content $~~~~~~~~*/}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/*~~~~~~~~$ Logo and Description Section $~~~~~~~~*/}
          <div>
            <Link href={"/"} aria-label="Go to Homepage">
              <IconContainer className="w-44 h-12">
                <AppLogo className="w-10 h-10" />
              </IconContainer>
            </Link>
            <p className="mt-4 max-w-xs text-gray-500">
              Easily book appointments with our top doctors and specialists.
              Choose your preferred date, time, and doctor, and confirm your
              booking instantly.
            </p>

            <Socials socialLinksData={SocialLinksData} className="w-fit" />
          </div>

          {/*~~~~~~~~$ Links Section $~~~~~~~~*/}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {/*~~~~~~~~$ Specialties Section $~~~~~~~~*/}
            <div>
              <p id="specialties-heading" className="font-medium text-gray-900">
                Specialties
              </p>
              <ul className="mt-6 space-y-4 text-sm" aria-labelledby="specialties-heading">
                {DoctorsSpecialties.map((specialty) => (
                  <li key={specialty.id}>
                    <Link
                      href={"search/" + specialty.specialty}
                      className="text-gray-700 transition hover:text-teal-600"
                      aria-label={`Search for ${specialty.specialty} doctors`}
                    >
                      {specialty.specialty}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*~~~~~~~~$ Company Section $~~~~~~~~*/}
            <div>
              <p id="company-heading" className="font-medium text-gray-900">
                Company
              </p>
              <ul className="mt-6 space-y-4 text-sm" aria-labelledby="company-heading">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="Learn more about the company"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="Meet the team"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="Review company accounts"
                  >
                    Accounts Review
                  </Link>
                </li>
              </ul>
            </div>

            {/*~~~~~~~~$ Helpful Links Section $~~~~~~~~*/}
            <div>
              <p id="helpful-links-heading" className="font-medium text-gray-900">
                Helpful Links
              </p>
              <ul className="mt-6 space-y-4 text-sm" aria-labelledby="helpful-links-heading">
                {LinksData.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="capitalize text-gray-700 transition hover:text-teal-600"
                      aria-label={`Navigate to ${link.title}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*~~~~~~~~$ Legal Section $~~~~~~~~*/}
            <div>
              <p id="legal-heading" className="font-medium text-gray-900">
                Legal
              </p>
              <ul className="mt-6 space-y-4 text-sm" aria-labelledby="legal-heading">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="View accessibility information"
                  >
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="Review the returns policy"
                  >
                    Returns Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="Review the refund policy"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:text-teal-600"
                    aria-label="View hiring statistics"
                  >
                    Hiring Statistics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*~~~~~~~~$ Footer Bottom Section $~~~~~~~~*/}
      <div className="border-t py-5 border-gray-200 flex items-center justify-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Mahmoud Saeed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
