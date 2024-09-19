"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

export default function ContactUs() {
  const [text, setText] = useState<string>('Say Hi! 👋');

  const sendToWhatsApp = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form refresh
    
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAP_NUMBER ; // Replace with your full WhatsApp number in international format, e.g., '15551234567'
    
    // WhatsApp message URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Redirect to WhatsApp with the message
    window.location.href = whatsappURL;
  };

  return (
    <section id="ContactUs" className="w-full py-12 md:py-24 lg:py-32"> 
      <div className="container px-4 md:px-6"> 
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or need assistance? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="w-full max-w-md space-y-4" onSubmit={sendToWhatsApp}>
            <div className="space-y-2">
              <Label htmlFor="message">Message WhatsApp</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
                value={text}
                onChange={(e) => setText(e.target.value)} // Save the message text
              />
            </div>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
