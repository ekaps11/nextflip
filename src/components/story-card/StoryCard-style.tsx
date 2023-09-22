import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const StoryCardContainer = styled.div`
  border-top: 8px solid ${colors.grey[0]};

  p {
    margin: 1em 0;
  }
`;

export const Contents = styled.article<{ $direction: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
