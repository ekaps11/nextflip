import { styled } from "styled-components";
import { flex, gradientBg } from "../../utils/styles/commonStyle";
import { SignUpContainer } from "../../components/sign-up/SignUp-style";
import { CarouselContainer } from "../../components/carousel/Carousel-style";

export const Header = styled.div`
  ${flex}
  background: ${gradientBg.top}, url(images/banner.webp);
  background-size: cover;
  padding: 5%;
  text-align: center;

  @media (orientation: portrait) {
    height: 80vh;

    @media (min-width: 45em) {
      height: 60vh;
    }
  }

  @media (orientation: landscape) {
    height: 100vh;

    @media (min-width: 60em) and (hover: none) {
      height: 80vh;
    }
  }

  @media (min-width: 35em) {
    ${SignUpContainer} {
      width: 90%;
      margin-left: 10%;
    }
  }

  @media (min-width: 65em) {
    ${SignUpContainer} {
      width: 100%;
      margin-left: unset;
    }
  }
`;

export const TrendingMovies = styled.div`
  margin-top: -5%;

  img {
    width: 100%;
  }

  div {
    margin: 5%;
    margin-top: 0;

    div {
      margin: unset;
      margin-top: 1em;

      ${CarouselContainer} {
        padding: unset;
        margin: -2em 0;
      }
    }
  }
`;

export const PlanBox = styled.div`
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
    ${TrendingMovies} {
      div {
        padding: 0 5%;
      }
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
