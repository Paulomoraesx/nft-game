import { Alert, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, Box, Button, Center, Container, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
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

    const mintHenHouse = () => {
        axios.get(`${BASE_URL}/mint/henhouse/2`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(response => {
                setNft(response.data);
                onOpen()
            })
            .catch(function (error) {
                setErro(true)
                setOpen('isOpen')
                onOpen()
                console.log(error)
            })
    }

    return (
        <>
            <Button mt={5} onClick={() => mintHenHouse()}>Comprar</Button>
            {nft ? <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Congrats!!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container style={styleContainer.ajustarAoCentro}>
                            <Flex
                            >
                                <Alert
                                    status='success'
                                    variant='subtle'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    textAlign='center'
                                    height='200px'
                                >
                                    <AlertIcon boxSize='40px' mr={0} />
                                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                                        Henhouse successfully obtained
                                    </AlertTitle>
                                </Alert>

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
                p={2} m={4} ><Heading size={'sm'} textAlign={'center'} > Clique no Botão Acima para comprar sua Henhouse </Heading>
            </Container>
            }

        </>
    )
}
/* {<Container borderWidth="1px" borderRadius="lg"
p={2} m={4} ><Heading size={'sm'} textAlign={'center'} > Clique no Botão Acima para comprar seu NFT </Heading>
</Container>} */