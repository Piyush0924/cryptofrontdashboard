import React from "react";
import styled from "styled-components"; // Importing styled-components for styling
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from React-Redux
import { setCurrency } from "../../features/currencyDropDownSlice"; // Importing the setCurrency action
import { supported_vs_currencies } from "../../features/api/currencyApiSlice"; // Importing the list of supported currencies

// Styled component for the container
const Container = styled.div`
  height: 10vh; // Set height to 10% of viewport height
  min-width: 50px; // Minimum width of 50px
  display: flex; // Use flexbox for layout
  align-items: center; // Center items vertically
`;

// Styled component for the select element
const Select = styled.select`
  width: 100%; // Full width of container
  height: 50px; // Fixed height of 50px
  overflow: scroll; // Allow vertical scrolling
  font-weight: 700; // Bold font weight
  background-color: #e6ecff; // Light blue background color
  margin: 1%; // Margin around the element
  border: none; // Remove border
  border-radius: 10px; // Rounded corners
  padding: 5px; // Padding inside the element
  cursor: pointer; // Pointer cursor on hover
`;

// Styled component for the option elements
const Option = styled.option`
  text-transform: uppercase; // Convert text to uppercase
  font-weight: 400; // Normal font weight
`;

// CurrencyDropDown component definition
const CurrencyDropDown = () => {
  // Get selected currency from the Redux store
  const currency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );

  const dispatch = useDispatch(); // Initialize dispatch function

  // Handle change event for the dropdown
  const handleChange = (e) => {
    dispatch(setCurrency(e.target.value)); // Dispatch setCurrency action with selected value
  };

  return (
    <Container>
      <Select onChange={handleChange} value={currency}> {/* Bind selected value and handle change event */}
        <Option value="" disabled> {/* Default option */}
          Select Currency
        </Option>
        {supported_vs_currencies.map((currencyName) => ( // Map over supported currencies to create options
          <Option value={currencyName} key={currencyName}> {/* Set value and key for each option */}
            {currencyName.toUpperCase()} {/* Display currency name in uppercase */}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export { CurrencyDropDown }; 
