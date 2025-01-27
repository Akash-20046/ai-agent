import React from 'react';
import { Brain, Zap, Shield, Clock } from 'lucide-react';

const features = [
  {
    name: 'Advanced AI Processing',
    description: 'Powered by cutting-edge machine learning models for intelligent decision making.',
    icon: Brain,
  },
  {
    name: 'Lightning Fast',
    description: 'Real-time responses and processing with minimal latency.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to protect your data.',
    icon: Shield,
  },
  {
    name: '24/7 Availability',
    description: 'Your AI agents are always on duty, ready to assist anytime.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Advanced Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your operations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI agents come packed with powerful features designed to transform your business processes
            and boost productivity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}