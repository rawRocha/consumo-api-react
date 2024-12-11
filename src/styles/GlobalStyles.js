/*
  Estilos globais.
*/

import styled, { createGlobalStyle } from 'styled-components';

import {
  primaryColor,
  primaryDarkColor,
  lightColor,
  errorColor,
  successColor,
} from '../config/colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border: 4px;
    font-weight: 700;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 300ms ease-in-out;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${successColor};
    color: #fff;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${errorColor};
    color: #fff;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: ${lightColor};
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  > * {
    margin: 10px; /* Aplica margem a todos os filhos diretos. */
  }
`;
