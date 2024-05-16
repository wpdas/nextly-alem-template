import { useState } from "alem";
import ChevronUpIcon from "@app/assets/ChevronUpIcon";

type Props = {
  question: string;
  answer: string;
};

const Disclosure = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="font-medium flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`} />
      </button>
      {open && <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300 font-medium">{answer}</div>}
    </div>
  );
};

export default Disclosure;
