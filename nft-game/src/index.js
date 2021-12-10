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

const APP_ID = "qJQxveOuZtlafl974RxHtT91Zz5JmOKwKp4vw1ZI";
const SERVER_URL = "https://c62e8fhsxat5.usemoralis.com:2053/server";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
