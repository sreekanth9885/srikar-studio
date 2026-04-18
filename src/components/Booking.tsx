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
  const [loading, setLoading] = useState(false);

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

    if (!validateForm()) return;

    setLoading(true);

    // 👉 Your WhatsApp number (change this)
    const yourNumber = "919347277073";

    const message = `
📸 *New Booking Request - Snapclickss*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🎉 Event: ${formData.eventType}
📅 Date: ${formData.date}

📝 Message:
${formData.message || "No additional message"}
`;

    const whatsappURL = `https://wa.me/${yourNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      date: '',
      message: '',
    });

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <Section id="booking" title="Book Your Session">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Phone */}
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
              placeholder="+91 9347277073"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              <Calendar className="inline w-4 h-4 mr-2" />
              Event Type *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
            >
              <option value="">Select event type</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
              <option value="Birthday Event">Birthday Event</option>
              <option value="Portrait Shoot">Portrait Shoot</option>
              <option value="Video Editing">Video Editing</option>
            </select>
            {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              <CalendarDays className="inline w-4 h-4 mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

          {/* Message */}
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
              placeholder="Tell us more about your event..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? "Opening WhatsApp..." : "Submit via WhatsApp"}
          </button>

        </form>
      </div>
    </Section>
  );
};