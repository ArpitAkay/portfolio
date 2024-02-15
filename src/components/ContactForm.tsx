"use client";

import SendEmail from "@/actions/SendEmail";
import React from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";

const userInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name should be of atleast 3 characters" })
    .max(50, { message: "Name cannot be more than 50 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid Email" })
    .max(50, { message: "Email cannot be more than 50 characters" }),
  message: z.string().trim().min(2, { message: "Required" }),
});

interface Issue {
  name: string;
  email: string;
  message: string;
}

const ContactForm = ({ darkMode }: { darkMode: boolean }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [message, setMessage] = React.useState("Send Message");
  const [issues, setIssues] = React.useState<Issue>({
    name: "",
    email: "",
    message: "",
  });
  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        outlineColor: "outline-yellow-400",
      }
    : {
        textColor1: "text-black",
        outlineColor: "outline-slate-500",
      };

  const clientAction = async (formData: FormData) => {
    const userInfo = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const zodResult = userInfoSchema.safeParse(userInfo);
    if (!zodResult.success) {
      console.log(zodResult.error.issues);
      zodResult.error.issues.forEach((issue) => {
        const path = issue.path.join();
        setIssues((prev) => ({ ...prev, [path]: issue.message }));
      });
      setTimeout(() => {
        setIssues({
          name: "",
          email: "",
          message: "",
        });
      }, 5000);
      return;
    }

    const result = await SendEmail(formData);
    setMessage(result.message);
    if (result.status === "success") {
      formRef.current?.reset();
    }
    setTimeout(() => {
      setMessage("Send Message");
    }, 2000);
  };

  return (
    <form
      id="contact-form"
      className="flex justify-center text-black"
      action={clientAction}
      ref={formRef}
    >
      <div className="flex w-full flex-col items-center sm:w-3/5">
        <div className="mt-2 w-full">
          <label
            htmlFor="name"
            className={`my-1 block ${colorProp.textColor1} text-lg font-medium`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full rounded-md p-2 focus:${colorProp.outlineColor} border-2 border-white ${issues.name ? "border-red-500" : ""}`}
            placeholder="Name"
            maxLength={50}
          />
          <p
            className={`h-4 text-xs text-red-500 ${issues.name ? "visible" : "invisible"}`}
          >
            {issues.name}
          </p>
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className={`my-1  block ${colorProp.textColor1} text-lg font-medium`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full rounded-md p-2 focus:${colorProp.outlineColor} border-2 border-white ${issues.email ? "border-red-500" : ""}`}
            placeholder="Email"
            maxLength={50}
          />
          <p
            className={`h-4 text-xs text-red-500 ${issues.email ? "visible" : "invisible"}`}
          >
            {issues.email}
          </p>
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className={`my-1 block ${colorProp.textColor1} text-lg font-medium`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`w-full rounded-md p-2 focus:${colorProp.outlineColor} border-2 border-white ${issues.message ? " border-red-500" : ""}`}
            placeholder="Enter your message"
            rows={4}
            maxLength={1000}
          />
          <p
            className={`h-4 text-xs text-red-500 ${issues.message ? "visible" : "invisible"}`}
          >
            {issues.message}
          </p>
        </div>
        <div>
          <SubmitButton darkMode={darkMode} message={message} />
        </div>
      </div>
    </form>
  );
};

function SubmitButton({
  darkMode,
  message,
}: {
  darkMode: boolean;
  message: string;
}) {
  const { pending } = useFormStatus();

  const colorProp = darkMode
    ? {
        btnBgColor: "bg-yellow-400",
        btnTextColor: "text-black",
      }
    : {
        btnBgColor: "bg-slate-500",
        btnTextColor: "text-white",
      };

  return (
    <input
      type="submit"
      className={`${colorProp.btnTextColor} ${colorProp.btnBgColor} mt-2 rounded-md px-2 py-2 font-medium`}
      value={pending ? "Sending..." : message}
      disabled={pending}
    />
  );
}

export default ContactForm;
