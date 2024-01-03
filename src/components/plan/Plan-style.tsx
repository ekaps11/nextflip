import styled from "styled-components";

const burgundy = "linear-gradient(180deg, #6c1f41 0%, #210d0e 100%)";
const navy = "linear-gradient( 149deg, #192247 0%, #210e17 96.86% )";

export const PlanBox = styled.div<{ $bg?: boolean }>`
  padding: 5%;
  background: ${({ $bg }) => ($bg ? navy : burgundy)};
  border-radius: 1em;

  p {
    font-size: 0.9em;

    &:last-child {
      font-weight: bold;
      margin-top: auto;
    }
  }

  img {
    width: 3em;
    margin-left: auto;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin-bottom: 1em;

  h2 {
    margin-bottom: 1em;
  }

  div {
    display: inherit;
    flex-direction: column;
    gap: 0.5em;
  }

  @media (min-width: 60em) {
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      ${PlanBox} {
        padding: 8% 5%;
        display: flex;
      }
    }
  }

  @media (min-width: 65em) {
    padding: 3% 10%;

    div {
      grid-template-columns: repeat(4, 1fr);

      ${PlanBox} {
        display: flex;
        padding: 20% 10%;

        img {
          margin-top: auto;
        }
      }
    }
  }
`;
