import React, { useContext } from "react";
import busket from "../../Image/Icons/Vector.svg";
import styled from "styled-components";
import { AppProvider } from "../store/Context";

export const OrderBusket = ({ children, onClick }) => {
  const { clickCss, quantity } = useContext(AppProvider);

  return (
    <BtnCartHeader
      className={clickCss}
      onClick={onClick}
    >
      <img src={busket} />
      <OrderBusketTitle>{children}</OrderBusketTitle>
      <OrderBusketCount>{quantity}</OrderBusketCount>
    </BtnCartHeader>
  );
};
const BtnCartHeader = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  padding: 0 22px;
  &:hover {
    background-color: #4d1601;
  }
  &.move  {
  animation: bump 300ms ease-out;
}
@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`;
const OrderBusketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;
const OrderBusketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;
