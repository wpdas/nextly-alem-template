import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/Twitter";
import Container from "./Container";

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};

const Footer = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div>
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <a
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <img
                  src="https://nextly.web3templates.com/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Nextly</span>
              </a>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Nextly is a free landing page & marketing website template for startups and indie projects. Its built with
              Além & TailwindCSS. And its completely open-source.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 font-medium hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 font-medium hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="dark:text-gray-300 font-medium">Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com/web3templates" target="_blank" rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href="https://facebook.com/web3templates" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="https://instagram.com/web3templates" target="_blank" rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            Além & Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Glazestock
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
};

export default Footer;
