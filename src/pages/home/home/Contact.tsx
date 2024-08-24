import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side: Illustration */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src="https://i.ibb.co/Th5Xfjx/Apple-Messages-512.png"
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
