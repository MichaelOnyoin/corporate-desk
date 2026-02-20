import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  FileText,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  Award,
} from "lucide-react";
import {FAQ} from "./FAQ";

export function Home() {
  const features = [
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "We handle all required paperwork and filings for your business registration.",
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure your business meets all local, state, and federal requirements.",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times to get your business up and running faster.",
    },
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description: "Professional support throughout the entire registration process.",
    },
  ];

  const stats = [
    { icon: Building2, value: "5,000+", label: "Businesses Registered" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzcxMzE5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#D4AF37] text-black px-4 py-1.5 rounded-full text-sm mb-6">
              Trusted Registration & Documentation Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Register Your Business
              <span className="block text-[#D4AF37]">With Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              We simplify the complex process of business registration, handling all legal
              documentation and compliance requirements so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-md hover:bg-[#B8941C] transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-black p-3 rounded-lg">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-3xl text-black">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Why Choose <span className="text-[#D4AF37]">LegalRegister</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive business registration services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all"
              >
                <div className="bg-black p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your <span className="text-[#D4AF37]">Business Journey?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts handle the legal paperwork while you focus on building your dream
            business.
          </p>
          <Link
            to="/contact"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-md hover:bg-[#B8941C] transition-colors inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
