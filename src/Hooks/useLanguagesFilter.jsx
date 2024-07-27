const useLanguagesFilter = (data, inputText) => {
  const filteredLanguages = data?.languages?.filter((lang) =>
    lang?.name?.toLowerCase().includes(inputText?.toLowerCase())
  );
  return { filteredLanguages };
};

export default useLanguagesFilter;
