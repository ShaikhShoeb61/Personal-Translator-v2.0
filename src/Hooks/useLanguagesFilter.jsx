const useLanguagesFilter = (data, inputText) => {
  const filteredLanguages = data?.filter((lang) =>
    lang?.name?.toLowerCase().includes(inputText?.toLowerCase())
  );
  return { filteredLanguages };
};

export default useLanguagesFilter;
