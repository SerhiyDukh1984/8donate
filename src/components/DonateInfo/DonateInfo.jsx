import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDonateBlock } from "../../redux/donateBlock/donateBlockSlice";
import { DonateInfoBlock } from "./DonateInfoBlock";
import {DonateForm} from "./DonateForm";

export const DonateInfo = () => {
  const checked = useSelector((state) => state.donateBlock.checked);
  const dispatch = useDispatch();
  const block = useSelector((state) => {
    
    const {
      blockWidth,
      blockHeight,
      blockX,
      blockY,
      avatarWidth,
      avatarHeight,
      avatarBorderRadius,
      textTop,
      textLeft,
      top,
      left,
      isOpen,
      checked,
    } = state.donateBlock;

    return {
      blockWidth,
      blockHeight,
      blockX,
      blockY,
      avatarWidth,
      avatarHeight,
      avatarBorderRadius,
      textTop,
      textLeft,
      top,
      left,
      isOpen,
      checked,
    };
  });

  const [src, setSrc] = useState("");

  const getAvatar = (data) => {
    dispatch(changeDonateBlock(data));
  };

  const closeDonateBlock = () => {
    dispatch(changeDonateBlock({ ...block, isOpen: false }));
  };

  const changeImage = (data) => {
    setSrc(data);
  };

  const handleClick = () => {
    dispatch(changeDonateBlock({ ...block, isOpen: true }));
  };
  useEffect(() => {
    if (block.avatarBorderRadius <= 15) {
          changeImage("/images/photo_2022-09-03_16-44-20.jpg");
        } else if (
          block.avatarBorderRadius > 15 &&
          block.avatarBorderRadius <= 35
        ) {
          changeImage("/images/pencil-square-svgrepo-com.svg");
        } else changeImage("/images/GR-EO-8.svg");

    dispatch(
      changeDonateBlock({
        ...block,
        avatarWidth: block.blockHeight * 0.8,
        avatarHeight: block.blockHeight,
        textLeft: block.blockHeight * 0.85,
      })
    );

    // eslint-disable-next-line
  }, [block.blockWidth, block.blockHeight, block.avatarBorderRadius]);

  return (
    <div style={{ paddingTop: "100px" }}>
      

      <DonateForm getAvatar={getAvatar} block={block} />

      <button type="button" onClick={handleClick}>
        show
      </button>
      
        {block.isOpen && <DonateInfoBlock
          closeDonateBlock={closeDonateBlock}
          block={block}
          getAvatar={getAvatar}
          src={src}
        />}
      
    </div>
  );
};
