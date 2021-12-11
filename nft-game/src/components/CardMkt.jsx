import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import '../css/style.css'

const styles = {
    cardVendaGalinha: {
        width: "300px",
        border: "1px solid #696969",
        margin: "3px",
    },
    ajustarAoCentro: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default function CardMkt() {


    return (
        <>
            <Container>
                <Flex align="center"
                    justify="center"
                    direction="column"
                    p={10}
                    style={styles.cardVendaGalinha}>
                    <div id="galinha-normal" />
                    <Box p={1} mt={5} style={styles.ajustarAoCentro}>
                        <Text>Galinha Normal</Text>
                        <Button mt={5}>Comprar</Button>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

