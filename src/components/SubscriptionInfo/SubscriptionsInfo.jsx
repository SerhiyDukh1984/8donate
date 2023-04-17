import { CButton } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { changeSubscriptionBlock } from "../../redux/SubscriptionBlock/SubscriptionBlockSlice";
import { CloseBtn } from "../CloseBtn";

export const SubscriptionInfo = () => {
  const isOpen = useSelector((state) => state.subscriptionBlock.isOpen);
  // const check = useSelector((state) => state.subscriptionBlock.checked);
  const block = useSelector((state) => {
    const { blockWidth, blockHeight, blockX, blockY, isOpen, checked } =
      state.subscriptionBlock;

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
    dispatch(changeSubscriptionBlock({ ...block, isOpen: true }));
  };

  const closeSubscriptionBlock = () => {
    dispatch(changeSubscriptionBlock({ ...block, isOpen: false }));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <CButton type="button" onClick={handleClick}>
        start
      </CButton>
      {isOpen && (
        <Rnd
          size={{ width: block.blockWidth, height: block.blockHeight }}
          position={{ x: block.blockX, y: block.blockY }}
          maxWidth={400}
          maxHeight={150}
          onDragStop={(e, d) => {
            dispatch(
              changeSubscriptionBlock({ ...block, blockX: d.x, blockY: d.y })
            );
          }}
          style={{
            border: "1px solid black",
            position: "relative",
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            dispatch(
              changeSubscriptionBlock({
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
              Subscription
            </h4>
            <p style={{ fontSize: `${block.blockHeight / 10}px` }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, expedita.
            </p>

            <CloseBtn closeSubscriptionBlock={closeSubscriptionBlock} />
          </div>
        </Rnd>
      )}
    </div>
  );
};
