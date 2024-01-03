import { styled } from "styled-components";
import { colors, flex } from "../../utils/styles/commonStyle";

export const StoryCardContainer = styled.div`
  border-top: 8px solid ${colors.grey[0]};

  p {
    margin: 1em 0;
  }

  @media (min-width: 45em) and (orientation: landscape) {
    padding: 6%;
  }
`;

export const Contents = styled.article<{ $direction: string }>`
  ${flex}
  flex-direction: column;
  padding: 5%;

  @media (min-width: 60em) {
    flex-direction: ${({ $direction }) => $direction};

    img {
      width: 50%;
    }
  }
`;

export const HeaderDetails = styled.div`
  flex-direction: column;
  text-align: center;

  @media (min-width: 60em) {
    text-align: left;
  }
`;
