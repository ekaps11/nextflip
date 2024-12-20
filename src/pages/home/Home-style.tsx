import { styled } from "styled-components";
import { gradientBg } from "../../utils/styles/commonStyle";
import { SignUpContainer } from "../../components/sign-up/SignUp-style";

export const Header = styled.div`
  background: ${gradientBg.top}, url(images/banner.webp);
  background-size: cover;
  padding: 5%;
  padding-bottom: 3.5em;
  border-bottom: 3px solid #6c1f41;

  h1 {
    margin-top: 3.5em;
  }
`;

export const PlanBox = styled.div<{ $bg?: boolean }>`
  padding: 5%;
  background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);
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

  h2,
  p {
    margin-bottom: 1em;
  }

  div {
    display: inherit;
    flex-direction: column;
    gap: 0.5em;
  }
`;

export const HomeContainer = styled.div`
  @media (min-width: 35em) {
    ${Header} {
      div {
        margin-bottom: 3.5em;
      }
    }
  }

  @media (min-width: 45em) {
    ${Header} {
      div {
        width: 85%;
      }

      h1 {
        width: 75%;
      }
    }
  }

  @media (min-width: 60em) {
    ${PlanContainer} {
      div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        ${PlanBox} {
          padding: 8% 5%;
          display: flex;
        }
      }
    }
  }

  @media (min-width: 65em) {
    ${Header} {
      div {
        margin: 0 auto;
        margin-bottom: 4em;
      }
    }

    ${SignUpContainer} {
      margin: 1em 0;
    }

    ${PlanContainer} {
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
  }
`;
