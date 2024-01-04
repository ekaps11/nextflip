export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (number: number) =>
  Math.floor(Math.random() * number);
