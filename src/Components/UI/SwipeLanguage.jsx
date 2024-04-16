const SwipeLanguage = ({
  src,
  handleSwipeLanguage,
  handleSwipeLanguageNewPanel,
  className,
}) => {
  return (
    <img
      className={className}
      src={src}
      alt="language-swipe"
      onClick={
        handleSwipeLanguage ? handleSwipeLanguage : handleSwipeLanguageNewPanel
      }
    />
  );
};

export default SwipeLanguage;
