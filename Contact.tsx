import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';

export default function Contact() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Customer service team"
        />
        <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <SectionHeading
            eyebrow="Contact us"
            title="Let's talk about your AI needs"
            description="Our team is ready to help you transform your business with AI."
            light
          />

          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>contact@aiagents.com</dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Phone number</span>
                <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>+1 (555) 234-5678</dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Chat</span>
                <MessageSquare className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>Live chat available 24/7</dd>
            </div>
          </dl>

          <div className="mt-8">
            <Button variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}