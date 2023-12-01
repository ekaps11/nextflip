export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (multiplyBy: number) =>
  Math.floor(Math.random() * multiplyBy);
