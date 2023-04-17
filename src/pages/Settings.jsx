import { CContainer } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Settings = () => {
  return (
    <CContainer fluid>
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/settings/donate" style={{ textDecoration: "none" }}>
          DonateInfo
        </Link>

        <Link to="/settings/subscriptions" style={{ textDecoration: "none" }}>
          SubscriptionsInfo
        </Link>

        <Link to="/settings/tracking" style={{ textDecoration: "none" }}>
          TrackingInfo
        </Link>
      </div>
    </CContainer>
  );
};
