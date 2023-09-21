export const initToUpper = (word: string) =>
  word.replace(word[0], word[0].toUpperCase());

export const handleAuthError = (word: string) =>
  word.slice(5).replace(/-/g, " ");
