import React, { useState } from "react";

export default function OwnerSection() {
  const accordionItems = [
    {
      id: "why-1",
      image: "./o-1.png",
      title: "Comprehensive Digital Marketing Services",
      content:
        "We offer a full suite of digital marketing solutions, from SEO and SEM to social media and content marketing, ensuring all your needs are met under one roof.",
    },
    {
      id: "why-2",
      image: "./o-2.png",
      title: "Data-Driven Strategies for Optimal Results",
      content:
        "Our approach is rooted in deep data analysis, allowing us to craft highly effective campaigns that deliver measurable and significant ROI for our clients.",
    },
    {
      id: "why-3",
      image: "./o-3.png",
      title: "Experienced and Certified Professionals",
      content:
        "Our team comprises Meta & Google certified experts with years of experience, ensuring your brand is handled by the best in the industry.",
    },
  ];

  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionItem(activeAccordionItem === id ? null : id);
  };

  return (
    <>
      <style>
        {`
      .section-choose-us {
        /* max-width: 1100px; */
        max-width: 1140px;
        margin: 100px auto 139px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        overflow: hidden;
      }
      .choose-image {
        position: relative;
        flex: 0 0 auto;
        width: 510px;
      }
      .choose-subtitle {
        margin-bottom: 16px;
      }
      .choose-subtitle .subtitle {
        color: #513b6a;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        margin: 0;
      }
      .choose-title {
        margin-bottom: 20px;
      }
      .choose-title .title {
        color: #222;
        font-size: 44px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
      .choose-description {
        margin-bottom: 30px;
      }
      .choose-description .description p {
        color: #222;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        /* margin: 0; */
      }
      .choose-accordion .accordion-item {
        border: 0;
        border-radius: 0;
        background-color: transparent;
        border-left: 1px solid #d9d4cb;
        padding-bottom: 20px;
      }
      .choose-accordion .accordion-item:last-child {
        padding-bottom: 0;
      }
      .choose-accordion .accordion-item .accordion-header {
        margin: 0;
      }
      .choose-accordion .accordion-item.active .accordion-header {
        margin-left: -1px;
        border-left: 2px solid #33b8a5;
      }
      .choose-accordion .accordion-item.active .accordion-collapse {
        margin-left: -1px;
      }
      .choose-accordion .accordion-item .accordion-button {
        width: 100%;
        border-radius: 0;
        border: 0;
        color: #222;
        font-size: 20px;
        line-height: normal;
        padding: 0 20px;
        background-color: transparent;
        box-shadow: none;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .choose-accordion .accordion-item .accordion-button:not(.collapsed) {
        background-color: transparent;
      }
      .choose-accordion .accordion-item .accordion-button::after {
        display: none;
      }
      .choose-accordion .accordion-item .accordion-button:hover,
      .choose-accordion .accordion-item .accordion-button:focus {
        background-color: transparent;
      }
      .choose-accordion .accordion-item .accordion-body {
        margin: 0;
      }
      .choose-accordion .accordion-item.active .accordion-body {
        margin: 0;
        border-left: 2px solid #33b8a5;
      }
      .partner-sea .choose-accordion .accordion-item {
        border-color: white;
      }
      .partner-sea .choose-accordion .accordion-item.active .accordion-header,
      .partner-sea .choose-accordion .accordion-item.active .accordion-body {
        border-color: #222;
      }

      @media (max-width: 750px) {
        .section-choose-us {
          max-width: none;
          margin: 50px auto 70px;
          flex-direction: column;
          padding: 0 15px;
          gap: 30px;
        }
        .choose-image {
          width: 100%;
          order: 2;
        }
        .choose-text {
          order: 1;
        }
        .choose-subtitle .subtitle {
          /* font-size: 16px; */
          text-align: center;
          margin-bottom: 12px;
        }
        .choose-title .title {
          font-size: 24px;
          line-height: 28px;
          text-align: center;
        }
        .choose-description .description p {
          font-size: 14px;
          text-align: center;
        }
        .choose-accordion .accordion-item .accordion-button {
          padding: 0 10px;
        }
        .choose-accordion .accordion-item .accordion-body {
          padding-left: 70px;
        }
      }`}
      </style>
      <div className="section-choose-us mb-20">
        <div className="choose-image">
          <img
            src="./owner.png"
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="choose-text">
          <div className="choose-subtitle">
            <p className="subtitle">WHY CHOOSE US</p>
          </div>
          <div className="choose-title">
            <h2 className="title">
              Unlock Your Brand's Potential with Our Expertise.
            </h2>
          </div>
          <div className="choose-description">
            <p className="description">
              We are dedicated to helping businesses thrive in the digital
              landscape. Our commitment to innovation, transparency, and results
              sets us apart.
            </p>
          </div>

          <div className="choose-accordion">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className={`accordion-item ${
                  activeAccordionItem === item.id ? "active" : ""
                }`}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={
                      activeAccordionItem === item.id ? "true" : "false"
                    }
                    aria-controls={`collapse-${item.id}`}
                  >
                    <span className="accordion-icon">
                      <img
                        src={item.image}
                        alt={`Icon for ${item.title}`}
                        className="object-contain"
                      />
                    </span>
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`collapse-${item.id}`}
                  className={`accordion-collapse ${
                    activeAccordionItem === item.id ? "open" : "collapsed"
                  }`}
                  style={{
                    maxHeight: activeAccordionItem === item.id ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                  }}
                >
                  <div className="accordion-body">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
