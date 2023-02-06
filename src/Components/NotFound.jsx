import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import WeatherContext from "../Context/WeatherContext";
import NotFoundMain from "./NotFoundMain";
import WeatherForm from "./WeatherForm";

const FormContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const HomeLink = styled.a`
  color: orange;
  font-weight: 700;
  :hover {
    opacity: 0.84;
    color: white;
  }
`;

export const NotFound = () => {
  const { search } = useContext(WeatherContext);
  return (
    <NotFoundMain>
      <h1>¯\_(ツ)_/¯</h1>
      {search ? (
        <>
          <h2>Sorry, the city: "{search.city}" is not found </h2>
          <h3>Try another city</h3>
          <FormContainer>
            <WeatherForm />
          </FormContainer>
        </>
      ) : (
        <>
          <h2>Sorry, page not found error 404</h2>
          <p>
            Please return to <HomeLink href="/#/">Home</HomeLink>
          </p>
        </>
      )}
    </NotFoundMain>
  );
};
