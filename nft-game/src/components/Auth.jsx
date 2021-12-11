import { Image } from '@chakra-ui/image';
import { Box, Center, Container, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react'
import { useMoralis } from 'react-moralis';
import ErrorBox from './ErrorBox';
import NavMenu from './Layout/NavMenu';

/* const SignUp = () => {
    const { signup } = useMoralis();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <Stack spacing={3}>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <h1>{console.log(SignUp)}</h1>
        <Button onClick={() => signup(email, password, email)}>Cadastrar</Button>
    </Stack>
} */

/* const Login = () => {
    const { login } = useMoralis();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <Stack spacing={3}>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button onClick={() => login(email, password)}>Login</Button>
    </Stack>
} */

export default function Auth() {

    const { authError, user } = useMoralis();

    /*     const teste = () => {
            Moralis.transfer({ type: "native", receiver: "", amount: Moralis.Units.Token('') })
    
        } */

    return (
        <>
            <NavMenu />
            <Stack spacing={6}>
                {authError && <ErrorBox title="Autenticação falhou" message={authError.message} />
                }
                <Box m="5">
                    <Heading mt="5" >
                        <Center>Bem vindo ao galinheiro</Center>
                    </Heading>
                    <Heading >{user ? user.attributes.username :
                        <Center>Para entrar no jogo faça autenticação
                        </Center>}
                    </Heading>

                    <Container mt={8} p={5} maxW="200vh" maxH="200vh" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Grid templateColumns="repeat(2, 1fr)" >
                            <GridItem m={5} colSpan={1}>
                                <Box p={5} w="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <h1>About the project</h1>
                                    <Text p={4}>Lorem ipsum dolor sit amet consectetur adipiscing elit lectus, placerat luctus hac
                                        sollicitudin auctor aliquet magna,
                                        nostra purus feugiat class conubia massa curabitur. Phasellus finibus himenaeos augue inceptos
                                        mattis eros mi nullam arcu duis quis, ligula iaculis pretium hac dis vulputate leo taciti eleifend
                                        blandit maximus, lobortis litora etiam erat et vestibulum proin metus enim per. Nulla curabitur
                                        ullamcorper sociosqu porttitor fringilla quam libero feugiat lacus dictumst leo, pretium praesent
                                        natoque vel eget egestas nullam ac interdum congue, aptent eu nascetur luctus magna penatibus
                                        fermentum integer odio consequat. Taciti neque quam fringilla potenti at inceptos pulvinar,
                                        habitasse facilisis lobortis dui blandit velit nisl risus, dolor porttitor convallis lorem est quis.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem m={5} colSpan={1}>
                                <Box p={5} w="auto" borderWidth="1px" borderRadius="lg">
                                    <Center>
                                        <Image boxSize="300px" src="https://imagens.brasil.elpais.com/resizer/qp7kIV9wyJCRy-MXzdIUp035eKY=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4FXHC646HHEVGRJK3RPP7VJZPE.jpg" alt="rinha teste" />
                                    </Center>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Container>

                </Box>

            </Stack>
        </>
    )
}
