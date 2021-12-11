import { Container, Flex, Grid, GridItem, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import NavMenu from '../components/Layout/NavMenu'
import CardMkt from '../components/CardMkt'
import SideMenu from '../components/Layout/SideMenu'
import axios from 'axios'
import { BASE_URL } from '../Utils/requests'
import { CONFIG } from '../Utils/config'
import { Button } from '@chakra-ui/react'

const Nfts = ({ nfts }) => {
    console.log(nfts)
    return (
        <Container display={"flex"} flexDirection={"column"} id={nfts.id}>
            {nfts ? (
                <Flex
                    align="center"
                    justify="center"
                    direction="column" p={5} borderWidth="1px" borderRadius="lg">
                    <h3>rarity: {nfts.rarity}</h3>
                    <p> atk: {nfts.atk}</p>
                    <p> res: {nfts.res}</p>
                    <p> breed: {nfts.breed}</p>
                </Flex>
            ) : (
                <p>Usuário não encontrado</p>
            )}
        </Container>
    );
};

export default function NftsWallet() {

    var [lista, setLista] = useState('')

    const testarLista = () => {
        axios.get(`${BASE_URL}/owner/nft`, CONFIG)
            .then(response => {
                setLista(response.data)
            })
    }

    useEffect(() => {
        testarLista()
    }, [lista])



    return (
        <>
            <NavMenu />
            <Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}
            >Your's NFTs</Text>
            <Container p={2} maxW="container.xl" borderWidth="1px" borderRadius="lg">
                <Grid templateColumns="repeat(3, 1fr)">
                    <GridItem p={5} colSpan={1}>
                    </GridItem>
                    <GridItem colSpan={7}>
                        <Container p={5} maxW='container.xl' borderWidth="1px" borderRadius="lg">
                            <Flex /* style={styles.mainCard} */>
                                <Container>
                                    <div>
                                        {Array.isArray(lista) && lista.map((nfts) => <Nfts nfts={nfts} key={nfts.id} />)}
                                    </div>
                                </Container>
                            </Flex>
                        </Container>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
