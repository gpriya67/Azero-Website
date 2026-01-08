const ContactForm = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-24">
      <h2 className="text-center text-[40px] tracking-widest uppercase mb-4">
        Drop Us a Line
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Reach out to us from our contact form and we will get back to you
        shortly.
      </p>

      <form className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block text-gray-500 mb-2">
              Full Name <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 outline-none py-2 focus:border-black"
            />
          </div>

          <div>
            <label className="block text-gray-500 mb-2">
              Email <span className="text-black">*</span>
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 outline-none py-2 focus:border-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block text-gray-500 mb-2">
              Mobile Number <span className="text-black">*</span>
            </label>
            <input
              type="tel"
              className="w-full border-b border-gray-400 outline-none py-2 focus:border-black"
            />
          </div>

          <div>
            <label className="block text-gray-500 mb-2">Service</label>
            <select className="w-full border-b border-gray-400 outline-none py-2 bg-transparent focus:border-black">
              <option>Web Development</option>
              <option>Branding</option>
              <option>Graphic Design</option>
              <option>UI / UX Design</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-500 mb-2">
            Message <span className="text-black">*</span>
          </label>
          <textarea
            rows="4"
            className="w-full border-b border-gray-400 outline-none py-2 resize-none focus:border-black"
          />
        </div>

        <div className="flex items-center gap-4 mt-10">
          <button
            type="submit"
            className="uppercase tracking-widest text-sm font-medium
                       border-b border-black pb-1 hover:opacity-70 transition"
          >
            Send Message
          </button>

          <span className="text-gray-400 text-sm">
            * These fields are required.
          </span>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
