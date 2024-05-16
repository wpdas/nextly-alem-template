import ThemeChanger from "./DarkSwitch";
import NavDisclosure from "./NavDisclosure";

const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <div className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo and Mobile View  */}
        <NavDisclosure navigation={navigation} />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <a
            href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Download
          </a>

          <ThemeChanger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
