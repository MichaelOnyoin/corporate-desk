import { Link } from "react-router";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[#D4AF37] p-2 rounded-lg">
                <Scale className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl tracking-tight">
                <span className="text-[#D4AF37]">Corporate</span>Desk
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in business registration and legal compliance. We handle all the
              paperwork so you can focus on growing your business.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm">+256 (785) 579-3314</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-sm">okellowilsonedvan864@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-sm">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Corporate Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
