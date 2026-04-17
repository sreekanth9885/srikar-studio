import { Section } from './Section';
import { Card } from './Card';
import { testimonials } from '../data/testimonialsData';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    <Section id="testimonials" title="What Our Clients Say">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.comment}"</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};