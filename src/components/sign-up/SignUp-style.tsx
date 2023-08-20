import { styled } from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  button {
    font-size: 1em;
    height: 3em;
    margin: auto;
    min-width: 30%;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 5%;
  margin: 1em 0;

  p {
    margin-bottom: 1.5em;
  }

  @media (min-width: 30em) {
    p {
      padding: 0;
    }

    ${SignUpForm} {
      flex-direction: row;
      height: 3em;

      div {
        width: 100%;
      }
    }
  }

  @media (min-width: 50em) {
    p {
      font-size: 1.1em;
    }
    ${SignUpForm} {
      padding: 0 15%;
    }
  }
`;
