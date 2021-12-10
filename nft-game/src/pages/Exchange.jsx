import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Grid, GridItem, Spacer, Text } from '@chakra-ui/layout'
import React from 'react'
import NavMenu from '../components/Layout/NavMenu';

export default function Exchange() {
    return (
        <>
            <NavMenu />
            <Container mt={8} p={5} maxW="100vh" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Grid templateColumns="repeat(3, 1fr)">
                    <GridItem colSpan={1}>
                        <Box p={5} w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Text p={4}>Moeda um para moeda dois</Text>
                            <Center><Button w="150px">Trocar</Button></Center>
                        </Box>
                    </GridItem>
                    <Spacer />
                    <GridItem colSpan={1}>
                        <Box p={5} w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Text p={4}>Moeda dois para moeda um</Text>
                            <Center><Button w="150px">Trocar</Button></Center>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
