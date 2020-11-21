import React from "react";

import "../Styling/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Contact me:{" "}
        <a href="mailto: adham@adhamnasr.com">adham@adhamnasr.com</a>
      </p>
      <p style={{ fontSize: "11px" }}>Copyright&copy; 2020</p>
    </div>
  );
}

export default Footer;
