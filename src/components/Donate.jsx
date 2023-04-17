import { CButton, CCol, CContainer, CFormInput } from "@coreui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDonateReducer } from "../redux/donate/donateSlice";

export default function Donate({ handleCloseDonate }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.donate.donates);
  const [donate, setDonate] = useState({} || 0);

  const keys = Object.keys(donate);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  const sum = donate.sum;
  const fee = donate.sum / 20;

  let total;
  const qwe = (a, b) => {
    total = a + b;
  };

  qwe(sum, fee);

  const handleChange = (e) => {
    const { value } = e.target;

    setDonate({
      sum: Number(value),
      id: nanoid(),
        date: formattedDate,
    });
  };

  const handleSaveDonate = () => {
    if (keys.length !== 0) {
      setDonate({
        ...donate,
        fee,
        total,
        
      });
      dispatch(addDonateReducer([...state, donate]));
    }

    handleCloseDonate();
  };

  useEffect(()=>{
    setDonate({...donate, fee, total})
    // eslint-disable-next-line
  },[sum, fee, total,])

  return (
    <CContainer
      fluid
      style={{
        paddingTop: "110px",
        paddingBottom: "60px",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#0d6efd", textAlign: "center" }}>Donate</h1>

      <CCol>
        <CFormInput type="number" placeholder="Sum" onChange={handleChange} />
      </CCol>

      <CCol xs="auto">
        <div
          className=" d-grid gap-2 d-md-flex justify-content-md-end "
          style={{ marginLeft: "auto" }}
        >
          <CButton color="primary" variant="outline" onClick={handleSaveDonate}>
            Accept
          </CButton>
          <CButton
            color="primary"
            variant="outline"
            onClick={() => handleCloseDonate()}
          >
            Cansel
          </CButton>
        </div>
      </CCol>

      <ul>
        <li>Sum: {sum ? sum.toFixed(2) : 0}</li>
        <li>Fee : {fee ? fee.toFixed(2) : 0}</li>
        <li>Total: {total ? total.toFixed(2) : 0}</li>
      </ul>
    </CContainer>
  );
}
