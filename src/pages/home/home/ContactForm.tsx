const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow p-8 max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
      <form className="space-y-4 w-full">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-300 text-white rounded-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
