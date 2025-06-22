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
  // It uses the input's 'name' attribute to update the correct piece of state.
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
    <>
      {/* The original CSS is injected here for identical styling */}
      <style>{`
                .elementor-element-e031aea > .elementor-widget-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                .section-know-more {
                    background-color: #FFFFFF;
                    border: 2px solid #222222;
                    border-radius: 24px;
                    margin: 0 auto;
                    max-width:1340px;
                    width:100%;
                    font-family: sans-serif; /* Added for better preview */
                }
                .knowmore-inner {
                    max-width: 1140px;
                    margin: 70px auto 60px;
                    display: flex;
                    gap: 30px;
                }
                .knowmore-image {
                    position: relative;
                    flex: 1 0 0;
                    margin-top: 30px;
                }
                .knowmore-image img {
                    width: 100%;
                    height: auto;
                }
                .knowmore-text {
                    flex: 1 0 0;
                }
                .knowmore-title {
                    margin-bottom: 15px;
                }
                .knowmore-title .title {
                    color: #222222;
                    font-size: 36px;
                    font-weight: 400;
                    line-height: normal;
                    margin: 0;
                }
                .knowmore-description {
                    margin-bottom: 30px;
                }
                .knowmore-description .description {
                    color: #222222;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: normal;
                    margin: 0;
                }
                .knowmore-form .form-group {
                    margin-bottom: 15px;
                }
                .knowmore-form .form-group:last-child {
                    margin-bottom: 0;
                }
                .knowmore-form label {
                    display: block;
                    color: #222222;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: normal;
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                .knowmore-form .form-control,
                .knowmore-form .form-select {
                    width: 100%;
                    box-sizing: border-box; /* Ensures padding doesn't affect width */
                    color: #222;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: normal;
                    margin: 0;
                    padding: 15px;
                    border-radius: 8px;
                    border: 1px solid #BABABA;
                }
                .knowmore-form-btn {
                    margin: 25px 20px 0 0;
                    text-align: right;   
                }
                .knowmore-form-btn .btn {
                    font-size: 18px;
                    box-shadow:none;
                    background-color: #f0c14b; /* Example color, as it's not in the CSS */
                    border: 1px solid #a88734;
                    padding: 10px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    color: #111;
                    transition: all 0.2s ease;
                }
                .knowmore-form-btn .btn:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
                .knowmore-form-btn .btn:hover:not(:disabled){
                    background-color:#E8A145;
                    box-shadow: 4px 4px 0px 0px #222;
                    color:#000;
                    -webkit-box-shadow: 4px 4px 0px 0px #222;
                }
                .knowmore-form-btn .btn svg {
                    margin-left: 15px;
                    width: 20px;
                }
                @media (min-width: 768px) and (max-width: 1367px) {
                    .knowmore-inner {
                        margin-right: 30px;
                        margin-left: 30px;
                    }
                }
                @media (max-width: 750px) {
                    .section-know-more {
                        border-width: 2px 0 0;
                        border-radius: 0;
                        margin-top: 0;
                        margin-bottom: 0;
                        padding: 0 15px;
                    }
                    .knowmore-inner {
                        flex-direction: column;
                        max-width: none;
                        margin: 50px auto 0;
                        padding-bottom: 50px;
                        gap: 0;
                    }
                    .knowmore-image {
                        display: none;
                    }
                    .knowmore-title {
                        margin-bottom: 10px;
                    }
                    .knowmore-title .title {
                        font-size: 24px;
                        line-height: 28px;
                        text-align: center;
                    }
                    .knowmore-description .description {
                        font-size: 14px;
                        text-align: center;
                    }
                    .knowmore-form-btn {
                        margin: 30px 0 0 0;
                        text-align: center;
                    }
                }
            `}</style>

      <div className="section-know-more">
        <div className="knowmore-inner">
          <div className="knowmore-image">
            <img
              decoding="async"
              src="https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40387-4.png"
              alt="Want to know more?"
            />
          </div>
          <div className="knowmore-text">
            <div className="knowmore-title">
              <h4 className="title">Want to know more?</h4>
            </div>
            <div className="knowmore-description">
              <p className="description">
                Fill out this form below &amp; consult with us!
              </p>
            </div>
            <div className="knowmore-form">
              <form onSubmit={handleSubmit} id="form_send_email">
                <div className="form-group">
                  <label htmlFor="first_name">Your Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand_name">Brand Name</label>
                  <input
                    type="text"
                    id="brand_name"
                    name="brand_name"
                    value={formData.brand_name}
                    onChange={handleChange}
                    placeholder="Brand Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wa_number">WhatsApp Number</label>
                  <input
                    type="text"
                    id="wa_number"
                    name="wa_number"
                    value={formData.wa_number}
                    onChange={handleChange}
                    placeholder="WhatsApp Number"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select
                    name="industry"
                    id="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="form-select"
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
                <div className="form-group">
                  <label htmlFor="services">Services</label>
                  <select
                    name="services"
                    id="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Any services you're interested in?</option>
                    <option value="Digital Advertising">
                      Digital Advertising
                    </option>
                    <option value="Creative Content &amp; Liveshopping">
                      Creative Content &amp; Liveshopping
                    </option>
                    <option value="Website Development &amp; Maintenance">
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
                <div className="form-group">
                  <div className="knowmore-form-btn">
                    <button
                      id="send_email"
                      type="submit"
                      className="btn btn-branding-secondary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Consult Now"}
                      {!isLoading && (
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  {resultMessage.text && (
                    <div
                      style={{
                        marginTop: "20px",
                        fontSize: "16px",
                        textAlign: "center",
                        color:
                          resultMessage.type === "error" ? "#ff0303" : "green",
                      }}
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
    </>
  );
};

export default App;
