import { Box, Button, Center, Container, Flex, Portal, Text, Wrap } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavMenu from '../../components/Layout/NavMenu'
import { CONFIG } from '../../Utils/config'
import { BASE_URL } from '../../Utils/requests'
import ContainerGame from './ContainerGame'



export default function PlayGame() {

    var [lista, setLista] = useState('')

    const listNfts = () => {
        axios.get(`${BASE_URL}/owner/henhouse`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(response => {
                setLista(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        listNfts()
    }, [lista])

    return (
        <>
            <NavMenu />
            <Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}
            >Granja Game</Text>
            <Container p={2} maxW="container.xl" borderWidth="1px" borderRadius="lg">
                <Center>
                    <Wrap >
                        {Array.isArray(lista) && lista.map((henhouses) => <ContainerGame nfts={henhouses} key={henhouses.id} />)}
                    </Wrap>
                </Center>
            </Container>
        </>
    )
}
