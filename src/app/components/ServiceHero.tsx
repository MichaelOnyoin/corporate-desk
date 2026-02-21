import React from "react";
import "../../styles/index.css";

const ServiceHero: React.FC = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Embark On Your Journey Join{" "}
          <span className="highlight">AgencyGrove</span> Today
        </h1>

        <p className="hero-subtitle">
          Leo cubilia vehicula ex donec maecenas fusce quam arcu himenaeos
          habitant nec iaculis mi habitasse dui elementum ut
        </p>

        <button className="hero-button">Get Started</button>
      </div>

      {/* <button className="scroll-top" onClick={scrollToTop}>
        ↑
      </button> */}
    </section>
  );
};

export default ServiceHero;