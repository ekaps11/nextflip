import Select from "./Select";
import i18n from "../../utils/i18n/i18n";

const languages = ["english", "bahasa"];

type SelectLanguageProps = {
  id: string;
};

const SelectLanguage = ({ id }: SelectLanguageProps) => {
  const lng = i18n.language === "en";

  const lngSwitcher = () => {
    i18n.changeLanguage(lng ? "id" : "en");
    location.reload();
  };

  return (
    <Select
      id={id}
      option={languages}
      onChange={lngSwitcher}
      value={lng ? "english" : "bahasa"}
    />
  );
};

export default SelectLanguage;
