import React from "react";
import styled from "styled-components";
import { foods } from "../Utils/Array";
import { MealItem } from "./MealItem";

export const Meals = () => {
  return (
    <Container>
      {foods.map((el) => (
        <div key={el.id}>
          <MealItem el={el} />
          <HrItem />
        </div>
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 40px;
  margin: 40px auto;
`;
const HrItem = styled.hr`
  border-bottom: 1px solid #D6D6D6;
  margin-top: 20px;
  &:last-of-type {
    /* display: none; */
  }
`;