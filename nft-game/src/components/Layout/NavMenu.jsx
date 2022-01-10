import { Button } from '@chakra-ui/button'
import { Box, Flex, HStack, Spacer, Center } from '@chakra-ui/layout'
import { Menu } from '@chakra-ui/menu'
import { React, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMoralis } from 'react-moralis';
import { Tag } from '@chakra-ui/react'



export default function NavMenu() {
    const { logout, user, isAuthenticated, isAuthenticating, authenticate } = useMoralis();


    function logoutAndRomoveToken() {
        logout()
        localStorage.removeItem('token')
    }

    return (
        <Flex borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p={2} mr={2}>
                <Menu >
                    <HStack spacing="10px">
                        <Button><Link to="/">Home</Link></Button>
                        {isAuthenticated ? <Button><Link to="/buyNft">Buy NFT</Link></Button> : null}
                        {isAuthenticated ? <Button><Link to="/marketPlace">MarketPlace</Link></Button> : null}
                        {isAuthenticated ? <Button><Link to="/exchange">Exchange</Link></Button> : null}
                        {isAuthenticated ? <Button><Link to="/nftsWallet">ListarNFTS</Link></Button> : null}
                        {isAuthenticated ? <Button><Link to="/playGame">Play</Link></Button> : null}
                    </HStack>
                </Menu>
            </Box>
            <Spacer />
            {!isAuthenticated ? <Button p={2} m={2} isLoading={isAuthenticating}
                onClick={() => authenticate()}>
                Autenticar Com Metamask
            </Button> : <Box p={2}>
                <Center>
                    <Tag p={2} m={2} size={'lg'}>{user.attributes.ethAddress}</Tag>
                    <Button onClick={() => logoutAndRomoveToken()}>Logout</Button>
                </Center>
            </Box>}
        </Flex>
    )
}
