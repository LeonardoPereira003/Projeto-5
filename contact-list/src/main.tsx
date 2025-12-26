  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { Provider } from 'react-redux'
  import { ThemeProvider } from 'styled-components'

  import { store } from './app/store'
  import { App } from './App'
  import { GlobalStyle } from './styles/GlobalStyle'
  import { darkTheme } from './styles/theme'

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
