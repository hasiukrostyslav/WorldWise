import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary--0: rgb(0,196,106);
  --color-primary--1: rgba(0,196,106, 0.8);
  --color-primary--2: rgba(0,196,106, 0.6);
  --color-secondary--0: rgb(59,130,246);
  --color-secondary--1: rgba(59,130,246, 0.8);
  --color-secondary--2: rgba(59,130,246, 0.6);
  --color-third: rgb(255,181,69);
  --color-danger--0: rgb(239, 68, 68);
  --color-danger--1: rgba(239, 68, 68, 0.8);
  --color-danger--2: rgba(239, 68, 68, 0.6);

  --color-dark--0: #242a2e;
  --color-dark--1: #2d3439;
  --color-dark--2: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: #d6dee0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  
}

body {
  font-family: 'Roboto', sans-serif;
  color: var(--color-light--2);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
}

ul {
  list-style: none;
}


h1 {
  font-size: 4.6rem;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: center;
  color: var(--color-light--3);
}

h3 {
  font-size: 2rem;
    letter-spacing: 0.2px;
    text-align: center;
    color: var(--color-light--1);
}

label {
  font-size: 1.6rem;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-light--3);
  transition: all 0.2s;
}

button{
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 600;
  line-height: inherit;
  cursor: pointer;
  transition: all 0.5s;
}



input:focus, textarea:focus {
  outline: 4px solid var(--color-primary--0);
  background-color: #fff;
}

a:link,
a:visited {
  text-decoration: none;
  font-weight: 600;
  transition: all 0.5s;
}

.leaflet-popup .leaflet-popup-content-wrapper {
  background-color: var(--color-dark--1);
  color: var(--color-light--2);
  border-radius: 5px;
  padding-right: 0.6rem;
}

.leaflet-popup .leaflet-popup-content {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.leaflet-popup .leaflet-popup-content img {
  width: 2.5rem;
}

.leaflet-popup .leaflet-popup-content span {
  font-size: 2rem;
  line-height: 1;
}

.leaflet-popup .leaflet-popup-tip {
  background-color: var(--color-dark--1);
}

.leaflet-popup-content-wrapper {
  border-left: 5px solid var(--color-primary--2);
}

.MuiDateCalendar-root {
    border-radius: 5px;
    background-color: var(--color-light--3);
    font-weight: 600;
  }


 .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root,.css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel  {
  font-size: 1rem !important;
 }

 .css-cyfsxc-MuiPickersCalendarHeader-labelContainer {
  font-size: 1.5rem !important;
}

.css-1vooibu-MuiSvgIcon-root, .css-1tkx1wf-MuiSvgIcon-root-MuiPickersCalendarHeader-switchViewIcon {
  width: 2rem !important;
  height: 2rem !important;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.6;
}

`;

export default GlobalStyles;
