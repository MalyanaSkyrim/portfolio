import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 pt-12 lg:mb-20">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="mb-8">Let's Work together.</h1>
            <p className="subtitle max-w-[400px]">
              I am available for freelance work. Let's work together to build
              something great.
            </p>
          </div>
          <div className="min-h-[300px] hidden lg:flex w-full bg-contact-illustration-light dark:bg-contact-illustration-dark bg-top bg-no-repeat bg-contain"></div>
        </div>

        <div className="grid lg:grid-cols-2 mb-16 lg:mb-20 gap-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>malyanamohamed1@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall className="text-primary" size={18} />
              <div>+212622304207</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon className="text-primary" size={18} />
              <div>Casablanca, Morocco</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
