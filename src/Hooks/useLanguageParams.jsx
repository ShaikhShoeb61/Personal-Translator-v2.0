import { useLocation } from "react-router-dom";

const useLanguageParams = () => {
  const location = useLocation();
  const SearchParams = new URLSearchParams(location.search);
  const TargetLanguage = SearchParams.get("tl") || "";
  const SourceLanguage = SearchParams.get("sl") || "";

  const HandleParams = (NewSelected) => {
    SearchParams.set("sl", NewSelected);
  };

  return { HandleParams, TargetLanguage, SourceLanguage };
};

export default useLanguageParams;
