import { useState } from "alem";

type Props = {
  navigation: string[];
};

const NavDisclosure = ({ navigation }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
      {/* Logo */}
      <a href="/">
        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <span>
            <img src="https://nextly.web3templates.com/img/logo.svg" alt="N" width="32" height="32" className="w-8" />
          </span>
          <span className="font-semibold">Nextly</span>
        </span>
      </a>

      <button
        onClick={() => setOpen(!open)}
        type="button"
        aria-label="Toggle Menu"
        className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
      >
        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          {open && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!open && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="flex flex-wrap w-full my-5 lg:hidden">
          <>
            {navigation.map((item, index) => (
              <a
                key={index}
                href="/"
                className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                {item}
              </a>
            ))}
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
            >
              Download
            </a>
          </>
        </div>
      )}
    </div>
  );
};

export default NavDisclosure;
