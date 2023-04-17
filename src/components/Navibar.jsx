import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logoutUser } from "../redux/auth/authSlice";
import {
  CButton,
  CCol,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarText,
  CNavItem,
} from "@coreui/react";

export const Navibar = () => {
  const dispatch = useDispatch();
  const isRegister = useSelector((state) => state.auth.isRegister);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logIn = (e) => {
    e.preventDefault();

    return <Navigate to="/login" />;
  };

  const logOut = (e) => {
    e.preventDefault();
    console.log("logout");

    dispatch(logoutUser(false));
  };

  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="dark"
        className="bg-primary"
        style={{ position: "fixed", width: "100%" }}
      >
        <CContainer fluid>
          <CNavbarBrand
            styles={{
              position: "fixed",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/images/logo-no-background.svg"
              alt="logo"
              width="156px"
              height="56px"
            />
          </CNavbarBrand>
          <CCol md={6}>
            <CNavbarNav style={{ justifyContent: "space-between" }}>
              <CNavItem>
                <CNavbarText>
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      // margin: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Home
                  </Link>
                </CNavbarText>
              </CNavItem>
              <CNavItem>
                <CNavbarText>
                  <Link
                    to="/history"
                    style={{
                      color: "white",
                      // margin: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    History
                  </Link>
                </CNavbarText>
              </CNavItem>
              <CNavItem>
                <CNavbarText>
                  <Link
                    to="/profile"
                    style={{
                      color: "white",
                      // margin: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Profile
                  </Link>
                </CNavbarText>
              </CNavItem>
              <CNavItem>
                <CNavbarText>
                  <Link
                    to="/settings"
                    style={{
                      color: "white",
                      // margin: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Settings
                  </Link>
                </CNavbarText>
              </CNavItem>
            </CNavbarNav>
          </CCol>

          <div className=" d-grid gap-2 d-md-flex justify-content-md-end ">
            <CButton
              color="light"
              variant="outline"
              className=" me-md-2 "
              onClick={isLoggedIn ? logOut : logIn}
            >
              <Link
                to={isRegister && isLoggedIn ? "/" : "/login"}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {isRegister && isLoggedIn ? "Log Out" : "Log In"}
              </Link>
            </CButton>

            <CButton color="light" variant="outline" disabled={isRegister}>
              <Link
                to="/register"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Link>
            </CButton>
          </div>
        </CContainer>
      </CNavbar>
    </>
  );
};
