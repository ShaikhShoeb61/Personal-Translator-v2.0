export const translatorPanel = ({
  HeaderSection,
  TextField,
  FooterSection,
}) => {
  return (
    <div className="w-[20.5rem] h-[28rem] rounded-2xl border border-customgray-300 border-opacity-50 flex flex-col justify-between">
      {HeaderSection}
      {TextField}
      {FooterSection}
    </div>
  );
};
