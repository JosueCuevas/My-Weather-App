import React from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

import { FiMail } from "react-icons/fi";

const FooterWeather = styled.footer`
  padding: 0px 2rem 2rem;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    max-width: 584px;
  }
`;

const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FooterArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: var(--text-color);
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  :hover {
    color: #1a6dff;
    border-color: #1a6dff !important;
  }
`;

const extraStyles_a = {
  border: "thin solid var(--text-color)",
  padding: "1rem",
  borderRadius: "5px",
};

const WeatherFooter = () => {
  return (
    <FooterWeather>
      <h3>My Weather App</h3>
      <p>
        Project made with React.js in order to apply all basics concepts about
        this library, please if you enjoy the app we encourage you to share it
        with your friends
      </p>
      <FooterSection>
        <FooterArticle>
          <span style={{ paddingLeft: "1.5rem" }}>Send us a comment</span>
          <FooterLink href="/#/contact" style={extraStyles_a}>
            Contact the developer
          </FooterLink>
        </FooterArticle>
        <FooterArticle>
          <FooterLink
            href="https://github.com/josuecuevas"
            target="_blank"
            rel="noopener"
          >
            <BsGithub /> JosueCuevas
          </FooterLink>
          <FooterLink
            href="https://twitter.com/josuecuevs"
            target="_blank"
            rel="noopener"
          >
            <BsTwitter /> @JosueCuevs
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/josuecuevas/"
            target="_blank"
            rel="noopener"
          >
            <BsLinkedin /> JosueCuevas
          </FooterLink>
          <FooterLink
            href="mailto:hola@josuecuevas.com"
            target="_blank"
            rel="noopener"
          >
            <FiMail /> hola@josuecuevas.com
          </FooterLink>
        </FooterArticle>
      </FooterSection>
    </FooterWeather>
  );
};

export default WeatherFooter;
