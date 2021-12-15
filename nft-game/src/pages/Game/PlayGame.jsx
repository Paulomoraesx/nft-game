import { Box, Button, Center, Container, Portal, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavMenu from '../../components/Layout/NavMenu'
import { game } from './configGame'



export default function PlayGame() {
    const { initialize, setInitialize } = useState(false)
    const iniciar = () => {
        setInitialize(true)
    }
    const Teste = () => {

        return (
            <>
                <Container>
                    <div game={game} initialize={initialize} ></div>
                </Container>
            </>
        )
    }

    return (
        <>
            <NavMenu />
            <Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}
            >Granja Game</Text>
            <Container p={2} maxW="container.xl" borderWidth="1px" borderRadius="lg">
                <Center>
                    <Teste />
                    <Button onClick={() => iniciar()}>Iniciar</Button>
                </Center>
            </Container>
        </>
    )
}
/* 
    ReactDOM.render(
        <ion-phaser ref={el => el.game = game} />,
        document.getElementById('root'));

    defineIonPhaser(window);
} */
/* const game = {
    width: "100%",
    height: "100%",
    type: Phaser.AUTO,
    scene: {
        init: function () {
        },
        create: function () {
        },
        update: function () {
        }
    }
}


export default function App() {
    const gameRef = useRef(null)
    // Call `setInitialize` when you want to initialize your game! :)
    const [initialize, setInitialize] = useState(false)
    const destroy = () => {
        if (gameRef.current) {
            gameRef.current.destroy()
        }
        setInitialize(false)
    }
    const iniciar = () => {
        setInitialize(true)
    }
    const Teste = () => {

        return (
            <>
                <div ref={gameRef} game={game} initialize={initialize} ></div>
            </>
        )
    }
    return (
        <>
            <Teste />
            <Button onClick={() => iniciar()}>Initialize</Button>
            <Button onClick={destroy}>Destroy</Button>
        </>
    )
} */