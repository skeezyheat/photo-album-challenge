import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import './styles/reset.css'

import { App } from './App'

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
  font-size: 16px;
}

body {
  display: flex;
  font-family: Helvetica, sans-serif;
}

#root {
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #f1f1f1;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
