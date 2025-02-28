import { RefObject } from "react";
import i18n from "../i18n/i18n";

export const device = navigator.userAgent.includes("Windows");

export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (number: number) =>
  Math.floor(Math.random() * number);

export const getDuration = (time: number) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;

  return `${hours}${i18n.language === "en" ? "h" : "j"} ${minutes}m`;
};

export const replaceAll = (word: string, val: string, replaceVal: string) =>
  word.toLowerCase().replace(new RegExp(val, "gi"), replaceVal);

export const handleClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) => {
  const handleClickOutside = ({ target }: MouseEvent) =>
    ref.current && !ref.current.contains(target as Node) && callback();

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};

export const handleEsc = (callback: () => void) => {
  const pressEsc = ({ key }: KeyboardEvent) => key === "Escape" && callback();

  document.addEventListener("keydown", pressEsc);

  return () => document.removeEventListener("keydown", pressEsc);
};

export const unscrolledModalEffect = (isOpen: boolean) => {
  const bodyStyle = document.body.style;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  bodyStyle.overflow = isOpen ? "hidden" : "auto";
  bodyStyle.paddingRight = isOpen ? `${scrollbarWidth}px` : "";
};
