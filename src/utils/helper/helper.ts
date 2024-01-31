export const device = navigator.userAgent.includes("Windows");

export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (number: number) =>
  Math.floor(Math.random() * number);

export const getTime = (time: number) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};
