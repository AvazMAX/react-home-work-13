import { fireEvent } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

export const MealsSummaryCard = () => {
  return (
    <DivMealsSummCard>
      <ContainerMealsSummaryCard>
        <h3>Delicious Food, Delivered To You</h3>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </ContainerMealsSummaryCard>
    </DivMealsSummCard>
  );
};
const DivMealsSummCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -190px;

`;
const ContainerMealsSummaryCard = styled.div`
  width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  text-align: center;
  padding: 36px 54px;
  h3 {
    font-weight: 600;
    font-size: 36px;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin-top: 20px;
  }
`;
