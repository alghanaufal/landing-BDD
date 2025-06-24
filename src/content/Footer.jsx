import React, { useState } from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // In a real app, you would make an API call to your backend here.
    // This is a placeholder for the original AJAX call.
    console.log(`Subscribing with email: ${email}`);
    setMessage("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer className="bg-white text-gray-600 font-sans rounded-t-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-t-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Let's grow and collaborate with us!
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed">
                Creating sustainable partnerships with our clients.
                Transparency, honesty, and real talk are part of our
                collaborative DNA.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]">
                Start our Journey
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Section */}
      <div className="bg-gray-900 text-gray-300 rounded-t-3xl -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Column 1: Branding and Description */}
            <div className="md:col-span-4">
              <a href="https://bolehdicoba.com" className="mb-6 inline-block">
                <img
                  loading="lazy"
                  width="201"
                  height="80"
                  src="./Logo-w.png"
                  alt="Boleh Dicoba Digital"
                />
              </a>
              <p className="text-sm mt-4">
                We are players in the integrated digital marketing game, devoted
                to the pursuit of collective sustainable growth that ensures
                lasting success. Our mission is to elevate your business to new
                heights by exploring actionable possibilities.
              </p>
            </div>

            {/* Column 2: Newsletter and Social */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Get any update from us!
              </h4>
              <form onSubmit={handleSubscribe} className="flex mb-6">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
                >
                  Subscribe
                  <FaArrowRight />
                </button>
              </form>
              {message && (
                <div className="text-green-600 text-sm mt-2">{message}</div>
              )}

              <div className="mt-8">
                <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                  FOLLOW US
                </h6>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/bolehdicobadigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://id.linkedin.com/company/bolehdicoba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.tiktok.com/@bolehdicobadigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition duration-300"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                  OUR ECOSYSTEM
                </h6>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://bolehbelajar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./ecosystem1.png"
                      alt="Boleh Belajar"
                      className="h-8"
                    />
                  </a>
                  <div className="border-l h-6 border-gray-300"></div>
                  <a
                    href="https://sksdigital.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./ecosystem2.png"
                      alt="SKS Digital"
                      className="h-8"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3 & 4: Links and Offices */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                  Boleh Dicoba Digital
                </h6>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://bolehdicoba.com/about-us/"
                      className="hover:text-blue-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/news-blog/"
                      className="hover:text-blue-500"
                    >
                      News & Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/case-study/"
                      className="hover:text-blue-500"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/loyalty-program/"
                      className="hover:text-blue-500"
                    >
                      Loyalty Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/web-seo-audit/"
                      className="hover:text-blue-500"
                    >
                      Web & SEO Audit
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                  Services
                </h6>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://bolehdicoba.com/services/digital-advertising/"
                      className="hover:text-blue-500"
                    >
                      Digital Advertising
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/services/performance-creative/"
                      className="hover:text-blue-500"
                    >
                      Performance Creative
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/services/website-development/"
                      className="hover:text-blue-500"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bolehdicoba.com/services/seo/"
                      className="hover:text-blue-500"
                    >
                      Search Engine Optimization
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="md:col-span-8">
              <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                OUR OFFICES
              </h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h6 className="font-bold text-gray-700 mb-1">Bandung HQ</h6>
                  <p>
                    Lima Building, Jl. Sunda No.56-61, Bandung, Jawa Barat 40112
                  </p>
                </div>
                <div>
                  <h6 className="font-bold text-gray-700 mb-1">Jakarta HQ</h6>
                  <p>Jl. Kemang Raya Selatan VIII No.55, Jakarta Selatan</p>
                </div>
                <div>
                  <h6 className="font-bold text-gray-700 mb-1">Singapore HQ</h6>
                  <p>531A Upper Cross Street #04-95, Hong Lim Complex</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <h6 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">
                CONTACT US
              </h6>
              <div className="text-sm space-y-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6281805757585"
                  className="flex items-center hover:text-blue-500"
                >
                  <span className="font-bold mr-2">P.</span> +62 818 0575 7585
                </a>
                <a
                  href="mailto:hi@bolehdicoba.com"
                  className="flex items-center hover:text-blue-500"
                >
                  <span className="font-bold mr-2">E.</span> hi@bolehdicoba.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: Copyright */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Boleh Dicoba Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
