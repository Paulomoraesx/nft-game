import { Box, Button, Center, Container, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Utils/requests'
import { CONFIG } from '../Utils/config'
import '../css/chickens.css'
import '../css/border.css'

function gender(g) {
    switch (g) {
        case 1:
            g = "Galinha"
            break;
        case 2:
            g = "Galo"
            break;
        default:
            console.log(`Sorry`);
    }
    return g
}


function rarity(r) {
    switch (r) {
        case 1:
            r = "Common"
            break;
        case 2:
            r = "Rare"
            break;
        case 3:
            r = "Super Rare"
            break;
        case 4:
            r = "Epic"
            break;
        case 5:
            r = "Legendary"
            break;
        default:
            console.log(`Sorry`);
    }
    return r
}

function breed(b) {
    switch (b) {
        case 1:
            b = "Legorne"
            break;
        case 2:
            b = "Plymouth Rock"
            break;
        case 3:
            b = "Orpington"
            break;
        case 4:
            b = "Rhodia"
            break;
        case 5:
            b = "Kadaknath"
            break;
        case 6:
            b = "Brahma"
            break;
        case 7:
            b = "Sedosa"
            break;
        default:
            console.log(`Sorry`);
    }
    return b
}

function renderImage(a, b) {
    return "gw" + a + "_" + b
}

function renderBorder(a) {
    return "b" + a
}

function renderColor(a) {
    return "c" + a
}

const styleContainer = {
    ajustarAoCentro: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default function ModalMintBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nft, setNft] = useState('')

    const mintBox = () => {
        axios.get(`${BASE_URL}/mint/chicken/1`, CONFIG)
            .then(response => {
                setNft(response.data);
                onOpen()
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>
            <Button mt={5} onClick={() => mintBox()}>Comprar</Button>
            {nft ? <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>Congrats you got a {breed(rarity(nft.rarity))} type {gender(nft.gender)}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container style={styleContainer.ajustarAoCentro}>
                            <Flex minH={200} minW={100} w={100}
                                align="center"
                                justify="center"
                                direction="column"
                                p={5} borderWidth="1px" borderRadius="lg"
                                className={renderBorder(nft.rarity)}>
                                <Box p={2} m={2}>
                                    <Heading className={renderImage(nft.breed, nft.gender)}></Heading>
                                    <Heading class={renderColor(nft.rarity)}></Heading>
                                </Box>
                                <Heading size='sm'>{gender(nft.gender)}</Heading>
                                <Heading size='sm'>{breed(nft.breed)}</Heading>
                                {nft.gender === 2 ? <Heading size='sm'> ATK: {nft.atk} RES: {nft.res}</Heading> : null}
                                {nft.gender === 1 ? <Heading size='sm'> PROD: {nft.production}</Heading> : null}
                            </Flex>
                        </Container>
                    </ModalBody>

                    <ModalFooter>
                        <Center>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </Center>
                    </ModalFooter>
                </ModalContent>
            </Modal> : <Container borderWidth="1px" borderRadius="lg"
                p={2} m={4} ><Heading size={'sm'} textAlign={'center'} > Clique no Botão Acima para comprar seu NFT </Heading>
            </Container>
            }

        </>
    )
}
