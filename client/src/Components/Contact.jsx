import React, { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
  Facebook,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formValues, setFormValue] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const onChangeFunction = (e) => {
    setFormValue((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1207f48f-ee29-41b8-8bdd-6511f2afc98c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    setFormValue({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <div className="px-5 md:px-15 lg:px-30 mt-20 text-white" id="contacts">
      {/* Heading */}
      <h4 className="font-regular text-[#F34F1C] text-md md:text-md lg:text-2xl scroll-animation">
        Get in touch
      </h4>
      <h2 className="font-bold text-4xl sm:text-6xl md:text-4xl lg:text-6xl bg-gradient-to-r from-white mt-[-12px] to-[#979797] text-transparent bg-clip-text scroll-animation">
        Contact Me.
      </h2>

      {/* Intro text */}
      <p className="mt-3 leading-4 md:leading-3 lg:leading-4 text-sm md:text-[10px] lg:text-[15px] text-gray-300 max-w-3xl scroll-animation">
        I’d love to connect with you! Whether you have a new project in mind,
        need a web solution, or just want to collaborate drop me a message
        anytime. Let’s create something meaningful together.
      </p>

      {/* Contact details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Left Section: Contact Info */}
        <div className="space-y-6">
          <div className="scroll-animation">
            <h3 className="text-sm md:text-md lg:text-2xl font-semibold text-[#F34F1C] mb-2 ">
              Mail
            </h3>
            <a
              href="mailto:adhilp3156@gmail.com"
              className="text-gray-300 hover:text-white "
            >
              adhilp3156@gmail.com
            </a>
          </div>

          <div className="scroll-animation">
            <h3 className="text-sm md:text-md lg:text-2xl font-semibold text-[#F34F1C] mb-2 ">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/919037062976"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white scroll-animation"
            >
              +91 9037062976
            </a>
          </div>

          <div className="scroll-animation">
            <h3 className="text-sm md:text-md lg:text-2xl font-semibold text-[#F34F1C] mb-2 ">
              Follow Me
            </h3>
            <div className="flex space-x-5 mt-2 scroll-animation">
              <a
                href="https://www.instagram.com/_adh.l/"
                className="hover:text-[#F34F1C] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-adhil-b17019350/?originalSubdomain=in"
                className="hover:text-[#F34F1C] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Me-adhil"
                className="hover:text-[#F34F1C] transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          className="bg-[#181818] border border-gray-700 rounded-3xl p-6 space-y-4 hover:scale-103 transition-transform duration-300 scroll-animation"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                required
                onChange={onChangeFunction}
                name="name"
                value={formValues.name}
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-gray-600 focus:border-[#F34F1C] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Email </label>
            <input
              type="email"
              name="email"
              required
              onChange={onChangeFunction}
              value={formValues.email}
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-gray-600 focus:border-[#F34F1C] outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-sm text-gray-400">Country</label>
              <input
                type="text"
                value="IND"
                readOnly
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-gray-600 text-gray-400"
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-400">Phone Number</label>
              <input
                type="number"
                name="number"
                onChange={onChangeFunction}
                value={formValues.number}
                required
                className="w-full mt-1 p-3 rounded-xl bg-transparent border border-gray-600 focus:border-[#F34F1C] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">How can I help you?</label>
            <textarea
              rows="4"
              required
              value={formValues.message}
              onChange={onChangeFunction}
              name="message"
              className="w-full mt-1 p-3 rounded-xl bg-transparent border border-gray-600 focus:border-[#F34F1C] outline-none"
              placeholder="Let's talk..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-3 w-full bg-[#F34F1C] hover:bg-[#d54010] text-white font-semibold py-3 rounded-3xl transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
