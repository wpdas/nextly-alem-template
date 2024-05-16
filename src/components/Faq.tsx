import Container from "./Container";
import Disclosure from "./Disclosure";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

export default Faq;
