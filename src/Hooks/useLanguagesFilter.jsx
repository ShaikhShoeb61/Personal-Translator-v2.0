const useLanguagesFilter = (data, inputText) => {
  const FilteredLanguages = data?.filter((lang) =>
    lang?.name?.toLowerCase().includes(inputText.toLowerCase())
  );
  return { FilteredLanguages };
};

export default useLanguagesFilter;
