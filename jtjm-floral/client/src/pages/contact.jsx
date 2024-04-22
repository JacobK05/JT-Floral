
import React, { useState } from "react";
import axios from "axios";
import Head from '../component/header';
import Footer from '../component/footer';

const Home = () => {
        const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/submit-form", formData);
    setMessage(response.data); 
    setFormData({
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  } catch (error) {
    console.error("Error:", error);
    setMessage("Failed to send message.");
  }
};
  return (
    <div>
      <div
        className="content"
        style={{
          width: "100%",
          fontFamily: "Spectral",
          fontSize: "21.1408px",
          font: "21.1408px / 31.7112px Spectral",
          letterSpacing: "-0.422816px",
          lineHeight: "31.7112px",
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <div
            className="fluid-engine fe-65e13988df702e694edf0ad1"
            style={{
              gridArea: "1 / 1 / -1 / -1",
              gap: "11px",
              display: "grid",
              position: "relative",
              gridTemplateRows:
                "repeat(10, minmax(calc(min(1400px, calc(100vw - 2vw * 2 - 0vw)) * 0.0215), auto))",
              gridTemplateColumns:
                "minmax(calc(2vw - 11px), 1fr) repeat(24, minmax(0, calc((1400px - (11px * (24 - 1))) / 24))) minmax(calc(2vw - 11px), 1fr)",
            }}
          >
            <div
              className="fe-block fe-block-49106d1ff42c8ffce0ab"
              style={{
                gridArea: "1 / 2 / 8 / 12",
                zIndex: 0,
                mixBlendMode: "normal",
              }}
            >
              <div
                id="block-49106d1ff42c8ffce0ab"
                className="sqs-block html-block sqs-block-html"
                style={{
                  position: "relative",
                  clear: "none",
                  borderColor: "hsla(9.52, 36%, 65.69%, 1)",
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  flexDirection: "column",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  justifyContent: "flex-start",
                }}
              >
                <div className="sqs-block-content" style={{ outline: "none" }}>
                  <div
                    className="sqs-html-content"
                    style={{
                      outline: "none",
                      overflowWrap: "break-word",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <h2
                      className="preFade fadeIn"
                      style={{
                        margin: "2rem 0px",
                        fontFamily: "fino",
                        fontStyle: "normal",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textTransform: "uppercase",
                        lineHeight:
                          "calc(\n    1.2em *\n      (1 + (1 - 5) / 25)\n  )",
                        fontSize: "calc((5 - 1) * 0.9vw + 0.5rem)",
                        color: "hsla(0, 0%, 0%, 1)",
                        transitionProperty: "opacity",
                        marginTop: "0px",
                        whiteSpace: "pre-wrap",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1.5s",
                        transitionDelay: "0.44s",
                        opacity: 1,
                      }}
                    >
                      {"Contact Us"}
                    </h2>
                    <p
                      className="sqsrte-large preFade fadeIn"
                      style={{
                        margin: "1rem 0px",
                        lineHeight: "1.5em",
                        fontSize: "calc((1.5 - 1) * 1.2vw + 1rem)",
                        color: "hsla(0, 0%, 0%, 1)",
                        transitionProperty: "opacity",
                        overflowWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1.5s",
                        transitionDelay: "0.46s",
                        opacity: 1,
                      }}
                    >
                      {"Let us have a chance to know your needs."}
                    </p>
                    <p
                      className="preFade fadeIn"
                      style={{
                        margin: "1rem 0px",
                        lineHeight: "1.5em",
                        transitionProperty: "opacity",
                        overflowWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1.5s",
                        transitionDelay: "0.48s",
                        opacity: 1,
                      }}
                    >
                      {"Our team will contact you back within 24 hour."}
                    </p>
                    <p
                      className="preFade fadeIn"
                      style={{
                        margin: "1rem 0px",
                        lineHeight: "1.5em",
                        transitionProperty: "opacity",
                        overflowWrap: "break-word",
                        marginBottom: "0px",
                        whiteSpace: "pre-wrap",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1.5s",
                        transitionDelay: "0.5s",
                        opacity: 1,
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div
              className="fe-block fe-block-71a7c274f05db4fb80e9"
              style={{
                gridArea: "1 / 14 / 11 / 26",
                zIndex: 2,
                mixBlendMode: "normal",
              }}
            >
              <div
                id="block-71a7c274f05db4fb80e9"
                className="sqs-block form-block sqs-block-form"
                style={{
                  position: "relative",
                  borderColor: "hsla(9.52, 36%, 65.69%, 1)",
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  flexDirection: "column",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  justifyContent: "flex-start",
                  clear: "both",
                }}
                          >
                              
                              
                <div
                  className="sqs-block-content"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div
                    id="form-submission-html-65e13988df702e694edf0acd"
                    className="sqs-form-block-submission-html"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  />
                  <div
                    className="form-wrapper"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      display: "grid",
                      gridTemplateAreas: '"form"',
                    }}
                  >
                                           <div className="sqs-block-content" style={{ WebkitTapHighlightColor: "transparent" }}>
                  <div className="form-wrapper" style={{ WebkitTapHighlightColor: "transparent", display: "grid", gridTemplateAreas: '"form"' }}>
                    <form onSubmit={handleSubmit}>
                      
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email (required)</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message (required)</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                      </div>
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
                                  </div>
                                  <style jsx>{`
        .contact-form {
          border: 1px solid #ddd;
          padding: 20px;
          width: 400px; /* Adjust as needed */
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          resize: vertical; /* Allow textarea resizing */
        }

        textarea {
          height: 100px; /* Adjust as needed */
        }

        button[type="submit"] {
          background-color: #C79288;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button[type="submit"]:hover {
          background-color: #45a049;
        }
      `}</style>
                              </div>
                              

              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 16px;
}

body {
  margin: 0px;
  font-size: 16px;
  overflow-wrap: break-word;
  background-color: hsla(0, 0%, 100%, 1);
  color: hsla(0, 0%, 0%, 1);
}
`,
        }}
      />
    </div>
  );
};

export default Home;
