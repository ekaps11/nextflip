import styled from "styled-components";

export const Recommendation = styled.div`
  padding: 1em 3% !important;

  h3 {
    margin-left: 2%;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 5px;
    margin-bottom: 5px;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  @media (min-width: 40em) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 45em) {
    div {
      margin: 0 -2%;
    }
  }

  @media (min-width: 60em) {
    h3 {
      font-size: 1.5em;
    }
  }
`;
