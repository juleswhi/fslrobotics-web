import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 md:basis-4/5 max-w-screen-md">
        <h1 className="text-3xl md:text-4xl">Contact Us!</h1>
        <a>Please contact us if you have any queries or questions</a>
        <ContactForm/>
      </div>
    </div>
  );
}
