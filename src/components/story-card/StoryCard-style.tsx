import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const StoryCardContainer = styled.div`
  border-top: 8px solid ${colors.secondary};

  p {
    margin: 1em 0;
  }
`;

export const Contents = styled.div<{ $direction: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 60em) {
    flex-direction: ${({ $direction }) => $direction};

    img {
      width: 50%;
    }
  }
`;

export const HeaderDetails = styled.div`
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 60em) {
    text-align: left;
  }
`;
