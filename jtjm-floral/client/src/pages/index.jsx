import React from 'react';

const Home = () => {
  return (
    <div>
     
      <div
        className="content-wrapper"
        style={{
          margin: "0px auto",
          width: "100%",
          boxSizing: "content-box",
          position: "relative",
          display: "flex",
          maxWidth: "100%",
          justifyContent: "center",
          opacity: 1,
          paddingTop: "6.6vmax",
          paddingBottom: "6.6vmax",
        }}
      >
        <div className="content" style={{ width: "100%" }}>
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <div
              className="fluid-engine fe-65e1282962468c06858239c7"
              style={{
                gridArea: "1 / 1 / -1 / -1",
                gap: "11px",
                display: "grid",
                position: "relative",
                gridTemplateRows:
                  "repeat(7, minmax(calc(min(1400px, calc(100vw - 2vw * 2 - 0vw)) * 0.0215), auto))",
                gridTemplateColumns:
                  "minmax(calc(2vw - 11px), 1fr) repeat(24, minmax(0, calc((1400px - (11px * (24 - 1))) / 24))) minmax(calc(2vw - 11px), 1fr)",
              }}
            >
              <div
                className="fe-block fe-block-7ea65507bb7fb0dfbc9e"
                style={{
                  gridArea: "1 / 2 / 4 / 26",
                  zIndex: 0,
                  mixBlendMode: "normal",
                }}
              >
                <div
                  id="block-7ea65507bb7fb0dfbc9e"
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
                  <div
                    className="sqs-block-content"
                    style={{ outline: "none" }}
                  >
                    <div
                      className="sqs-html-content"
                      style={{
                        outline: "none",
                        overflowWrap: "break-word",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h1
                        className="preFade fadeIn"
                        style={{
                          margin: "2rem 0px",
                          fontFamily: "fino",
                          fontStyle: "normal",
                          fontWeight: 400,
                          letterSpacing: "0em",
                          textTransform: "uppercase",
                          lineHeight:
                            "calc(\n    1.2em *\n      (1 + (1 - 7) / 25)\n  )",
                          fontSize: "calc(5 * 1rem)",
                          color: "hsla(0, 0%, 0%, 1)",
                          transitionProperty: "opacity",
                          marginTop: "0px",
                          marginBottom: "0px",
                          whiteSpace: "pre-wrap",
                          textAlign: "center",
                          transitionTimingFunction: "ease",
                          transitionDuration: "1.5s",
                          transitionDelay: "0.475s",
                          opacity: 1,
                        }}
                      >
                        <span
                          className="sqsrte-text-color--accent"
                          style={{
                            textDecoration: "inherit",
                            color: "hsl(9.52, 36%, 65.69%)",
                            overflowWrap: "break-word",
                          }}
                        >{`Welcome to JTJM Floral`}</span>
                      </h1>
                      <p
                        className="tagline"
                        style={{
                          fontSize: "32px",
                          textAlign: "center",
                          margin: "0",
                          color: "hsl(9.52, 36%, 65.69%)",
                        }}
                      >
                        Where you dream wedding begins
                      </p>
                    </div>
                  </div>
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
}

export default Home;
