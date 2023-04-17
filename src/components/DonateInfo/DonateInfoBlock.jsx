import { useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import { changeDonateBlock } from "../../redux/donateBlock/donateBlockSlice";
import { CloseBtn } from "../CloseBtn";

export const DonateInfoBlock = ({
  closeDonateBlock,
  block,
  getAvatar,
  src,
}) => {
  const dispatch = useDispatch();

  return (
    <div style={{ paddingTop: "100px" }}>
      

      <Rnd
        size={{ width: block.blockWidth, height: block.blockHeight }}
        position={{ x: block.blockX, y: block.blockY }}
        maxWidth={400}
        maxHeight={150}
        minWidth={block.avatarWidth * 3}
        onDragStop={(e, d) => {
          dispatch(changeDonateBlock({ ...block, blockX: d.x, blockY: d.y }));
        }}
        style={{
          border: "1px solid black",
          position: "relative",
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          dispatch(
            changeDonateBlock({
              ...block,
              blockWidth: ref.offsetWidth,
              blockHeight: ref.offsetHeight,
              ...position,
            })
          );
        }}
      >
        {block.avatarHeight && (
          <img
            src={src}
            alt="avatar"
            width={
              block.avatarHeight <= block.blockHeight
                ? block.avatarWidth
                : block.blockHeight * 0.8
            }
            height={
              block.avatarHeight <= block.blockHeight
                ? block.avatarHeight
                : block.blockHeight
            }
            style={{
              borderRadius: `${block.avatarBorderRadius}%`,
              position: "absolute",
              top: `${block.top}px`,
              left: `${block.left}px`,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: `${block.textTop}px`,
            left: `${block.textLeft}px`,
          }}
        >
          <h4 style={{ fontSize: `${block.blockHeight / 6}px` }}>Donate</h4>
          <p style={{ fontSize: `${block.blockHeight / 10}px` }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            expedita.
          </p>

          <CloseBtn closeDonateBlock={closeDonateBlock} />
        </div>
      </Rnd>
    </div>
  );
};
