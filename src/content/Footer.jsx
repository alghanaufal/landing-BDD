import React, { useState } from "react";

// SVG Icon Components for better reusability
const InstagramIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="instagram"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    ></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="linkedin"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    ></path>
  </svg>
);

const TiktokIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="tiktok"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"
    ></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

const Footer = () => {
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
    <footer className="bg-white text-gray-600 font-sans">
      {/* Top section: Call to Action */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
              <h6 className="text-2xl font-bold text-gray-800 mb-2">
                Let's grow and collaborate with us!
              </h6>
              <p className="text-gray-600">
                Creating sustainable partnerships with our clients.
                Transparency, honesty, and real talk are part of our
                collaborative DNA.
              </p>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=6281805757585&text=Halo%20saya%20tau%20BDD%20dari%20Website,%20mohon%20diinformasikan%20terkait%20servisnya%20ya"
                className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start our Journey
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Branding and Description */}
          <div className="md:col-span-4">
            <a href="https://bolehdicoba.com" className="mb-6 inline-block">
              <img
                loading="lazy"
                width="201"
                height="80"
                src="https://bolehdicoba.com/wp-content/uploads/2024/03/Frame.png"
                alt="Boleh Dicoba Digital"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/201x80/e2e8f0/e2e8f0?text=Logo";
                }}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300 flex items-center"
              >
                Subscribe
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
                  <InstagramIcon />
                </a>
                <a
                  href="https://id.linkedin.com/company/bolehdicoba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500 transition duration-300"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@bolehdicobadigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500 transition duration-300"
                >
                  <TiktokIcon />
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
                    src="https://bolehdicoba.com/wp-content/uploads/2024/03/Frame-1.png"
                    alt="Boleh Belajar"
                    className="h-8"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/100x32/e2e8f0/e2e8f0?text=Logo";
                    }}
                  />
                </a>
                <div className="border-l h-6 border-gray-300"></div>
                <a
                  href="https://sksdigital.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://bolehdicoba.com/wp-content/uploads/2024/03/Group-40281.png"
                    alt="SKS Digital"
                    className="h-8"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/100x32/e2e8f0/e2e8f0?text=Logo";
                    }}
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

      {/* Bottom bar: Copyright */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Boleh Dicoba Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    // The component needs TailwindCSS to be properly styled.
    // Make sure to include it in your project.
    <div className="bg-gray-200">
      <div className="min-h-screen flex flex-col justify-end">
        {/* This is an example of how to use the Footer component. */}
        {/* You would typically have your page content above the footer. */}
        <Footer />
      </div>
    </div>
  );
}
