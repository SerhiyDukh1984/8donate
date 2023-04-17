import {
  CButton,
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Donate from "../components/Donate";
import { addDonateReducer } from "../redux/donate/donateSlice";

export const History = (e) => {
  const dispatch = useDispatch();
  const donates = useSelector((state) => state.donate.donates);
  const [donate, setDonate] = useState(false);

  

  const handleOpenDonate = () => {
    setDonate(true);
  };

  const handleCloseDonate = () => {
    setDonate(false);
  };
  

  const handleRemoveDonate = (e) => {
    const {id} = e.target

    const filteredDonates = donates.filter(item=>item.id !== id);

    const shoudRemove = window.confirm("Are you sure???")

    if(shoudRemove){

      dispatch(addDonateReducer(filteredDonates));
    }
    
  };

  return (
    <CContainer fluid style={{ paddingTop: "110px", paddingBottom: "60px" }}>
      {!donate ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "30px",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#0d6efd", textAlign: "center" }}>My donations</h1>
            <CButton
              color="primary"
              variant="outline"
              onClick={handleOpenDonate}
            >
              <Link
                to="/history/donate"
                style={{
                  textDecoration: "none",
                }}
              ></Link>
              Donate
            </CButton>
          </div>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Sum</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fee</CTableHeaderCell>
                <CTableHeaderCell scope="col">Total Sum</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            {donates.map((item, index) => (
              <CTableBody key={index}>
                <CTableRow  style={{ justifyContent: "center" }}>
                  <CTableDataCell>{index+1}</CTableDataCell>
                  <CTableDataCell>{(item.sum).toFixed(2)}</CTableDataCell>
                  <CTableDataCell>{(item.fee).toFixed(2)}</CTableDataCell>
                  <CTableDataCell>{(item.total).toFixed(2)}</CTableDataCell>
                  <CTableDataCell>{item.date}</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="primary"
                      variant="outline"
                      id={item.id}
                      onClick={handleRemoveDonate}
                    >
                      Delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            ))}
          </CTable>
        </>
      ) : (
        <Donate handleCloseDonate={handleCloseDonate} />
      )}
    </CContainer>
  );
};
