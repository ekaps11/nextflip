import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setLanguage } from "../../store/slices/persistedSlice";
import Select from "./Select";

const languages = ["english", "bahasa"];

const SelectLanguage = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(({ persisted }) => persisted);
  const { i18n } = useTranslation();

  const languageSwitcher = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    const lng = language !== "english" ? "en" : "id";

    dispatch(setLanguage(value));
    i18n.changeLanguage(lng);
    location.reload();
  };

  return (
    <Select option={languages} onChange={languageSwitcher} value={language} />
  );
};

export default SelectLanguage;
