import{u as i,a,j as r,c as p}from"./index-3d8844dd.js";import{p as t}from"./styled-components.browser.esm-f29a7b16.js";import{s as l}from"./currencyApiSlice-985e2a1c.js";import"./emotion-unitless.esm-e90fc357.js";const d=t.div`
  height: 10vh;
  min-width: 50px;
  display: flex;
  align-items: center;
`,u=t.select`
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
`,f=()=>{const o=i(e=>e.selectCurrency.selectedCurrency),n=a(),c=e=>{n(p(e.target.value))};return r.jsx(d,{children:r.jsxs(u,{onChange:c,value:o,children:[r.jsx(s,{value:"",disabled:!0,children:"Select Currency"}),l.map(e=>r.jsx(s,{value:e,children:e.toUpperCase()},e))]})})};export{f as CurrencyDropDown};
