import React from "react";
import { useGetLanguagesListQuery } from "../Services/Api/LanguagesListApi";

const SupportedLanguages = () => {
  const { data, isLoading } = useGetLanguagesListQuery();

  return (
    <div className="w-full h-[23rem] absolute top-[9%] bg-white border-b border-x border-customgray-300 border-opacity-50">
      <div className="w-full h-10 px-2 flex justify-start items-center border-y border-customgray-300 border-opacity-50 bg-white gap-1">
        <img
          className="px-2 text-customgray-500"
          src="/Icons/arrow-left.svg"
          alt="arrow-left"
        />
        <input
          className="w-full h-full outline-none font-normal text-[14px] placeholder:text-customgray-300"
          type="text"
          placeholder="Search languages"
        />
      </div>

      <div className="w-full h-80 overflow-auto sbar">
        <div className="w-full flex flex-wrap items-start content-start">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((lang) =>
              lang.name && lang.code ? (
                <div
                  key={lang.code}
                  className="w-[10.5rem] h-[2rem] px-[1.25rem] hover:bg-customgreen-50 hover:cursor-pointer flex items-center"
                >
                  <span className="text-[0.87rem] font-normal">
                    {lang.name}
                  </span>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportedLanguages;
