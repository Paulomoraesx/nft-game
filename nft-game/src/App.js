import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import { Input } from "@chakra-ui/input";
import { Box, Container } from "@chakra-ui/layout";
import { useState } from "react";
import { useMoralis } from "react-moralis";


const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <Box>
    <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    <h1>{console.log(SignUp)}</h1>
    <Button onClick={() => signup(email, password)}>Cadastrar</Button>
  </Box>
}


function App() {
  const { authenticate, isAuthenticated, isAuthenticating, authError, logout } = useMoralis();

  if (isAuthenticated) {
    return <Container>
      <h1>Bem vindo ao galinheiro do dinheiro</h1>
      <Button onClick={() => logout()}>Sair</Button>
    </Container>
  }

  return (
    <Container>
      <h2>Galinheiro</h2>
      {authError && <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Erro na autenticação</AlertTitle>
          <AlertDescription display="block">
            F total, a autenticação falhou!
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>}

      {/* <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Autenticar Com metamask</Button> */}
      <SignUp />

    </Container>
  );
}

export default App;
