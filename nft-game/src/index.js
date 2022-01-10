import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Auth from './components/Auth';
import reportWebVitals from './reportWebVitals';
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
});

const APP_ID = "EKHaHHVNDPkBFNM10AY1aHF0MepQOvEalbeRyB3T";
const SERVER_URL = "https://mgbm6tvjqk6o.usemoralis.com:2053/server";

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Auth />
      </div>
    );
  }
};

ReactDOM.render(
  /*   <React.StrictMode> */
  <ChakraProvider theme={theme}>
    <Application />
  </ChakraProvider>,
  /* </React.StrictMode>, */
  document.getElementById('root')
);