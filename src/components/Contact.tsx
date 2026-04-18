import { Section } from './Section';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We'd love to hear from you! Reach out to us for any inquiries or to schedule a consultation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-black dark:text-white" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600 dark:text-gray-400">H.No:5-100 Bolligudem, Hyderabad, TS 500038</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-black dark:text-white" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600 dark:text-gray-400">+91 9347277073</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-black dark:text-white" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600 dark:text-gray-400">snapclickss@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed - Hyderabad Bolligudem Location */}
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.384447566543!2d78.4884608!3d17.4353452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a6c1f7b9b5f%3A0x8a5c2f7b2d7f7e2!2sBolligudem%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Srikar Studio Location - Bolligudem, Hyderabad"
          />
        </div>
      </div>
    </Section>
  );
};