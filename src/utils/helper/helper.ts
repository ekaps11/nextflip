export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");

export const getRandomNumber = (multiplyBy: number) => {
  return Math.floor(Math.random() * multiplyBy);
};
