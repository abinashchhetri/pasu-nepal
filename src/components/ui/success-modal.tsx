'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, X, Home } from 'lucide-react';
import Link from 'next/link';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const SuccessModal = ({ isOpen, onClose, message = 'Thank you. I will get back to you as soon as possible.' }: SuccessModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75" />
              <div className="relative bg-green-100 rounded-full p-4 animate-in zoom-in-95 duration-500 delay-150">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#161821] mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Message Sent Successfully!
          </h3>

          {/* Message */}
          <p className="text-gray-600 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            {message}
          </p>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <Link href="/" onClick={onClose}>
              <Button
                className="w-full rounded-full text-white hover:opacity-90 bg-primary transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
                size="lg"
              >
                <Home className="w-5 h-5 mr-2 group-hover:translate-x-[-2px] transition-transform" />
                Go Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

