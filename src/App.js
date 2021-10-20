import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss'

const theme = createTheme({
  palette: {
    primary: {
      light: '#fe579d',
      main: '#fe579d',
      dark: '#fe579d',      
      contrastText: '#fff',
    },
    secondary: {
      light: '#3eecd3',
      main: '#3eecd3',
      dark: '#3eecd3',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme = {theme}>
        <Provider store = {store}>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
