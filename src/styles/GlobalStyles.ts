import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary--0: rgb(0,196,106);
  --color-primary--1: rgba(0,196,106, 0.8);
  --color-secondary--0: rgb(59,130,246);
  --color-secondary--1: rgba(59,130,246, 0.8);
  --color-third: rgb(255,181,69);

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
  cursor: pointer;
  transition: all 0.5s;
}

input:focus {
  outline: none;
  background-color: #fff;
}

a:link,
a:visited {
  text-decoration: none;
  font-weight: 600;
  color: var(--color-light--2);
  text-transform: uppercase;
  transition: all 0.5s;
}


`;

export default GlobalStyles;
