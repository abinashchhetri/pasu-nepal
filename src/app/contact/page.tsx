import MaxWidthContainer from '@/components/MaxWidthContainer';
import ContactForm from './_components/ContactForm';
import { Facebook, Instagram, Music } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <MaxWidthContainer
      containerClassName="bg-white min-h-screen"
      className="py-8 md:py-12 lg:py-16"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#161821] mb-4">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-[#161821]/80 leading-relaxed">
              We'd love to hear from you! Whether you have a question about our products, 
              want to share your pet's story, or just want to say hello, we're here for you. 
              Reach out to us through the form or connect with us on social media.
            </p>
          </div>

          {/* Contact Email */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#161821] mb-2">Email Us</h3>
            <a 
              href="mailto:pawsunepal@gmail.com" 
              className="text-primary hover:underline text-base md:text-lg"
            >
              pawsunepal@gmail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#161821] mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-primary" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-6 h-6 text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ContactPage;

