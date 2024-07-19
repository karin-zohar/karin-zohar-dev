import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { RootCmp } from './root-cmp'
import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <ThemeProvider>
    <Router>
      <RootCmp />
    </Router>
  </ThemeProvider>

)

