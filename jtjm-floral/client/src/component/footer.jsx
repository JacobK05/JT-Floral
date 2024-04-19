import React from "react";
import logoFooter from '../asset/logo_footer.png'

export default function Footer() {
  return (
    <>
      <footer
        id="footer-sections"
        className="sections"
        style={{
          display: "block",
          opacity: 1,
          marginTop: "auto",
          position: "relative",
          zIndex: 0,
        }}
      >
        <section
          id="yui_3_17_2_1_1712256086021_101"
          className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle"
          style={{
            position: "relative",
            display: "flex",
            boxSizing: "border-box",
            color: "hsla(0, 0%, 0%, 1)",
            alignItems: "center",
          }}
        >
          <div
            id="yui_3_17_2_1_1712256086021_100"
            className="content-wrapper"
            style={{
              margin: "0px auto",
              width: "100%",
              boxSizing: "content-box",
              position: "relative",
              display: "flex",
              maxWidth: "100%",
              justifyContent: "flex-end", 
              opacity: 1,
              paddingTop: "calc(0vmax)",
              paddingBottom: "calc(0vmax)",
            }}
          >
            <div
              id="yui_3_17_2_1_1712256086021_99"
              className="content"
              style={{ width: "100%" }}
            >
              <div
                id="yui_3_17_2_1_1712256086021_98"
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <div
                  id="yui_3_17_2_1_1712256086021_97"
                  className="fluid-engine fe-65e129e1db69cc4ab4d1e328"
                  style={{
                    gridArea: "1 / 1 / -1 / -1",
                    gap: "0px",
                    display: "grid",
                    position: "relative",
                    gridTemplateRows:
                      "repeat(7, minmax(calc(min(1400px, calc(100vw - 2vw * 2 - 0vw)) * 0.0215), auto))",
                    gridTemplateColumns:
                      "minmax(calc(2vw - 0px), 1fr) repeat(24, minmax(0, calc((1400px - (0px * (24 - 1))) / 24))) minmax(calc(2vw - 0px), 1fr)",
                  }}
                >
                  <div
                    id="yui_3_17_2_1_1712256086021_96"
                    className="fe-block fe-block-yui_3_17_2_1_1709265251386_7186"
                    style={{ gridArea: "1 / 2 / 8 / 8", zIndex: 2 }}
                  >
                    <div
                      id="block-yui_3_17_2_1_1709265251386_7186"
                      className="sqs-block image-block sqs-block-image sqs-stretched sqs-text-ready"
                      style={{
                        position: "relative",
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        flexDirection: "column",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        justifyContent: "center",
                        alignItems: "center", 
                        clear: "both",
                      }}
                    >
                      <div
                        id="yui_3_17_2_1_1712256086021_95"
                        className="sqs-block-content preFade fadeIn"
                        style={{
                          transitionProperty: "opacity",
                          height: "100%",
                          width: "100%",
                          transitionTimingFunction: "ease",
                          transitionDuration: "1.5s",
                          transitionDelay: "0.5s",
                          opacity: 1,
                        }}
                      >
                        <div
                          id="yui_3_17_2_1_1712256086021_94"
                          className="image-block-outer-wrapper layout-caption-below design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default sqs-narrow-width animation-loaded"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translateZ(0px)",
                          }}
                        >
                          <div
                            id="yui_3_17_2_1_1712256086021_93"
                            className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper preFade fadeIn"
                            style={{
                              minHeight: "1px",
                              transitionProperty: "opacity",
                              alignItems: "center",
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1.5s",
                              transitionDelay: "0.525s",
                              opacity: 1,
                            }}
                          >
                            <div
                              id="yui_3_17_2_1_1712256086021_92"
                              className="fluid-image-container sqs-image-content"
                              style={{
                                overflow: "hidden",
                                maskImage:
                                  "-webkit-radial-gradient(center center, white, black)",
                                position: "relative",
                                width: "100%",
                                height: "139.821px",
                              }}
                            >
                              <div
                                id="yui_3_17_2_1_1712256086021_91"
                                className="content-fit"
                              >
                                <img
                                  height={140}
                                  width={350}
                                  sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 25vw"
                                  src={logoFooter}
                                  style={{
                                    border: "0px",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    display: "block",
                                    objectFit: "contain",
                                    objectPosition: "66.0793% 53.9666%",
                                  }}
                                />
                                <div
                                  className="fluidImageOverlay"
                                  style={{
                                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    mixBlendMode: "normal",
                                    opacity: 0,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
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
    </>
  );
}
