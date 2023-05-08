import React from "react";
import ImgMealsS from "../../Image/image/pexels-alexy-almond-3756523 1.png";
import styled from "styled-components";

export const MealsSummary = () => {
  return (
    <div>
      <ImgMeals src={ImgMealsS} />
    </div>
  );
};
const ImgMeals = styled.img`
  width: 100%;
`;
