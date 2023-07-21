import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const StoryCardContainer = styled.div`
  border-top: 8px solid ${colors.secondary};
  padding: 5%;

  p {
    margin: 1em 0;
  }
`;

export const Contents = styled.div<{ $direction: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 60em) {
    flex-direction: ${(props) => props.$direction};

    img {
      width: 50%;
      margin-left: 1em;
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
