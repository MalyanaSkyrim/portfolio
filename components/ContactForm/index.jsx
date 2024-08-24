import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { User, MailIcon, MessageSquare, SendIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-4" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-4" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea type="name" id="name" placeholder="Name" />
        <MessageSquare className="absolute right-4 top-3" size={20} />
      </div>
      <Button className="w-full md:max-w-40">
        <span className="mr-2">Send</span> <SendIcon size={18} />
      </Button>
    </form>
  );
};

export default ContactForm;
