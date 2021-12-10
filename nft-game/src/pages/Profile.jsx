import { Button } from '@chakra-ui/button';
import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'
import { useMoralis } from 'react-moralis';
import NavMenu from '../components/Layout/NavMenu';

/* const UserAndPassRandom = (props) => {
    return <Box>
        <Text mt={10} align="center">
            Seu Username é : {props.user}
        </Text>
        <Text mt={10} align="center">
            Seu Password é : {props.senha}
        </Text>
    </Box>
} */


export default function Profile(props) {
    const { logout } = useMoralis();
    /*     const [gerou, setGerou] = useState(false);
        const [usuario, setUsuario] = useState('');
        const [password, setPassword] = useState('');
    
        const gerarUserAndPassAleatorio = () => {
            const randomUser = (Math.random().toString(36).substr(2, 8))
            setUsuario(randomUser)
            const randomPassword = Math.random().toString(36).substr(2, 8);
            setPassword(randomPassword)
        }
    
        const clicou = () => {
            gerarUserAndPassAleatorio()
            setUserData({
                username: usuario,
                password: password,
            })
            setGerou(true)
        } */

    return (
        <>
            <NavMenu />
            <Box>
                <Stack spacing={3}>
                    <Button onClick={() => logout()}>sair</Button>
                    {/*                 {!gerou ? <Button onClick={() => clicou()}>Gerar</Button> : <br />}
                {gerou ? (<UserAndPassRandom user={usuario} senha={password} />)
                    : (<Text mt={10} align="center">
                        Clique em Gerar para saber seu Username e Password
                    </Text>)} */}
                </Stack>
            </Box>
        </>

    );
}






/*     const [username, setUsername] = useState(user.attributes.username);
    const [email, setEmail] = useState(user.attributes.email);
    const [password, setPassword] = useState('');

    const handleSave = () => {
        setUserData({
            username,
            email,
            password: password === "" ? undefined : password
        })
    }

    return (
        <Box>
            <Stack spacing={3}>
                {userError && <ErrorBox title="Algo deu errado na atualização" message={userError.message} />}
                <Box>
                    <Text>Username</Text>
                    <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
                </Box>
                <Box>
                    <Text>Email</Text>
                    <Input value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
                </Box>
                <Box>
                    <Text>Password</Text>
                    <Input value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
                </Box>
                <Button onClick={handleSave} isLoading={isUserUpdating}>Save Changes</Button>
            </Stack>
        </Box>
    ) */

