import { TextField, Box } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col text-white space-y-5 ">
      <input
        className="p-3 rounded bg-transparent border border-white focus:border-none"
        type="text"
        placeholder="Name"
      />
      <input
        className="p-3 rounded bg-transparent border border-white focus:border-none"
        type="text"
        placeholder="E-mail"
      />
      <textarea
        className="p-3 rounded bg-transparent border border-white focus:border-none"
        type="text"
        rows={4}
        placeholder="Your Message"
      />
      <button className="w-[6rem] outline py-2 px-4 hover:bg-white hover:text-blue-500">Submit</button>
    </div>
  );
};

export default ContactForm;
