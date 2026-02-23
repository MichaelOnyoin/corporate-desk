import React from "react";
import { motion } from "framer-motion";
import "../../styles/glass.css";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea.",
    name: "Alexandra R.",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    quote:
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea.",
    name: "Jane Doe",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    quote:
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea.",
    name: "John Doe",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const GlassTestimonials: React.FC = () => {
  return (
    <section className="glass-section">
      <h2>
        <span>Testimonials</span> From Satisfied Users
      </h2>

      <div className="glass-grid">
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <p className="glass-quote">“{item.quote}”</p>

            <div className="glass-user">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GlassTestimonials;