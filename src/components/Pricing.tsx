import { Section } from './Section';
import { Card } from './Card';
import { pricingPlans } from '../data/pricingData';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing = () => {
  return (
    <Section id="pricing" title="Pricing Plans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`relative h-full ${plan.popular ? 'border-2 border-yellow-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 rounded-bl-lg rounded-tr-lg font-semibold text-sm">
                  Popular
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 ">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary text-center">Choose Plan</button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};