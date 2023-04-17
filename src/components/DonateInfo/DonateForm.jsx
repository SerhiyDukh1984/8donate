import {
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeDonateBlock } from "../../redux/donateBlock/donateBlockSlice";

export const DonateForm = ({ getAvatar, block }) => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.donateBlock.checked);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "width") {
      getAvatar({ ...block, avatarWidth: value });
    }
    if (name === "height") {
      getAvatar({ ...block, avatarHeight: value });
    }
    if (name === "borderRadius") {
      getAvatar({ ...block, avatarBorderRadius: value });
    }
    if (name === "top") {
      getAvatar({ ...block, top: value });
    }
    if (name === "left") {
      getAvatar({ ...block, left: value });
    }
    if (name === "check") {
      dispatch(changeDonateBlock({ ...block, checked: !check }));
    }
  };

  return (
    <CContainer>
      <CForm style={{ width: " 60%" }}>
        <h2>Donate information settings</h2>
        <CInputGroup className="mb-3">
          <CInputGroupText>Width</CInputGroupText>
          <CFormInput
            type="number"
            name="width"
            max={block.avatarHeight * 0.8}
            defaultValue={block.avatarWidth}
            placeholder="Width"
            onChange={handleChange}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>Height</CInputGroupText>
          <CFormInput
            type="number"
            name="height"
            max={150}
            defaultValue={block.avatarHeight}
            placeholder="height"
            onChange={handleChange}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>Radius</CInputGroupText>
          <CFormInput
            type="number"
            name="borderRadius"
            min="0"
            max="50"
            defaultValue={block.avatarBorderRadius}
            placeholder="borderRadius"
            onChange={handleChange}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>Top</CInputGroupText>
          <CFormInput
            type="number"
            name="top"
            min="0"
            max={block.blockHeight - block.avatarHeight}
            placeholder="top"
            onChange={handleChange}
          />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>Left</CInputGroupText>
          <CFormInput
            type="number"
            name="left"
            min="0"
            max={block.blockWidth - block.avatarWidth}
            placeholder="left"
            onChange={handleChange}
          />
        </CInputGroup>

        <CFormCheck
          label="Show donates"
          name="check"
          checked={check}
          onChange={handleChange}
        />
      </CForm>
    </CContainer>
  );
};
