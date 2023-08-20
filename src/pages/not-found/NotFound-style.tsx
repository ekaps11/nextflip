import { styled } from "styled-components";

export const NotFoundContent = styled.div`
  text-align: center;
  padding: 0 16%;

  button {
    margin: 1.5em auto;
    background: white;
    color: black;
    font-weight: bolder;
    padding: 0.5em 1.5em;

    &:hover {
      background: #fff;
    }
  }
`;

export const NotFoundContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url("https://nyc3.digitaloceanspaces.com/cgmeetup/uploads/media_type/avatars/1041/1527570752-Lost_In_Space_VFX_Breakdown__3_.jpg.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  min-height: 25em;

  h1 {
    font-size: 2.3em;
    padding: 0 5%;
    text-align: center;
  }

  @media (min-width: 30em) {
    ${NotFoundContent} {
      padding: 0 25%;
    }
  }

  @media (min-width: 30em) {
    ${NotFoundContent} {
      padding: 0 20%;
    }
  }

  @media (min-width: 45em) and (max-width: 60em) {
    h1 {
      font-size: 3.5em;
    }

    ${NotFoundContent} {
      padding: 0 20%;

      p {
        font-size: 1.2em;
        margin: 0.5em 0;
      }
    }
  }

  @media (min-width: 60em) {
    min-height: 30em;

    h1 {
      font-size: 4em;
    }
  }
`;
