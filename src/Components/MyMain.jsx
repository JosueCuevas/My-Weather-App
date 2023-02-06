import styled, { css } from "styled-components";

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding-top: 8rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  @media screen and (min-width: 994px) {
    padding-top: 0;
    display: flex;
  }

  ${({ imageID }) =>
    imageID >= 200 &&
    imageID <= 300 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675578754/MyWeather/Background/michael-d-jSADgWPmKDU-unsplash_w4qqog.jpg");
    `}
  ${({ imageID }) =>
    imageID >= 300 &&
    imageID <= 400 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675578803/MyWeather/Background/thomas-charters-Fs1ehbtXZjc-unsplash_dnprdg.jpg");
    `}
  ${({ imageID }) =>
    imageID >= 500 &&
    imageID <= 600 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675573684/MyWeather/Background/max-bender-1YHXFeOYpN0-unsplash_seaepp.jpg");
    `}
  ${({ imageID }) =>
    imageID >= 600 &&
    imageID <= 700 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675578821/MyWeather/Background/aditya-vyas-PzhmEp_aDU4-unsplash_drnywv.jpg");
    `}
  ${({ imageID }) =>
    imageID >= 700 &&
    imageID < 800 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675578729/MyWeather/Background/brecht-denil-XsPtJPAQyeQ-unsplash_luor0j.jpg");
    `}
  ${({ imageID, hour }) =>
    imageID === 800 &&
    (hour < 7 || hour > 19) &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675580042/MyWeather/Background/kazuend-2KXEb_8G5vo-unsplash_nwwkf1.jpg");
    `}
  ${({ imageID, hour }) =>
    imageID === 800 &&
    hour >= 7 &&
    hour <= 19 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675573441/MyWeather/Background/grooveland-designs-zjoydJb17mE-unsplash_qotvf0.jpg");
    `}
      ${({ imageID }) =>
    imageID === 801 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675580007/MyWeather/Background/nathan-defiesta-l60eTzDo2jI-unsplash_vyxkmi.jpg");
    `}
      ${({ imageID }) =>
    imageID === 802 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675578842/MyWeather/Background/nader-abushhab-uZIaeo2cfio-unsplash_ow2xh1.jpg");
    `}
      ${({ imageID }) =>
    imageID === 803 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675580504/MyWeather/Background/lukasz-lada-LtWFFVi1RXQ-unsplash_mi7e6a.jpg");
    `}
      ${({ imageID }) =>
    imageID === 804 &&
    css`
      background-image: url("https://res.cloudinary.com/dokbqdk6g/image/upload/v1675579603/MyWeather/Background/rodion-kutsaiev-PEm_sLmJT-w-unsplash_d9qbyv.jpg");
    `}
`;

export default Main;
