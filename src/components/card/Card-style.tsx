import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  transition: 0.5s;
  width: 10em;

  img {
    border-radius: 4px;
    width: inherit;
  }

  div {
    opacity: 0;
    padding: 10% 5px;
    background: #181818;
    margin-top: -0.25em;
    border-radius: 0 0 4px 4px;
    transition-delay: 0.5s;

    p {
      font-size: 0.8em;
      margin-bottom: auto;
    }
  }

  &:hover {
    transform: scale(1.3);
    transition-delay: 0.5s;

    img {
      border-radius: 4px 4px 0 0;
    }

    div {
      opacity: 1;
    }
  }

  @media (min-width: 60em) and (orientation: landscape) {
    width: 12em;
  }

  @media (min-width: 85em) and (max-width: 86em) {
    width: 15em;
  }
`;
