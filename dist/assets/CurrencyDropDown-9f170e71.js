import{u as l,a as u,c as p,j as r,d as h}from"./index-3c66cd65.js";import{p as t}from"./styled-components.browser.esm-4aa0b125.js";import"./emotion-unitless.esm-e90fc357.js";const x=t.div`
  height: 10vh;
  min-width: 50px;
  display: flex;
  align-items: center;
`,g=t.select`
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  margin: 1%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`,s=t.option`
  text-transform: uppercase;
  font-weight: 400;
`,v=()=>{const o=l(e=>e.selectCurrency.selectedCurrency),i=u(),c=e=>{i(h(e.target.value))},{data:n,error:a,isLoading:d}=p();return d?r.jsx("div",{children:"Loading..."}):a?r.jsx("div",{children:"Error fetching data"}):r.jsx(x,{children:r.jsxs(g,{onChange:c,value:o,children:[r.jsx(s,{value:"currency",disabled:!0,children:"Currency"}),n&&n.map(e=>r.jsx(s,{value:e,children:e.toUpperCase()},e))]})})};export{v as CurrencyDropDown};
