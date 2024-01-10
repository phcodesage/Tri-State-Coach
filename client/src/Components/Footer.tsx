import logo from '../assets/tri-state-coach-logo.png'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;

  const isAdminPage = path.startsWith('/admin');
  const isAdvertiserPage = path.startsWith('/me');

  if (isAdminPage || isAdvertiserPage) {
    return <div />;
  }
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <img
            className="h-12"
            src={logo}
            alt="Company name"
            width={155.64}
            height={48}
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Phases of Mortgage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Bank Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Required Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Mortgage Plans
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Claim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest properties, mortgages, and promos, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              required={true}
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-rose-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            © 2024 Tri-StateCoach, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
