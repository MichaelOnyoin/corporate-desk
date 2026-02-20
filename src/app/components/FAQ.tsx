'use client';
import * as React from 'react';
import { useState } from 'react';

export const FAQ: React.FC = () => {
  //const [expandedIndex, setExpandedIndex] = useState<number | null>(null);  
   const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
    
     {/* FAQ Section */}
  return (
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold mb-4">COMMON QUESTIONS</p>
            <h2 className="text-5xl font-bold text-black">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does company formation take?',
                a: 'Most countries take 3-5 business days. Some complex jurisdictions may take 2-3 weeks.'
              },
              {
                q: 'What countries do you serve?',
                a: 'We provide services in 50+ countries including USA, UK, Canada, Australia, Singapore, UAE, Nigeria, and more.'
              },
              {
                q: 'Is there a hidden fee structure?',
                a: 'Absolutely not. All pricing is transparent and country-specific. You see exactly what you pay upfront.'
              },
              {
                q: 'Can you help with existing company compliance?',
                a: 'Yes! Our AutoComply service helps monitor 300+ regulatory filings and ensures you never miss a deadline.'
              },
              {
                q: 'Do you provide banking services?',
                a: 'We partner with leading banks worldwide to provide seamless account setup. Some countries include banking free, others as an add-on.'
              },
              {
                q: 'What about trademark and IP protection?',
                a: 'We offer comprehensive trademark registration, patent protection, and IP strategy across all major jurisdictions.'
              },
            ].map((faq, i) => (
              <div key={i} className="border-2 border-black rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i.toString() ? null : i.toString())}
                  className="w-full p-6 bg-white hover:bg-gray-50 flex justify-between items-center font-bold text-black text-lg"
                >
                  {faq.q}
                  <span className="text-amber-500 text-2xl">{expandedFAQ === i.toString() ? '−' : '+'}</span>
                </button>
                {expandedFAQ === i.toString() && (
                  <div className="p-6 bg-gray-50 border-t-2 border-black text-gray-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
  );
};