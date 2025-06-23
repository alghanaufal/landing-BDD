import React, { useState } from "react";

// The main App component that renders our form
const App = () => {
  // State to hold the values of the form fields
  const [formData, setFormData] = useState({
    first_name: "",
    brand_name: "",
    wa_number: "",
    industry: "",
    services: "",
  });

  // State to manage the loading status during form submission
  const [isLoading, setIsLoading] = useState(false);

  // State to hold the success or error message after submission
  const [resultMessage, setResultMessage] = useState({ type: "", text: "" });

  // This function handles changes in any of the form inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This function handles the form submission.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser form submission
    setIsLoading(true); // Show a loading indicator
    setResultMessage({ type: "", text: "" }); // Clear any previous messages

    // Construct the data payload for the API endpoint
    const formPayload = new URLSearchParams();
    formPayload.append("action", "my_form_knowmore_action");
    formPayload.append("page_submit", "homepage");
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }

    try {
      // Use the native fetch API to send the data
      const response = await fetch(
        "https://bolehdicoba.com/wp-admin/admin-ajax.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formPayload.toString(),
        }
      );

      // The endpoint appears to return text, so we parse it as text, then JSON
      const responseText = await response.text();
      const res = JSON.parse(responseText);

      if (res.code) {
        // Handle success
        setResultMessage({ type: "success", text: res.msg });
        // Reset the form fields after successful submission
        setFormData({
          first_name: "",
          brand_name: "",
          wa_number: "",
          industry: "",
          services: "",
        });
      } else {
        // Handle server-side errors
        setResultMessage({
          type: "error",
          text: res.msg || "An unknown error occurred.",
        });
      }
    } catch (error) {
      // Handle network or parsing errors
      console.error("Submission Error:", error);
      setResultMessage({
        type: "error",
        text: "An error occurred while submitting the form.",
      });
    } finally {
      // This block runs regardless of success or failure
      setIsLoading(false); // Hide the loading indicator

      // Set a timer to clear the result message after 3 seconds
      setTimeout(() => {
        setResultMessage({ type: "", text: "" });
      }, 3000);
    }
  };

  return (
    // Main container with new background and padding
    <div className="font-sans flex items-center justify-center min-h-screen p-4">
      {/* Card container */}
      <div className="bg-white w-full max-w-6xl mx-auto rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Want to know more?
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                Fill out this form below & consult with us!
              </p>
            </div>

            {/* Form container */}
            <form
              onSubmit={handleSubmit}
              id="form_send_email"
              className="space-y-5"
            >
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
                  value={formData.first_name}
                  onChange={handleChange}
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
                  value={formData.brand_name}
                  onChange={handleChange}
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
                  value={formData.wa_number}
                  onChange={handleChange}
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
                  value={formData.industry}
                  onChange={handleChange}
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
                  value={formData.services}
                  onChange={handleChange}
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
                  className="inline-flex items-center text-white font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 shadow-md hover:shadow-lg py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Consult Now"}
                  {!isLoading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Form Group: Result Message */}
              <div>
                {resultMessage.text && (
                  <div
                    className={`mt-4 text-base text-center font-semibold ${
                      resultMessage.type === "error"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {resultMessage.text}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
