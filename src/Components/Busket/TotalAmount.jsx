import React, { useContext } from "react";
import { Button } from "../Ui/Button";
import styled from "styled-components";
import { AppProvider } from "../store/Context";

export const TotalAmount = ({ onOrder }) => {
  const { setOpen,total } = useContext(AppProvider);
  console.log(total);
  return (
    <Container>
      <TextContaner>
        <Label>Total Amount</Label>
        <Price>${total}</Price>
      </TextContaner>
      <ButtonContainer>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button onClick={onOrder}>Order</Button>
      </ButtonContainer>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 30px;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;

const TextContaner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;
