'use client';
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import {toast} from 'sonner'
import emailjs from "@emailjs/browser";
import * as React from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";


export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  // const [map, setMap] = useState<google.maps.Map | null>(null);
  // const [options, setOptionsState] = useState<google.maps.MapOptions>({
  //   center: { lat: -1.286389, lng: 36.817223 }, // Example: Nairobi
  //   zoom: 14,
  //   mapId: "NEXT_MAP_ID", // Required for Advanced Markers
  // });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const MAP_KEY = import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  useEffect(() => {
    const initMap = async () => {
      
      // Set the options for loading the API.
      setOptions({ key: MAP_KEY });
      
      const { Map } = await importLibrary("maps");
      const { Marker } = (await importLibrary("marker")) as google.maps.MarkerLibrary;
      //const { AdvancedMarkerElement, PinElement } = (await importLibrary("marker")) as google.maps.marker.AdvancedMarkerElement;
      //const { Marker } = (await importLibrary("marker")) as google.maps.marker.AdvancedMarkerElement;
      const position = { lat: 0.3281852802015787, lng: 32.6127245994123 }; // Example: Nairobi-1.286389 36.817223 //, 32.61194530921017
      //,  0.35412392605044984
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "NEXT_MAP_ID", // Required for Advanced Markers
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Add a marker to the map
      new Marker({
        map: map,
        position: position,
        title: "Our Office Location",
      });
      // The advanced marker, positioned at Uluru
      // const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      //     map,
      //     position: position,
      //     title: 'Uluru/Ayers Rock',
      // });
    
    }
    initMap();
  }, []);
  
   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || '';
   const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || '';
   const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || '';
   
   const sendEmail = (e:React.FormEvent) => {
      
    e.preventDefault(); 
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    alert("Thank you for your inquiry! We'll get back to you shortly.");
    if (!form.current) {
        console.error('Form reference is null');
        return;
      }
    
    emailjs
       .sendForm(SERVICE_ID, TEMPLATE_ID, form.current,{ 
        publicKey: PUBLIC_KEY,

        limitRate:{
            throttle: 100000, // can't send more than one email per 100s
          }
      })
      .then(
        () => {
          console.log('Email sent!');
          toast("Email sent successfully", {
          description: "Email has been sent and we shall reply within 24hrs",
          position: 'top-right',
          action: {
            label: "Ok",
            onClick: () => console.log("Ok"),
            
          },
        });
            
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error( 'Failed to Send Message!');
        },
      );
     };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              Get In <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-lg text-gray-300">
              Ready to register your business? Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl text-black mb-8">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+256 (785) 579-3314</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-black mb-1">Email</h3>
                    <p className="text-gray-600">corporatedeskuganda@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                    
                  </div>
                  <div>
                    <h3 className="text-black mb-1">Office</h3>
                    <p className="text-gray-600">
                      Nakawa Business Park
                      <br/>
                      Nakawa House, Plot 70003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-black mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="flex flex-col mt-12">
                <h4 className="text-gray-500">Map View</h4>
                <div className="mt-2 bg-gray-200 h-64 rounded-lg flex items-center justify-center border-2 border-gray-300">
                  
                  <div ref={mapRef} className="w-full h-full rounded-lg" />
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="text-3xl text-black mb-6">
                  Send Us a <span className="text-[#D4AF37]">Message</span>
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                       value={formData.name}
                       onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-black mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white"
                      placeholder="Your Company LLC"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-black mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="llc formation">LLC Formation</option>
                      <option value="corporation setup">Corporation Setup</option>
                      <option value="partnership registration">Partnership Registration</option>
                      <option value="dba filling">DBA Filing</option>
                      <option value="trademark registration">Trademark Registration</option>
                      <option value="foreign qualification">Foreign Qualification</option>
                      <option value="annual reports">Annual Reports</option>
                      <option value="registered agent">Registered Agent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                       value={formData.message}
                       onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-white resize-none"
                      placeholder="Tell us about your business registration needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    value={'Send Email'}
                    className="w-full bg-[#D4AF37] text-black px-6 py-4 rounded-md hover:bg-[#B8941C] transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Prefer to Talk <span className="text-[#D4AF37]">Directly?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Call us now for immediate assistance with your business registration.
          </p>
          <a
            href="tel:+15551234567"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-md hover:bg-[#B8941C] transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            +256 (785) 579-3314
          </a>
        </div>
      </section>
    </div>
  );
}
