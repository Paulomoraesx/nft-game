import { Box } from "@chakra-ui/layout";
import React from "react";
import { useMoralis } from "react-moralis";
import { Redirect } from "react-router-dom";
import Auth from "./components/Auth";
import Routes from "./Routes";

function App() {
  const { isAuthenticated, isAuthUndefined } = useMoralis();
  return (
    <Box>
      {isAuthenticated ?
        <Routes /> : <>
          {!isAuthUndefined && <Redirect to="/" />}
          <Auth />
        </>}
    </Box>
  );
}

export default App;
