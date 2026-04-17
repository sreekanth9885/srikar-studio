import { Section } from './Section';
import { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, CalendarDays } from 'lucide-react';

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.date) newErrors.date = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Booking request submitted! (Demo - no actual submission)');
      setFormData({ name: '', phone: '', eventType: '', date: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <Section id="booking" title="Book Your Session">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-white"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-white"
              placeholder="+1 234 567 8900"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              <Calendar className="inline w-4 h-4 mr-2" />
              Event Type *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-white"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding Photography</option>
              <option value="pre-wedding">Pre-Wedding Shoot</option>
              <option value="birthday">Birthday Event</option>
              <option value="portrait">Portrait Shoot</option>
              <option value="video">Video Editing</option>
            </select>
            {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              <CalendarDays className="inline w-4 h-4 mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-white"
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              <MessageSquare className="inline w-4 h-4 mr-2" />
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-white"
              placeholder="Tell us more about your event..."
            />
          </div>

          <button type="submit" className="w-full btn-primary">
            Submit Booking Request
          </button>
        </form>
      </div>
    </Section>
  );
};