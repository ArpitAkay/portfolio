import SendEmail from "@/actions/SendEmail";
import React from "react";
import { useFormStatus } from "react-dom";

const ContactForm = ({ darkMode }: { darkMode: boolean }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        outlineColor: "outline-yellow-400",
      }
    : {
        textColor1: "text-black",
        outlineColor: "outline-slate-500",
      };

  return (
    <form
      className="flex justify-center text-black"
      action={async (formData: FormData) => {
        await SendEmail(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <div className="flex w-full flex-col items-center sm:w-3/5">
        <div className="mt-2 w-full">
          <label
            htmlFor="name"
            className={`my-1 block ${colorProp.textColor1}`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full rounded-md p-2 focus:outline-yellow-400`}
            placeholder="Name"
          />
        </div>
        <div className="mt-2 w-full">
          <label
            htmlFor="email"
            className={`my-1  block ${colorProp.textColor1}`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full rounded-md p-2 focus:${colorProp.outlineColor}`}
            placeholder="Email"
          />
        </div>
        <div className="mt-2 w-full">
          <label
            htmlFor="message"
            className={`my-1 block ${colorProp.textColor1}`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`w-full rounded-md p-2 focus:${colorProp.outlineColor}`}
            placeholder="Enter your message"
            rows={4}
          />
        </div>
        <div>
          <SubmitButton darkMode={darkMode} />
        </div>
      </div>
    </form>
  );
};

function SubmitButton({ darkMode }: { darkMode: boolean }) {
  const { pending } = useFormStatus();

  const colorProp = darkMode
    ? {
        btnBgColor: "bg-yellow-400",
        btnTextColor: "text-white",
      }
    : {
        btnBgColor: "bg-slate-500",
        btnTextColor: "text-white",
      };

  return (
    <input
      type="submit"
      className={`${colorProp.btnTextColor} ${colorProp.btnBgColor} mt-2 rounded-md px-2 py-2 font-medium`}
      value={pending ? "Sending..." : "Send"}
      disabled={pending}
    />
  );
}

export default ContactForm;
