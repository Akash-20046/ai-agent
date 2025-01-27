import React from 'react';

const testimonials = [
  {
    content: "The AI agents have transformed how we handle customer support. We've seen a 70% reduction in response time.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Implementing these AI agents has been a game-changer for our workflow automation needs.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateAI",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by industry leaders
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-gray-800 px-6 py-8 rounded-2xl">
                <q className="text-lg leading-8 text-gray-300">{testimonial.content}</q>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                  <div>
                    <div className="text-base font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}