import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Award, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To simplify the business registration process and empower entrepreneurs to launch their ventures with confidence and legal compliance.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted and efficient business registration service, helping thousands of businesses start and thrive each year.",
    },
    {
      icon: Award,
      title: "Our Expertise",
      description:
        "Over 15 years of experience in business law and registration, with a team of certified legal professionals dedicated to your success.",
    },
    {
      icon: Users,
      title: "Our Commitment",
      description:
        "Providing personalized support and guidance throughout your business journey, from initial registration to ongoing compliance.",
    },
  ];

  const team = [
    {
      name: "Okello Wilson",
      role: "Founder & CEO",
      description:
        "With over 15 years of experience in business law and registration, Okello is passionate about helping entrepreneurs navigate the complexities of starting a business. He founded Corporate Desk to provide accessible, efficient, and affordable registration services to businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc3MTIzNDU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "James Onyoin",
      role: "Legal Director",
      description:
        "James brings a wealth of legal expertise to Corporate Desk, overseeing all legal aspects of our services and ensuring our clients receive the highest level of support. With a background in corporate law and compliance, James is dedicated to helping businesses succeed while staying compliant with all regulations.",
      image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMG9mZmljZXxlbnwxfHx8fDE3NzEyMjk1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      description:
        "Emily leads our technology team, developing innovative solutions to streamline the business registration process. With a background in software engineering and a passion for user experience, Emily is committed to creating a seamless and efficient platform for our clients.",
      image: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzcxMzE5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              About <span className="text-[#D4AF37]">Corporate Desk</span>
            </h1>
            <p className="text-lg text-gray-300">
              We're dedicated to making business registration simple, efficient, and accessible
              for entrepreneurs and established companies alike.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-black mb-6">
                Our <span className="text-[#D4AF37]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2026, Corporate Desk began with a simple mission: to demystify the
                  complex world of business registration and make it accessible to everyone. Our
                  founder, Sarah Johnson, experienced firsthand the challenges of navigating legal
                  paperwork when starting her first business.
                </p>
                <p>
                  What started as a small consulting practice has grown into a full-service
                  business registration firm, helping over 5,000 businesses successfully establish
                  and maintain their legal standing. Our team of experienced legal professionals
                  brings decades of combined expertise in business law, corporate compliance, and
                  regulatory requirements.
                </p>
                <p>
                  Today, we continue to innovate and streamline the registration process, using
                  technology and expertise to provide faster, more accurate, and more affordable
                  services than traditional law firms.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#D4AF37]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzcxMzE5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Our <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all hover:translate-y-[-2%] transition-transform"
              >
                <div className="bg-black p-4 rounded-lg inline-block mb-6">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Meet Our <span className="text-[#D4AF37]">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative text-center group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 border-4 border-black">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-black mb-1">{member.name}</h3>
                <p className="text-[#D4AF37]">{member.role}</p>
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] rounded-lg p-4 mx-2 mb-22 float hidden group-hover:block">
                <p className="text-white">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Clients Served" },
              { value: "5+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
              { value: "50+", label: "States Covered" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
