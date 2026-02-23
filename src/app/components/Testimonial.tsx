import React from "react";
import { motion } from "framer-motion";
import "../../styles/testimonials.css";

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
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea",
    name: "Alexandra R.",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    quote:
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea",
    name: "Jane Doe",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    quote:
      "Dictumst turpis potenti fringilla mi lorem dapibus suspendisse senectus ligula rhoncus neque eros dictum nunc himenaeos justo per phasellus platea",
    name: "John Doe",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    //transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials: React.FC = () => {


  return (
    <section className="testimonials">
      <div className="testimonials-header">
        {/* <span className="section-tag">Testimonials</span> */}
        <h2>
          <span className="highlight">Testimonials</span> From Satisfied Users
        </h2>
        <p>
          Vehicula egestas tempor aptent etiam fames ut integer montes potenti
          inceptos ornare semper
        </p>
      </div>

      <motion.div
        className="testimonial-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            className="testimonial-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <p className="quote">“{item.quote}”</p>

            <div className="user">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </section>
  );
};

export default Testimonials;