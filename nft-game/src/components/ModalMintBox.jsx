import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Container, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Utils/requests'
import { CONFIG } from '../Utils/config'
import '../css/chickens.css'
import '../css/border.css'
import { rarity, gender, breed, renderImage, renderBorder, renderColor } from '../Utils/buildImg'


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
    const [open, setOpen] = useState(false)
    const [nft, setNft] = useState('')
    const [erro, setErro] = useState(false)

    const mintBox = () => {
        axios.get(`${BASE_URL}/mint/chicken/1`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(response => {
                setNft(response.data);
                console.log(localStorage.getItem('token'))
                onOpen()
            })
            .catch(function (error) {
                setErro(true)
                console.log("entrou")
                console.log(localStorage.getItem('token'))
                setOpen('isOpen')
                onOpen()
                console.log(error)
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
                                    <Heading className={renderColor(nft.rarity)}></Heading>
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
            </Modal> : erro ? <AlertDialog onClose={onClose} isOpen={isOpen}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Erro
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Something went wrong (Insufficient money)
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Cancelar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog> : <Container borderWidth="1px" borderRadius="lg"
                p={2} m={4} ><Heading size={'sm'} textAlign={'center'} > Clique no Botão Acima para comprar seu NFT </Heading>
            </Container>
            }

        </>
    )
}
/* {<Container borderWidth="1px" borderRadius="lg"
p={2} m={4} ><Heading size={'sm'} textAlign={'center'} > Clique no Botão Acima para comprar seu NFT </Heading>
</Container>} */