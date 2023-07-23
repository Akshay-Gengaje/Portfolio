import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto mt-20" id="contact">
      <div className=" text-white text-center ">
        <p>Get In Touch</p>
        <p>
          I do recive your message and will respond asap if valid email is
          provided :)
        </p>
        <h1 className="text-blue-600 text-3xl text-center font-bold my-5">
          Contact Me
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 mt-10">
        <div className="flex justify-center items-center">
          <div className="w-[75vw] md:w-64 h-32 bg-[#132942] rounded-2xl hover:border hover:bg-transparent">
            <p className="text-white text-center mt-8">E-mail</p>
            <address typeof="email" className="text-white text-center mt-3">
              <a
                href="mailto:akshaysgengaje@gmail.com"
                className="hover:text-blue-400"
              >
                akshaysgengaje@gmail.com
              </a>
            </address>
          </div>
        </div>
        <div className="m-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
