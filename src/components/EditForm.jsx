import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletetUser, registerUser } from "../redux/auth/authSlice";
import {
  CButton,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { clearDonates } from "../redux/donate/donateSlice";

export const EditForm = ({ handleSaveClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState(user);

  const handleEditClick = (e) => {
    e.preventDefault();

    handleSaveClick();

    dispatch(registerUser(userInfo));
  };

  const handleCanselClick = (e) => {
    e.preventDefault();

    handleSaveClick();
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deletetUser());
    dispatch(clearDonates());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      setUserInfo((user) => ({ ...user, image: value }));
    }
    if (name === "firstName") {
      setUserInfo((user) => ({ ...user, firstName: value }));
    }
    if (name === "lastName") {
      setUserInfo((user) => ({ ...user, lastName: value }));
    }
    if (name === "email") {
      setUserInfo((user) => ({ ...user, email: value }));
    }
    if (name === "phone") {
      setUserInfo((user) => ({ ...user, phone: value }));
    }
    if (name === "nickName") {
      setUserInfo((user) => ({ ...user, nickName: value }));
    }
    if (name === "password") {
      setUserInfo((user) => ({ ...user, password: value }));
    }
  };

  return (
    <CForm className="row g-3">
      <div className="mb-3">
        <CFormInput type="file" name="image" label="photo" />
      </div>

      <CInputGroup className="mb-3">
        <CInputGroupText width="250px"> FirstName </CInputGroupText>
        <CFormInput
          name="firstName"
          defaultValue={user.firstName}
          onChange={handleChange}
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText> LastName </CInputGroupText>
        <CFormInput
          name="lastName"
          defaultValue={user.lastName}
          onChange={handleChange}
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText> Phone </CInputGroupText>
        <CFormInput
          name="phone"
          defaultValue={user.phone}
          onChange={handleChange}
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText> Email </CInputGroupText>
        <CFormInput
          type="email"
          name="email"
          defaultValue={user.email}
          onChange={handleChange}
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText> NickName </CInputGroupText>
        <CFormInput
          name="nickName"
          defaultValue={user.nickName}
          onChange={handleChange}
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText> Password </CInputGroupText>
        <CFormInput
          name="password"
          defaultValue={user.password}
          onChange={handleChange}
        />
      </CInputGroup>

      <div className=" d-grid gap-2 d-md-flex justify-content-md-end ">
        <CButton color="primary" variant="outline" onClick={handleEditClick}>
          <Link
            to="/profile"
            style={{
              color: "primary",
              margin: "12px",
              textDecoration: "none",
            }}
          >
            Done
          </Link>
        </CButton>
        <CButton color="primary" variant="outline" onClick={handleCanselClick}>
          <Link
            to="/profile"
            style={{
              color: "primary",
              margin: "12px",
              textDecoration: "none",
            }}
          >
            Cansel
          </Link>
        </CButton>
        <CButton color="primary" variant="outline" onClick={handleDelete}>
          <Link
            to="/"
            style={{
              color: "primary",
              margin: "12px",
              textDecoration: "none",
            }}
          >
            Delete
          </Link>
        </CButton>
      </div>
    </CForm>
  );
};
