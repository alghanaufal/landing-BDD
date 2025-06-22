import React from "react";

export default function StatisticSection() {
  const stats = [
    {
      value: "800+",
      label: "Clients Growing",
      bgColorClass: "bg-blue-600", 
    },
    {
      value: "140+",
      label: "Teams of Professional",
      bgColorClass: "bg-orange-400", 
    },
    {
      value: "50+",
      label: "Meta & Google Certified Professional",
      bgColorClass: "bg-purple-600", 
    },
    {
      value: "400 Mio+",
      label: "Online Engagement Performance",
      bgColorClass: "bg-teal-400", 
    },
    {
      value: "USD 15 Mio+",
      label: "Advertising Spend",
      bgColorClass: "bg-red-500", 
    },
    {
      value: "+ And Many More",
      label: "", 
      isMoreCard: true, 
    },
  ];

  return (
    <div className="section-statistik">
      <div className="statistik-header">
        <div className="statistik-subtitle">
          <p className="subtitle">WE ON NUMBERS</p>
        </div>
        <div className="statistik-title">
          <h2 className="title">
            We Establish an Ecosystem to Enhance Brand Growth.
          </h2>
        </div>
        <div className="statistik-description">
          <p className="description">
            Beyond conventional marketing norms, we craft innovative strategies
            infused with data-driven insights to create comprehensive campaigns
            that resonate with target audiences for 800+ clients.
          </p>
        </div>
      </div>

      <div className="statistik-body">
        <div className="statistik-list">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`statistik-card ${
                stat.isMoreCard ? "statistik-card-more" : ""
              } ${
                [0, 3, 4].includes(index)
                  ? "statistik-card-large"
                  : "statistik-card-small"
              }`}
            >
              <div className="statistik-card-text">
                <div className="statistik-card-title">
                  <p className="title">{stat.value}</p>
                </div>
                <div className="statistik-card-description">
                  <p className="description">{stat.label}</p>
                </div>
              </div>
              {!stat.isMoreCard && (
                <div
                  className={`statistik-card-color ${stat.bgColorClass}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
