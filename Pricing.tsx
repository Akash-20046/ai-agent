import React from 'react';
import { Check } from 'lucide-react';
import Button from './common/Button';
import SectionHeading from './common/SectionHeading';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams and startups.',
    features: [
      '2 AI agents',
      '1,000 requests per month',
      'Basic analytics',
      'Email support',
      'API access'
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing businesses and teams.',
    features: [
      '5 AI agents',
      '10,000 requests per month',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs.',
    features: [
      'Unlimited AI agents',
      'Unlimited requests',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom development',
      'SLA guarantee',
      'On-premise deployment'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the perfect plan for your needs"
          description="Simple, transparent pricing that grows with you. All plans include 14-day free trial."
          center
        />

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured
                  ? 'bg-gray-900 text-white scale-105 z-10 ring-gray-900'
                  : 'bg-white'
              }`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${
                tier.featured ? 'text-white' : 'text-gray-900'
              }`}>
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-sm font-semibold">/month</span>}
              </p>

              <ul className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${
                      tier.featured ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                    <span className={tier.featured ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? 'primary' : 'secondary'}
                className={`mt-8 w-full justify-center ${
                  tier.featured ? '' : 'text-gray-900 ring-1 ring-inset ring-gray-200 hover:ring-gray-300'
                }`}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}