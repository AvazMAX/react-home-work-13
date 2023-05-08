import React, { useContext } from "react";
import { Button } from "../Ui/Button";
import styled from "styled-components";
import { AppProvider } from "../store/Context";

export const BusketItem = ({ el }) => {
  const { dispatch } = useContext(AppProvider);
  return (
    <Container>
      <h4>{el.title}</h4>
      <Content>
        <InformationBlock>
          <p>{el.price}$</p>
          <span>x {el.quantity}</span>
        </InformationBlock>
        <ButtonBlock>
          <Button
            borderRadius="squared"
            variant="outline"
            onClick={() => dispatch({ type: "MINUS", payload: el.id })}
          >
            -
          </Button>
          <Button
            borderRadius="squared"
            variant="outline"
            onClick={() => dispatch({ type: "PLUS", payload: el.id })}
          >
            +
          </Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 24px 0;
  border-bottom: 2px solid #d6d6d6;
  h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 18px;
    color: #ad5502;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
  }
`;
