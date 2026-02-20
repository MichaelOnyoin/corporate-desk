export default function Testimonials() {
    {/* Testimonials Section */}
  return (
    
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold mb-4">CLIENT TESTIMONIALS</p>
            <h2 className="text-5xl font-bold mb-4 text-black">Loved by Industry Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'CEO, TechVenture Inc', quote: 'Corporate Elite made our global expansion effortless. Their expertise saved us 6 months of bureaucracy.' },
              { name: 'Marcus Johnson', role: 'Founder, FinServe Solutions', quote: 'The compliance automation is a game-changer. We now sleep better knowing everything is handled.' },
              { name: 'Emma Rodriguez', role: 'CFO, Global Logistics Co', quote: 'Professional, efficient, and remarkably transparent. Highly recommended for any serious business.' },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white border-2 border-black rounded-lg">
                <p className="text-amber-500 text-3xl mb-4">★★★★★</p>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}