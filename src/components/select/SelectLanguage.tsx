import Select from "./Select";
import { languages } from "../../assets/data/data";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ChangeEvent } from "react";
import { setLanguage } from "../../store/slices/uiSlice";
import { useTranslation } from "react-i18next";

type SelectLanguageProps = { id: string };

const SelectLanguage = ({ id }: SelectLanguageProps) => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(({ ui }) => ui);
  const { i18n } = useTranslation();

  const languageSwitcher = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(value));
    // dispatch(
    //   setLngContent(i18n.changeLanguage(language !== "bahasa" ? "id" : "en"))
    // );
    i18n.changeLanguage(language !== "bahasa" ? "id" : "en");
    console.log(value);
    // window.location.reload();
  };

  console.log(i18n.resolvedLanguage);

  return (
    <Select
      id={id}
      option={languages}
      onChange={languageSwitcher}
      value={language}
    />
  );
};

export default SelectLanguage;
