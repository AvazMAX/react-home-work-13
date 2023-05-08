import React, { useContext } from "react";
import { Modal } from "../Ui/Modal";
import { BusketItem } from "./BusketItem";
import { AppProvider } from "../store/Context";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";

export const Busket = () => {
  const { newFoods ,total } = useContext(AppProvider);
  return (
    <Modal>
      <Content>
        {newFoods.length ? (
          <FixedWidthContainer>
            {newFoods.map((el) => {
              if (el.quantity > 0) {
                return <BusketItem key={el.id} el={el} />;
              }
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount totalPrice={total} />
      </Content>
    </Modal>
  );
};

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem 1rem;
`;
