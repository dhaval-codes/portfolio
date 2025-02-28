import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactMeWrpr,
  FormWrpr,
  Heading,
  InputCont,
  InputTextArea,
  SubHeading,
  SubmitBtn,
} from "./style";

const FormMetaData = [
  { type: "text", name: "from_name", placeholder: "Name" },
  { type: "email", name: "from_email", placeholder: "Email" },
  { type: "text", name: "from_subject", placeholder: "Subject" },
  { type: "text", name: "message", placeholder: "Message" },
];

function ContactMeComponent() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const notifySuccess = () => {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyError = () => {
    toast.error("Failed to send message. Please try again.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_5pvk8vg", // Replace with your EmailJS Service ID
        "template_8wh1mow", // Replace with your EmailJS Template ID
        formRef.current,
        "BndHdz1ojlk4arOME" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          notifySuccess(); // Show success toast
          console.log("Email sent:", result.text);
          formRef.current.reset(); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          notifyError(); // Show error toast
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <ContactMeWrpr>
      <SubHeading>CONTACT ME</SubHeading>
      <Heading>
        Get In Touch With Me <span>Today</span> !
      </Heading>
      <FormWrpr ref={formRef} onSubmit={sendEmail}>
        {FormMetaData.map((data, index) =>
          data.name === "message" ? ( // Fix casing issue
            <InputTextArea
              name={data.name} // Add name attribute for EmailJS
              placeholder={data.placeholder}
              key={index}
              required
            />
          ) : (
            <InputCont
              type={data.type}
              name={data.name} // Add name attribute for EmailJS
              placeholder={data.placeholder}
              key={index}
              required
            />
          )
        )}
        <SubmitBtn type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Submit"}
        </SubmitBtn>
      </FormWrpr>
      <ToastContainer />
    </ContactMeWrpr>
  );
}

export default ContactMeComponent;
