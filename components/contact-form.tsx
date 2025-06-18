"use client";

import Email from "@/actions/email";
import { useState, useRef, FormEventHandler } from "react";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Input, TextArea } from "@/components/inputs";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateEmail = (value: string) => value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  const ref = useRef<HTMLFormElement>(null);

  return(
    <form 
      ref={ref}
      onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name: string = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;

        let valuesValid: boolean = true;

        if (name == "") {
          setNameValid(false);
          valuesValid = false;
        }
        else setNameValid(true);

        if (email == "" || !validateEmail(email as string)) {
          setEmailValid(false);
          valuesValid = false;
        }
        else setEmailValid(true);

        if (message == "") {
          setMessageValid(false);
          valuesValid = false;
        }
        else setMessageValid(true);

        if (!valuesValid) return;

        setLoading(true);
        await Email(name, email, message);
        setLoading(false);

        ref.current?.reset();
      }}
      className="flex flex-col gap-4 w-[350px] md:w-96 items-center text-left"
    >

      <div className="flex flex-col gap-2 w-full h-16">
        <Input
          placeholder="Name"
          name="name"
          isValid={nameValid}
          disabled={loading}
        />
        {!nameValid && <a className="text-red-500">Please input a valid name</a>}
      </div>


      <div className="flex flex-col gap-2 w-full h-16">
        <Input
          placeholder="Email"
          name="email"
          isValid={emailValid}
          disabled={loading}
        />
        {!emailValid && <a className="text-red-500">Please input a valid email</a>}
      </div>

      <div className="flex flex-col gap-2 w-full h-[17rem]">
        <TextArea
          className="h-60 text-justify resize-none"
          placeholder="Your message"
          name="message"
          isValid={messageValid}
          disabled={loading}
        />
        {!messageValid && <a className="text-red-500">Please input a valid message</a>}
      </div>

      <button type="submit" className={cn("flex bg-red-500 p-3 w-40 rounded-lg gap-2 justify-center", loading && "bg-red-700 text-gray-100")} disabled={loading}>
        {loading ? <> <Spinner/> Sending... </> : <> Submit </>}
      </button>
    </form>
  );
}
