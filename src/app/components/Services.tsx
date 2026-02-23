import { Link } from "react-router";
import {
  Building,
  FileText,
  Scale,
  Briefcase,
  Globe,
  FileCheck,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
//import ServiceHero from "./ServiceHero";
import Hero from "./Hero";

export function Services() {
  const services = [
    {
      icon: Building,
      title: "LLC Formation",
      description:
        "Complete LLC registration services including articles of organization, operating agreements, and state filings.",
      features: [
        "Name availability check",
        "Articles of organization",
        "EIN registration",
        "Operating agreement",
      ],
    },
    {
      icon: Briefcase,
      title: "Corporation Setup",
      description:
        "Full corporation formation services for C-Corps and S-Corps with all necessary documentation.",
      features: [
        "Corporate bylaws",
        "Stock certificates",
        "Minutes & resolutions",
        "IRS S-Corp election",
      ],
    },
    {
      icon: Users,
      title: "Partnership Registration",
      description:
        "Partnership agreements and registration for general and limited partnerships.",
      features: [
        "Partnership agreement",
        "State registration",
        "Tax ID application",
        "Legal compliance review",
      ],
    },
    {
      icon: FileText,
      title: "DBA Filing",
      description:
        "Doing Business As (DBA) name registration to operate under a different business name.",
      features: [
        "Name search",
        "County/state filing",
        "Publication requirements",
        "Renewal reminders",
      ],
    },
    {
      icon: Scale,
      title: "Trademark Registration",
      description:
        "Protect your brand with comprehensive trademark search and federal registration services.",
      features: [
        "Trademark search",
        "USPTO filing",
        "Office action responses",
        "Ongoing monitoring",
      ],
    },
    {
      icon: Globe,
      title: "Foreign Qualification",
      description:
        "Register your business to operate in multiple states with foreign qualification services.",
      features: [
        "Multi-state registration",
        "Certificate of authority",
        "Registered agent service",
        "Compliance tracking",
      ],
    },
    {
      icon: FileCheck,
      title: "Annual Reports",
      description:
        "Stay compliant with annual report filing and business license renewal services.",
      features: [
        "Annual report filing",
        "License renewals",
        "Compliance calendars",
        "Deadline reminders",
      ],
    },
    {
      icon: Shield,
      title: "Registered Agent",
      description:
        "Professional registered agent services to receive legal documents on behalf of your business.",
      features: [
        "Legal document receipt",
        "Privacy protection",
        "Online access",
        "Compliance alerts",
      ],
    },
  ];

  return (
    <div>
      <Hero/>
      {/* <ServiceHero /> */}
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-lg text-gray-300">
              Comprehensive business registration and legal compliance services to help you
              establish and maintain your business with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            
            {services.map((service, index) => (

              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-[#D4AF37] hover:shadow-xl transition-all"
              ><motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="shadow-none"
               // variants={fadeUp}
                >

                <div className="bg-black p-4 rounded-lg inline-block mb-6">
                  <service.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                </motion.div>
              </div>
            ))}
            
          </div>
          
        </div>
        
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Our <span className="text-[#D4AF37]">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, straightforward steps to get your business registered quickly and correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your business needs and choose the right structure.",
              },
              {
                step: "02",
                title: "Documentation",
                description: "We prepare all required legal documents and paperwork.",
              },
              {
                step: "03",
                title: "Filing",
                description: "Submit all documents to appropriate government agencies.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Receive your official documents and ongoing support.",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-black text-[#D4AF37] text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Get <span className="text-[#D4AF37]">Started?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your business registration needs.
          </p>
          <Link
            to="/contact"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-md hover:bg-[#B8941C] transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
