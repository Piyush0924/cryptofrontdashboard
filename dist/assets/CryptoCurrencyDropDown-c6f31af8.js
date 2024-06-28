import{u as c,a as d,b as p,j as t,s as l}from"./index-3d8844dd.js";import{p as r}from"./styled-components.browser.esm-f29a7b16.js";import"./emotion-unitless.esm-e90fc357.js";const u=r.div`
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
`,h=r.select`
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
`,n=r.option`
  font-weight: 400;
`,x=()=>{const i=c(e=>e.selectCryptoCurrency.selectedCryptoCurrency),s=d(),{data:o}=p(),a=e=>{s(l(e.target.value))};return t.jsx(u,{children:t.jsxs(h,{onChange:a,value:i,children:[t.jsx(n,{value:"",disabled:!0,children:"Crypto Currency"}),o&&o.map(e=>t.jsx(n,{value:e.id,children:e.name.toUpperCase()},e.id))]})})};export{x as CryptoCurrencyDropDown};
