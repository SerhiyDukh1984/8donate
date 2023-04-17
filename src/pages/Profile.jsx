import {
  CContainer
} from "@coreui/react";
import React from "react";
import {UserDetails} from "../components/UserDetails";

export const Profile = () => {
  return (
    <>
      <CContainer fluid style={{ paddingTop: "110px", paddingBottom: "60px" }}>
        <UserDetails />
      </CContainer>
    </>
  );
};
