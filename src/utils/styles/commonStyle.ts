import { css } from "styled-components";

export const colors = {
  red: ["#e50914", "#dc1721", "#fa2f2f"],
  grey: ["#333", "#717272", '#181818'],
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
