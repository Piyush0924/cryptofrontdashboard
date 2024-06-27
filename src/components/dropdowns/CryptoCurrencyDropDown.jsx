import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice"; // Corrected import path
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";

const Container = styled.div`
  height: 10vh;
  width: 100%;
  
  max-width: 400px;
  
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const Select = styled.select`
  width: 100%;
  
  height: 50px;
  overflow-y: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  padding: 1%;
  cursor: pointer;


  &:focus {
    outline: none;
    border: 2px solid #4a90e2;
  }
`;

const Option = styled.option`
  font-weight: 400;
`;

const CryptoCurrencyDropDown = () => {
  const cryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedCryptoCurrency
  );

  const dispatch = useDispatch();

  // Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };

  return (
    <Container>
      <Select onChange={handleChange} value={cryptoCurrency}>
        <Option value="" disabled>
          Crypto Currency
        </Option>
        {coinList &&
          coinList.map((coin) => (
            <Option value={coin.id} key={coin.id}>
              {coin.name.toUpperCase()}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

export { CryptoCurrencyDropDown };
