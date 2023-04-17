import { useDispatch, useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { changeTrackingBlock } from "../../redux/TrackingBlock/TrackingBlockSlice";
import { CloseBtn } from "../CloseBtn";

export const TrackingInfo = () => {
  const isOpen = useSelector((state) => state.trackingBlock.isOpen);
  const check = useSelector(state=> state.trackingBlock.checked)
  console.log("🚀 ~ isOpen:", isOpen);
  const block = useSelector((state) => {
    const { blockWidth, blockHeight, blockX, blockY, isOpen, checked } =
      state.trackingBlock;

    return {
      blockWidth,
      blockHeight,
      blockX,
      blockY,
      isOpen,
      checked,
    };
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTrackingBlock({ ...block, isOpen: true }));
  };

  const closeTrackingBlock = () => {
    dispatch(changeTrackingBlock({ ...block, isOpen: false }));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <button type="button" onClick={handleClick}>
        start
      </button>
      {isOpen && (
        <Rnd
          size={{ width: block.blockWidth, height: block.blockHeight }}
          position={{ x: block.blockX, y: block.blockY }}
          maxWidth={400}
          maxHeight={150}
          onDragStop={(e, d) => {
            dispatch(
              changeTrackingBlock({ ...block, blockX: d.x, blockY: d.y })
            );
          }}
          style={{
            border: "1px solid black",
            position: "relative",
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            dispatch(
              changeTrackingBlock({
                ...block,
                blockWidth: ref.offsetWidth,
                blockHeight: ref.offsetHeight,
                ...position,
              })
            );
          }}
        >
          <div
            style={{
              position: "absolute",
              top: `${block.textTop}px`,
              left: `${block.textLeft}px`,
            }}
          >
            <h4 style={{ fontSize: `${block.blockHeight / 6}px` }}>
              Tracking
            </h4>
            <p style={{ fontSize: `${block.blockHeight / 10}px` }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, expedita.
            </p>

            <CloseBtn closeTrackingBlock={closeTrackingBlock} />
          </div>
        </Rnd>
      )}
    </div>
  );
};

