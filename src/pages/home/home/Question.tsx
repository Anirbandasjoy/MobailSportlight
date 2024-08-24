import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our menu, select your desired items, and add them to your cart. Once you're ready, proceed to checkout and follow the prompts to complete your order.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is placed, it cannot be modified. If you need to make changes, please contact our customer service as soon as possible to see if adjustments can be made before the order is processed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery. Check our payment options at checkout for more details.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After placing your order, you will receive a confirmation email with a tracking link. You can use this link to monitor the status of your delivery in real-time.",
    },
    {
      question: "What should I do if I have dietary restrictions?",
      answer:
        "If you have dietary restrictions, please make a note in the special instructions section when placing your order. Our kitchen will do its best to accommodate your needs. For specific concerns, contact our customer service directly.",
    },
    {
      question: "Do you offer delivery or takeout?",
      answer:
        "Yes, we offer both delivery and takeout options. Select your preferred option when placing your order, and we'll ensure your meal is prepared and delivered or ready for pickup as requested.",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row  container mx-auto gap-1 items-end h-[500px] overflow-auto">
      <div className="space-y-4 p-4 bg-white rounded-lg shadow flex-1">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-full flex-1">
        <img
          className="w-full h-full"
          src="https://plus.unsplash.com/premium_photo-1679870686437-2c3eb1de46d0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
    </div>
  );
};

export default FAQ;
