import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealsItemForm";

export const MealItem = ({ el }) => {
  return (
    <ContainerItem>
      <ContainerDescription>
        <h3>{el.title}</h3>
        <i>{el.from}</i>
        <p>${el.price}</p>
      </ContainerDescription>
      <MealItemForm el={el} />
    </ContainerItem>
  );
};
const ContainerItem = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;
const ContainerDescription = styled.div`
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  i {
    font-weight: 400;
    font-size: 16px;
    color: #222222;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
