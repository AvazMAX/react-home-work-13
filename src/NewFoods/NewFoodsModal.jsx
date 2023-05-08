import React, { useContext } from "react";
import { AppProvider } from "../Components/store/Context";
import styled from "styled-components";
import { Button } from "../Components/Ui/Button";

export const NewFoodsModal = () => {
  const { newFoods, closeModal } = useContext(AppProvider);
  console.log(newFoods);
  return (
    <DovBackdrop>
      <DivNewFoodsMap>
        {newFoods.map((el) => (
          <div key={el.id}>
            <DivTitPr>
              <div>
                <h3>{el.title}</h3>
              </div>
              <DivPriceQunt>
                <p>${el.price}</p>
                <h5>x0</h5>
                <button>-</button>
                <button>+</button>
              </DivPriceQunt>
            </DivTitPr>
            <Hr />
          </div>
        ))}
        <DivTotal>
          <h2>Total Amount</h2>
          <h3>$ 200.99</h3>
        </DivTotal>
        <DivBtnCloseOrder>
          <Button
            color={"#8a2b06"}
            backgroundColor={"#fff"}
            border={"1px solid #8a2b06"}
            onClick={closeModal}
          >
            Close
          </Button>
          <Button>Order</Button>
        </DivBtnCloseOrder>
      </DivNewFoodsMap>
    </DovBackdrop>
  );
};

const DovBackdrop = styled.div`
  background-color: #0000009a;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
`;

const DivTitPr = styled.div`
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
const DivNewFoodsMap = styled.div`
  background-color: #fff;
  width: 671px;
  height: 437px;
  border-radius: 20px;
  padding: 40px 32px;
  margin-top: 100px;
`;
const DivPriceQunt = styled.div`
  display: flex;
  gap: 47px;
  margin-top: 12px;
  h5 {
    width: 46px;
    height: 36px;
    font-weight: 500;
    font-size: 16px;
    color: #222222;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    text-align: center;
    padding-top: 5px;
    margin-right: 252px;
  }
`;
const DivTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 29px;
  h3 {
    color: #8a2b06;
    font-size: 22px;
  }
`;
const DivBtnCloseOrder = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-top: 24px;
`;
const Hr = styled.hr`
  border: 1px solid #b0b0b0;
  margin: 20px 0;
`;
