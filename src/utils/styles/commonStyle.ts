import { css, keyframes } from "styled-components";

export const colors = {
  red: ["#e50914", "#dc1721", "#fa2f2f"],
  grey: ["#333", "#717272", "#181818"],
  blue: ["#0071eb"],
  white: ["#f9f6e6"],
  orange: ["#e87c03"],
};

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const gradientBg = {
  top: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))`,
  bot: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 95%
  )`,
};

export const animation = {
  fadeIn1: keyframes`
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }`,

  fadeIn2: keyframes`
    from {
      opacity: 0;
    } to {
      opacity: 0.7;
    }`,

  fullWidth: keyframes`
    from {
      width: 0;
    } to {
      width: 100%;
    }`,

  nineties: keyframes`
  from {
    width: 0;
  } to {
    width: 90%;
  }`,

  popUp: keyframes`
    from {
      transform: scale(0);
    } to {
      transform: scale(1);
    }`,

  spin: keyframes`
    to {
      transform: rotate(360deg);
    }`,

  slideUp: keyframes`
    from {
      transform: translateY(100%);
    } to {
      transform: translateY(0);
    }`,

  rotateRight: keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }`,

  rotateLeft: keyframes`
  from {
    transform: rotate(180deg);
  } to {
    transform: rotate(0deg);
  }`,
};
