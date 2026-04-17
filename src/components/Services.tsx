import { Section } from './Section';
import { Card } from './Card';
import { services } from '../data/servicesData';
import { motion } from 'framer-motion';

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="services" title="Our Services">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card className="p-6 text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};