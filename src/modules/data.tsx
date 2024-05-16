import AdjustmentsHorizontalIcon from "../assets/AdjustmentsHorizontalIcon";
import ChartBarSquareIcon from "../assets/ChartBarSquareIcon";
import CursorArrowRaysIcon from "../assets/CursorArrowRaysIcon";
import DevicePhoneMobileIcon from "../assets/DevicePhoneMobileIcon";
import FaceSmileIcon from "../assets/FaceSmileIcon";
import SunIcon from "../assets/SunIcon";

// TODO: Copy images to IPFS
const benefitOneImg =
  "https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-one.a3b4f792.png&w=640&q=75";
const benefitTwoImg =
  "https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-two.1d7648d5.png&w=640&q=75";

export const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Além & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};
