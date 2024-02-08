import React from "react";

const TranslationOutput = () => {
  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-gray-300 border-opacity-50 flex flex-col justify-between">
      <div className="flex w-full h-10 items-center gap-4">
        <div className="pl-3 h-full flex items-center rounded-tl-2xl border-t border-l border-t-green-500 border-l-green-500">
          <span className="text-sm font-medium text-green-500">Hindi</span>
        </div>
        <div className="h-full flex items-center">
          <span className="text-sm font-medium text-gray-300">Urdu</span>
        </div>

        <img
          className="w-7 gray-300"
          src="./Icons/chevron-down.svg"
          alt="down-icon"
        />
      </div>
      <textarea
        className="w-full h-[23rem] px-4 text-base font-normal text-gray-500 outline-none resize-none "
        name="output"
        readOnly
      ></textarea>
      <div className="flex h-10 justify-center items-center gap-3">
        <img src="/Icons/play.svg" alt="play-icon" />
        <img src="/Icons/clipboard.svg" alt="copy-to-clipboard-icon" />
        <img src="/Icons/copy-02.svg" alt="new-output-panel-icon" />
      </div>
    </div>
  );
};

export default TranslationOutput;
