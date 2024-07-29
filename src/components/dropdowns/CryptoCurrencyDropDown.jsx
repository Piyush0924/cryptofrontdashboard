import React from "react";
import styled from "styled-components"; // Importing styled-components for styling
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React-Redux
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice"; // Importing the setCryptoCurrency action
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice"; // Importing the API query hook

// Styled component for the container
const Container = styled.div`
  height: 10vh; // Setting height to 10% of viewport height
  width: 100%; // Full width of parent container
  max-width: 400px; // Maximum width of 400px
  margin: 0 auto; // Center horizontally
  display: flex; // Flexbox for alignment
  justify-content: center; // Center content horizontally
  align-items: center; // Center content vertically

  @media (min-width: 768px) {
    width: 50%; // Width is 50% for medium screens and up
  }

  @media (min-width: 1024px) {
    width: 25%; // Width is 25% for large screens and up
  }
`;

// Styled component for the select element
const Select = styled.select`
  width: 100%; // Full width of container
  height: 50px; // Fixed height of 50px
  overflow-y: scroll; // Allow vertical scrolling if needed
  font-weight: 700; // Bold font weight
  background-color: #e6ecff; // Light blue background color
  border: none; // No border
  border-radius: 10px; // Rounded corners
  font-weight: 500; // Medium font weight
  padding: 1%; // Padding inside the select element
  cursor: pointer; // Pointer cursor on hover

  &:focus {
    outline: none; // Remove default outline
    border: 2px solid #4a90e2; // Blue border on focus
  }
`;

// Styled component for the option elements
const Option = styled.option`
  font-weight: 400; // Regular font weight
`;

// CryptoCurrencyDropDown component definition
const CryptoCurrencyDropDown = () => {
  // Get selected cryptocurrency from the Redux store
  const cryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedCryptoCurrency
  );
 
  const dispatch = useDispatch(); // Initialize dispatch function

  // Fetch coin list data using RTK Query
  const { data: coinList } = useGetAllCoinsQuery();

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value)); // Dispatch setCryptoCurrency action with selected value
  };

  return (
    <Container>
      <Select onChange={handleChange} value={cryptoCurrency}> {/* Bind selected value and handle change event */}
        <Option value="" disabled> {/* Default option */}
          Crypto Currency
        </Option>
        {coinList && // Check if coinList is available
          coinList.map((coin) => ( // Map over coinList to create options
            <Option value={coin.id} key={coin.id}> {/* Set value and key for each option */}
              {coin.name.toUpperCase()} {/* Display coin name in uppercase */}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

export { CryptoCurrencyDropDown }; 