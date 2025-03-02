import React from "react";
import { useForm } from "@formspree/react";

const ConsultExpert = () => {
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
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          padding: "40px",
          background: "#fff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#0056b3",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          Consult an Expert
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Get expert advice tailored to your needs. Fill out the form below, and we’ll connect you
          with a specialist.
        </p>

        {state.succeeded ? (
          <p
            style={{
              fontSize: "20px",
              color: "green",
              fontWeight: "bold",
            }}
          >
            Your request has been submitted successfully!
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
              placeholder="Describe your consultation needs..."
              required
              style={{ ...inputStyle, resize: "vertical" }}
            ></textarea>

            <button type="submit" style={buttonStyle}>
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Reusable Inline Styles
const labelStyle = {
  display: "block",
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  border: "2px solid #ddd",
  borderRadius: "8px",
  marginBottom: "20px",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
  background: "#0056b3",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background 0.3s",
};

buttonStyle[":hover"] = {
  background: "#003f80",
};

export default ConsultExpert;
