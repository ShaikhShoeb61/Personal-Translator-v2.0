import React from "react";

const FooterSection = ({
  playIcon,
  recordIcon,
  inputCounts,
  copyIcon,
  newPanelIcon,
}) => {
  return (
    <div className="flex h-10 justify-center items-center gap-3">
      <img src={playIcon} alt="play-icon" />
      {recordIcon && inputCounts && (
        <>
          <span className="text-[0.7rem] font-normal h-full flex items-center text-customgray-500">
            {inputCounts}
          </span>
          <img src={recordIcon} alt="record-icon" />
        </>
      )}
      {copyIcon && <img src={copyIcon} alt="copy-icon" />}
      {newPanelIcon && <img src={newPanelIcon} alt="new-panel-icon" />}
    </div>
  );
};

export default FooterSection;
