import React from "react";
import VerticalGraph from "../verticallyGraph";
import ContactForm from "./ContactForm";
const ContactSection24 = () => {
  return (
    <div className="flex">
      <VerticalGraph
        name="CONTACT US"
        number={24}
        childStyNumber="mt-[-24px]"
        childStyling=""
        mainWidthStyling="w-[5%]"
      />
      <ContactForm />
    </div>
  );
};

export default ContactSection24;
