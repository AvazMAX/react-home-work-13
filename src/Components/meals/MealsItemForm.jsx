import React, { useContext, useState } from "react";
import { Button } from "../Ui/Button";
import { ReactComponent as PlusIcon } from "../../Image/Icons/plus.svg";
import styled from "styled-components";
import { AppProvider } from "../store/Context";
import "../../App.css";

export const MealItemForm = ({ el }) => {
  const { addFoods, dispatch } = useContext(AppProvider);

  return (
    <div>
      <InputBlock>
        <label htmlFor="amount"> Amount</label>
        <input
          type="number"
          // value={quantity}
          onChange={(e) =>
            dispatch({ type: "VALUE", payload: e.target.value, id: el.id })
          }
          min={1}
          defaultValue={1}
        />
      </InputBlock>
      <ContainerButton>
        <Button
          onClick={() => addFoods(el.id)}
          borderRadius="rounder"
          variant="container"
          icon={<PlusIcon />}
        >
          Add
        </Button>
      </ContainerButton>
    </div>
  );
};

const InputBlock = styled.div`
  margin-bottom: 12px;
  label {
    font-size: 18px;
    color: #222222;
    margin-right: 20px;
    font-weight: 600;
  }
  input {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`;
