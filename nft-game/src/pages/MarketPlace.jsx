import { Container, Wrap, Center, Grid, GridItem, Text } from '@chakra-ui/layout'
import React from 'react'
import NavMenu from '../components/Layout/NavMenu'
import CardMkt from '../components/CardMkt'
import SideMenu from '../components/Layout/SideMenu'


export default function MarketPlace() {

    return (
        <>
            <NavMenu />
            <Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}
            >MarketPlace</Text>
            <Container p={10} maxW="container.xl" borderWidth="1px" borderRadius="lg">
                <Grid templateColumns="repeat(8, 1fr)">
                    <GridItem p={5} colSpan={1}>
                        <SideMenu />
                    </GridItem>
                    <GridItem>
                        <Container p={5} borderWidth="1px" borderRadius="lg">
                            <Center>
                                <Wrap >
                                    <CardMkt />
                                    <CardMkt />
                                    <CardMkt />
                                </Wrap>
                            </Center>
                        </Container>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
