import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FormSection() {
  return (
    // Main container with new background and padding
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* Card container */}
      <div className="bg-white w-full max-w-6xl mx-auto rounded-3xl border-4 border-black p-8 md:p-12">
        {/* Inner container for two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side image column */}
          <div className="hidden lg:block">
            <img
              src="./form.png"
              alt="Modern UI Illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right side text and form column */}
          <div className="flex-1">
            <div className="mb-3">
              <h2 className="text-4xl md:text-5xl font-small text-gray-800">
                Want to know more?
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                Fill out this form below & consult with us!
              </p>
            </div>

            {/* Form container */}
            <form id="form_send_email" className="space-y-5">
              {/* Form Group: Your Name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Your Name"
                  className="w-full text-gray-800 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              {/* Form Group: Brand Name */}
              <div>
                <label
                  htmlFor="brand_name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brand_name"
                  name="brand_name"
                  placeholder="Brand Name"
                  className="w-full text-gray-800 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              {/* Form Group: WhatsApp Number */}
              <div>
                <label
                  htmlFor="wa_number"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="wa_number"
                  name="wa_number"
                  placeholder="WhatsApp Number"
                  className="w-full text-gray-800 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              {/* Form Group: Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Industry
                </label>
                <select
                  name="industry"
                  id="industry"
                  className="w-full text-gray-800 p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
                  required
                >
                  <option value="">Select Options</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home and Living">Home and Living</option>
                  <option value="FMCG">FMCG</option>
                  <option value="FnB">FnB</option>
                  <option value="Moms and Baby">Moms and Baby</option>
                  <option value="Accesories">Accesories</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Services">Services</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Form Group: Services */}
              <div>
                <label
                  htmlFor="services"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Services
                </label>
                <select
                  name="services"
                  id="services"
                  className="w-full text-gray-800 p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
                  required
                >
                  <option value="">Any services you're interested in?</option>
                  <option value="Digital Advertising">
                    Digital Advertising
                  </option>
                  <option value="Creative Content & Liveshopping">
                    Creative Content &amp; Liveshopping
                  </option>
                  <option value="Website Development & Maintenance">
                    Website Development &amp; Maintenance
                  </option>
                  <option value="Search Engine Optimization">
                    Search Engine Optimization
                  </option>
                  <option value="Growth-Hack Consultation">
                    Growth-Hack Consultation
                  </option>
                  <option value="Digital Marketing Training">
                    Digital Marketing Training
                  </option>
                </select>
              </div>

              {/* Form Group: Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  id="send_email"
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
                >
                  Consult Now
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
