import React from "react";

function Contact() {
  return (
    <>
      <div className="social">
        <div className="contact">
          Thank you for taking the time to view my portfolio, feel free to reach
          out to me.<br></br>
          <br></br>
          Chan Tuff<br></br>
          Columbus, Ohio <br></br>
          Email: chan.tuff@yahoo.com<br></br>
          Phone: (614)806-4433<br></br>
        </div>
        <img src="linkedin.png" style={{ width: 25, height: 30 }}></img>
        <a href="https://www.linkedin.com/in/chan-tuff/">LinkedIn</a>

        <img src="github.png" style={{ width: 25, height: 30 }}></img>
        <a href="https://github.com/chantuff">GitHub</a>
      </div>
    </>
  );
}

export default Contact;
