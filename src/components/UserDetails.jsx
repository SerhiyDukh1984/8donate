import { useState } from "react";
import { useSelector } from "react-redux";
import {
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { EditForm } from "./EditForm";

export const UserDetails = () => {
  const user = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (userInfo) => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <CRow className="g-0">
          <CCol md={4}>
            <CCardImage
              src="../images/photo_2022-09-03_16-44-20.jpg"
              alt="user photo"
              style={{ paddingRight: "40px", maxWidth: "400px" }}
            />
          </CCol>
          <CCol md={7}>
            <CCardBody>
              <CCardTitle className="mb-4">
                Name: {user.firstName} {user.lastName}
              </CCardTitle>
              <CCardText>
                Phone:{" "}
                <a href="tel:{user.phone}" style={{ textDecoration: "none" }}>
                  {user.phone}
                </a>
              </CCardText>
              <CCardText>
                Email:{" "}
                <a href={user.email} style={{ textDecoration: "none" }}>
                  {user.email}
                </a>
              </CCardText>
              <CCardText>Nick: {user.nickName}</CCardText>
              <CCardText>Password: {user.password}</CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1}>
            <button
              type="button"
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={handleEditClick}
            >
              <img
                src="../images/pencil-square-svgrepo-com.svg"
                alt="edit profile"
                height="20px"
              />
            </button>
          </CCol>
        </CRow>
      ) : (
        <EditForm handleSaveClick={handleSaveClick} />
      )}
    </>
  );
};
