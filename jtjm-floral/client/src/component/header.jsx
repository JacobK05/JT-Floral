import React from "react";
import logo from '../asset/logo.png'
export default function component(){ 
  return (
    <>
    
      <div
        className="header-display-desktop"
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          justifyContent: "flex-start",
          alignItems: "center",
          font: "16px / 16px sans-serif",
          lineHeight: "16px",
        }}
      >
        <div
          className="header-burger menu-overlay-has-visible-non-navigation-items no-actions preFade"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transitionProperty: "opacity",
            transitionTimingFunction: "ease",
            transitionDuration: "1.5s",
            transitionDelay: "0s",
          }}
        >
          <button
            className="header-burger-btn burger"
            style={{
              margin: "0px",
              fontFamily: "inherit",
              fontSize: "100%",
              lineHeight: "normal",
              textTransform: "none",
              appearance: "button",
              border: "none",
              position: "relative",
              display: "inline-block",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="js-header-burger-open-title visually-hidden"
              style={{
                overflow: "hidden",
                clip: "rect(1px, 1px, 1px, 1px)",
                padding: "0px",
                border: "0px",
                position: "absolute",
                height: "1px",
                width: "1px",
              }}
            >
              Open Menu
            </span>
            <span
              className="js-header-burger-close-title visually-hidden"
              hidden
              style={{
                display: "none",
                overflow: "hidden",
                clip: "rect(1px, 1px, 1px, 1px)",
                padding: "0px",
                border: "0px",
                position: "absolute",
                height: "1px",
                width: "1px",
              }}
            >
              Close Menu
            </span>
            <div
              className="burger-box"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "35px",
                height: "35px",
              }}
            >
              <div
                className="burger-inner header-menu-icon-doubleLineHamburger"
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  className="top-bun"
                  style={{
                    margin: "auto",
                    transition:
                      "transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s, width 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s",
                    position: "absolute",
                    display: "block",
                    top: "0px",
                    left: "0px",
                    bottom: "0px",
                    content: '""',
                    width: "100%",
                    willChange: "transform, width",
                    transform: "translateY(-5.5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 1)",
                  }}
                />
                <div
                  className="patty"
                  style={{
                    margin: "auto",
                    transition:
                      "transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s, width 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s",
                    position: "absolute",
                    display: "block",
                    top: "0px",
                    left: "0px",
                    bottom: "0px",
                    content: '""',
                    width: "100%",
                    willChange: "transform, width",
                    transform: "scale(0)",
                    backgroundColor: "hsla(0, 0%, 0%, 1)",
                  }}
                />
                <div
                  className="bottom-bun"
                  style={{
                    margin: "auto",
                    transition:
                      "transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s, width 250ms cubic-bezier(0.2, 0.6, 0.3, 1) 0s",
                    position: "absolute",
                    display: "block",
                    top: "0px",
                    left: "0px",
                    bottom: "0px",
                    content: '""',
                    width: "100%",
                    willChange: "transform, width",
                    transform: "translateY(5.5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 1)",
                  }}
                />
              </div>
            </div>
          </button>
        </div>
        <div
          className="header-title-nav-wrapper"
          style={{
            flex: "1 0 67%",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
          }}
        >
          <div
            className="header-title preFade fadeIn"
            style={{
              backfaceVisibility: "hidden",
              transitionProperty: "opacity",
              flex: "1 1 33%",
              width: "33%",
              flexGrow: 1,
              flexShrink: 1,
              transitionTimingFunction: "ease",
              transitionDuration: "1.5s",
              transitionDelay: "0.025s",
              opacity: 1,
            }}
          >
            <div
              className="header-title-logo"
              style={{ width: "auto", fontSize: "0px" }}
            >
              <a
                className="preFade fadeIn"
                href="/"
                style={{
                  background: "0px 0px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  transitionProperty: "opacity",
                  display: "inline-block",
                  maxWidth: "100%",
                  maxHeight: "244px",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1.5s",
                  transitionDelay: "0.05s",
                  opacity: 1,
                }}
              >
                <img
                  alt="L&amp;T Floral"
                  src={logo}
                  style={{
                    border: "0px",
                    width: "auto",
                    maxWidth: "100%",
                    maxHeight: "244px",
                    display: "block",
                  }}
                />
              </a>
            </div>
          </div>
          <div
            className="header-nav"
            style={{
              flex: "1 1 34%",
              width: "34%",
              textAlign: "center",
              flexGrow: 1,
              flexShrink: 1,
            }}
          >
            <div className="header-nav-wrapper">
              <nav
                className="header-nav-list"
                style={{
                  display: "inline-flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  className="header-nav-item header-nav-item--collection"
                  style={{
                    fontFamily: "Spectral",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    fontSize: "calc(1.3 * 1rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "1.1vw",
                    marginRight: "1.1vw",
                  }}
                >
                  <a
                    className="preFade fadeIn"
                    href="/about"
                    style={{
                      background: "0px 0px",
                      cursor: "pointer",
                      transitionProperty: "opacity",
                      display: "block",
                      textDecoration: "none",
                      padding: "0.1em 0px",
                      backfaceVisibility: "hidden",
                      color: "hsla(0, 0%, 0%, 1)",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.075s",
                      opacity: 1,
                    }}
                  >
                    ABOUT
                  </a>
                </div>
                <div
                  className="header-nav-item header-nav-item--collection"
                  style={{
                    fontFamily: "Spectral",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    fontSize: "calc(1.3 * 1rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "1.1vw",
                    marginRight: "1.1vw",
                  }}
                >
                <a
                    className="preFade fadeIn"
                     href="/services" 
                    style={{
                      background: "0px 0px",
                      cursor: "pointer",
                      transitionProperty: "opacity",
                      display: "block",
                      textDecoration: "none",
                      padding: "0.1em 0px",
                      backfaceVisibility: "hidden",
                      color: "hsla(0, 0%, 0%, 1)",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.1s",
                      opacity: 1,
                    }}
                  > 
                    SERVICE
                  </a> 
                </div>
                <div
                  className="header-nav-item header-nav-item--collection"
                  style={{
                    fontFamily: "Spectral",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    fontSize: "calc(1.3 * 1rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "1.1vw",
                    marginRight: "1.1vw",
                  }}
                >
                  <a
                    className="preFade fadeIn"
                    href="/shop"
                    style={{
                      background: "0px 0px",
                      cursor: "pointer",
                      transitionProperty: "opacity",
                      display: "block",
                      textDecoration: "none",
                      padding: "0.1em 0px",
                      backfaceVisibility: "hidden",
                      color: "hsla(0, 0%, 0%, 1)",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.125s",
                      opacity: 1,
                    }}
                  >
                    SHOP
                  </a>
                </div>
                <div
                  className="header-nav-item header-nav-item--collection"
                  style={{
                    fontFamily: "Spectral",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    fontSize: "calc(1.3 * 1rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "1.1vw",
                    marginRight: "1.1vw",
                  }}
                >
                  <a
                    className="preFade fadeIn"
                    href="/wedding"
                    style={{
                      background: "0px 0px",
                      cursor: "pointer",
                      transitionProperty: "opacity",
                      display: "block",
                      textDecoration: "none",
                      padding: "0.1em 0px",
                      backfaceVisibility: "hidden",
                      color: "hsla(0, 0%, 0%, 1)",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.15s",
                      opacity: 1,
                    }}
                  >
                    WEDDING
                  </a>
                </div>
                <div
                  className="header-nav-item header-nav-item--collection"
                  style={{
                    fontFamily: "Spectral",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    fontSize: "calc(1.3 * 1rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "1.1vw",
                    marginRight: "1.1vw",
                  }}
                >
                  <a
                    className="preFade fadeIn"
                    href="/contact"
                    style={{
                      background: "0px 0px",
                      cursor: "pointer",
                      transitionProperty: "opacity",
                      display: "block",
                      textDecoration: "none",
                      padding: "0.1em 0px",
                      backfaceVisibility: "hidden",
                      color: "hsla(0, 0%, 0%, 1)",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1.5s",
                      transitionDelay: "0.175s",
                      opacity: 1,
                    }}
                  >
                    CONTACT
                  </a>
                </div>
              </nav>
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
      
    </>
  );
}
