// import React from "react";
// import { useForm } from "@formspree/react";
// import msgIcon from "../../assets/msg-icon.png";
// import mailIcon from "../../assets/mail-icon.png";
// import phoneIcon from "../../assets/phone-icon.png";
// import locationIcon from "../../assets/location-icon.png";
// import whiteArrow from "../../assets/white-arrow.png";
// import "../contact/contact.css";

// const Contact = () => {
//   const [state, handleSubmit] = useForm("xoqgrkgn");

//   return (
//     <div className="contact-container">
//       <div className="contact-grid">
//         {/* Contact Information */}
//         <div className="contact-info">
//           <h3>
//             Send us a message <img src={msgIcon} alt="message icon" />
//           </h3>
//           <p>
//             Feel free to reach out through the contact form or find our contact details below. Your feedback, 
//             questions, and suggestions are important to us as we strive to provide exceptional service.
//           </p>
//           <ul>
//             <li>
//               <img src={mailIcon} alt="mail icon" />
//               alameensnr@gmail.com
//             </li>
//             <li>
//               <img src={phoneIcon} alt="phone icon" />
//               +2348136899907
//             </li>
//             <li>
//               <img src={locationIcon} alt="location icon" />
//               Abuja, Nigeria
//             </li>
//           </ul>
//         </div>

//         {/* Contact Form */}
//         <div className="contact-form">
//           {state.succeeded ? (
//             <p className="success-message">Form Submitted Successfully!</p>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <label>Your Name</label>
//               <input type="text" name="name" placeholder="Enter your name" required />

//               <label>Phone Number</label>
//               <input type="tel" name="phone" placeholder="Enter your mobile" required />

//               <label>Write your message</label>
//               <textarea name="message" rows="5" placeholder="Enter your message" required />

//               <button type="submit" className="submit-btn">
//                 Submit Now <img src={whiteArrow} alt="arrow icon" />
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqgrkgn");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "50px",
          background: "#fff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "#003f80",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          We're here to help! Fill out the form below, and we’ll get back to you.
        </p>

        {state.succeeded ? (
          <p style={{ fontSize: "22px", color: "green", fontWeight: "bold" }}>
            Your message has been sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <label style={labelStyle}>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required style={inputStyle} />

            <label style={labelStyle}>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required style={inputStyle} />

            <label style={labelStyle}>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required style={inputStyle} />

            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
              style={{ ...inputStyle, resize: "vertical" }}
            ></textarea>

            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

// Reusable Inline Styles
const labelStyle = {
  display: "block",
  fontSize: "20px",
  fontWeight: "700",
  color: "#333",
  marginBottom: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  border: "2px solid #ddd",
  borderRadius: "8px",
  marginBottom: "20px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
  background: "#003f80",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

buttonStyle[":hover"] = {
  background: "#002b5e",
};

export default Contact;

