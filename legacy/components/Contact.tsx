import React from 'react';
import { Phone, ArrowRight, Mail } from 'lucide-react';
import { SectionId } from '../types';
import { PHONE_NUMBER } from '../config';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Need it fixed today?</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          I'm often out on jobs, but I reply to messages within the hour. For emergencies, give me a call directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${PHONE_NUMBER.split(' ').join('')}`} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 fill-current" />
            {PHONE_NUMBER}
          </a>
          <a href="mailto:hello@sspowerpros.com" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-slate-800 flex justify-center gap-8 text-sm text-slate-500 font-medium">
          <span>• Emergency Service</span>
          <span>• Licensed #9821</span>
          <span>• Insured</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;