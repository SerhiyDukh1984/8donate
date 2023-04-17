import { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/authSlice";
import { Navigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState(user);
  const [register, setRegister] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();

    setRegister(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      setUserInfo((userInfo) => ({ ...userInfo, image: value }));
    }
    if (name === "firstname") {
      setUserInfo({ ...userInfo, firstName: value });
    }
    if (name === "lastname") {
      setUserInfo({ ...userInfo, lastName: value });
    }
    if (name === "email") {
      setUserInfo({ ...userInfo, email: value });
    }
    if (name === "phone") {
      setUserInfo({ ...userInfo, phone: value });
    }
    if (name === "nickname") {
      setUserInfo({ ...userInfo, nickName: value });
    }
    if (name === "password") {
      setUserInfo({ ...userInfo, password: value });
    }
  };

  useEffect(() => {
    setUserInfo({ ...userInfo, isRegister: true, isLoggedIn: true  });

    dispatch(registerUser(userInfo));
    // eslint-disable-next-line
  }, [register, dispatch]);

  if (register) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="firstname"
                      placeholder="First name"
                      autoComplete="firstname"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="lastname"
                      placeholder="Last name"
                      autoComplete="lastname"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="phone"
                      placeholder="Phone"
                      autoComplete="phone"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="nickname"
                      placeholder="Nickname"
                      autoComplete="nickname"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  
                  <div className="d-grid">
                    <CButton color="success" onClick={handleRegisterClick}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
