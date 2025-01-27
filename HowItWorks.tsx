import React from 'react';
import { Bot, Cpu, MessageSquare, Zap } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const steps = [
  {
    title: 'Create Your Agent',
    description: 'Design your AI agent with our intuitive interface. Choose capabilities and set parameters.',
    icon: Bot,
    color: 'bg-blue-500'
  },
  {
    title: 'Train & Configure',
    description: 'Train your agent with your data and configure it to match your specific needs.',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    title: 'Deploy & Integrate',
    description: 'Deploy your agent and integrate it with your existing systems via our API.',
    icon: Zap,
    color: 'bg-pink-500'
  },
  {
    title: 'Monitor & Optimize',
    description: 'Track performance and optimize your agent based on real-world interactions.',
    icon: MessageSquare,
    color: 'bg-indigo-500'
  }
];

export default function HowItWorks() {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Get started in minutes"
          description="Our platform makes it easy to create, deploy, and manage AI agents for your business."
          center
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-16">
                <div className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl ${step.color}`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="relative">
                  <div className="inline-flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
                    <div className="h-px w-12 bg-gray-200" />
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}