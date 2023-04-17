export const CloseBtn = ({ closeDonateBlock, closeSubscriptionBlock, closeTrackingBlock }) => {
  const handleClick = () => {
    if (closeDonateBlock) {
      closeDonateBlock();
    }
    if (closeSubscriptionBlock) {
      closeSubscriptionBlock();
    }
    if (closeTrackingBlock) {
      closeTrackingBlock();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        position: "absolute",
        top: 0,
        right: 5,
        margin: 0,
        padding: 0,
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <img
        src="/images/ios-close-3.svg"
        alt="close"
        width="20px"
        height="20px"
      />
    </button>
  );
};
