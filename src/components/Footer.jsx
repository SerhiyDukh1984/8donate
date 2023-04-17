import { CContainer, CFooter, CLink } from "@coreui/react";
import React from "react";

export const Footer = () => {
  return (
    <CFooter
      style={{
        display: "flex",
        // justifyItems: "auto",
        position: "fixed",
        bottom: "0",
         width: "100%"
      }}
    >
      <CContainer
        fluid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100vw",
          height: "40px",
          backgroundColor: "#0d6efd",
        }}
      >
        <div>
          <CLink
            href="https://coreui.io"
            target="_blank" rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#ffffff"
            }}
          >
            8donate  
          </CLink>
          <span> &copy; 2023 creativeLabs.</span>
        </div>
        <div>
          <span>Powered by </span>
          <CLink
            href="https://coreui.io"
            target="_blank" rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#ffffff"
            }}
          >
            8donate
          </CLink>
        </div>
      </CContainer>
    </CFooter>
  );
};
