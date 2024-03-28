import i18n from "../i18n/i18n";

export const device = navigator.userAgent.includes("Windows");

export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (number: number) =>
  Math.floor(Math.random() * number);

export const getTime = (time: number) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;

  return `${hours}${i18n.language === "en" ? "h" : "j"} ${minutes}m`;
};
