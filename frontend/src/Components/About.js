// import React from "react";

// const About = () => {
//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "50px auto",
//         padding: "40px",
//         background: "#f9f9f9",
//         boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
//         borderRadius: "12px",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//         lineHeight: "1.7",
//       }}
//     >
//       <h1
//         style={{
//           color: "#0056b3",
//           fontSize: "36px",
//           marginBottom: "15px",
//         }}
//       >
//         About Expense Tracker
//       </h1>

//       <h2
//         style={{
//           color: "#333",
//           fontSize: "28px",
//           fontWeight: "500",
//           marginBottom: "20px",
//         }}
//       >
//         Saving for the Future
//       </h2>

//       <p
//         style={{
//           color: "#444",
//           fontSize: "18px",
//           marginBottom: "15px",
//           textAlign: "justify",
//         }}
//       >
//         An expense tracker is a tool designed to help individuals and organizations monitor
//         their spending habits. It allows users to record and categorize their expenses and incomes, 
//         providing a clear overview of their financial situation.
//       </p>

//       <p
//         style={{
//           color: "#555",
//           fontSize: "18px",
//           marginBottom: "15px",
//           textAlign: "justify",
//         }}
//       >
//         With a focus on innovation, hands-on learning, and personalized mentorship,
//         our expense tracker is prepared to manage your finances.
//       </p>

//       <p
//         style={{
//           color: "#666",
//           fontSize: "18px",
//           textAlign: "justify",
//         }}
//       >
//         By tracking expenses, users can identify areas where they can cut costs, set budgets, and make 
//         informed financial decisions, ultimately promoting better financial health and management.
//       </p>
//     </div>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        padding: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
          background: "#fff",
          padding: "60px",
          borderRadius: "12px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "#003f80",
            marginBottom: "20px",
          }}
        >
          About Expense Tracker
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#444",
            marginBottom: "30px",
          }}
        >
          Saving for the Future
        </h2>

        <p style={paragraphStyle}>
          An expense tracker is a tool designed to help individuals and organizations monitor
          their spending habits. It allows users to record and categorize their expenses and incomes, 
          providing a clear overview of their financial situation.
        </p>

        <p style={paragraphStyle}>
          With a focus on innovation, hands-on learning, and personalized mentorship,
          our expense tracker is prepared to manage your finances efficiently.
        </p>

        <p style={paragraphStyle}>
          By tracking expenses, users can identify areas where they can cut costs, set budgets, 
          and make informed financial decisions, ultimately promoting better financial health and management.
        </p>
      </div>
    </div>
  );
};

// Reusable Styles
const paragraphStyle = {
  fontSize: "22px",
  color: "#555",
  lineHeight: "1.6",
  fontWeight: "500",
  marginBottom: "20px",
};

export default About;

