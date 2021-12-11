import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import NavMenu from '../components/Layout/NavMenu';




export default function Home() {
    const { Moralis } = useMoralis();

    const transferBSC = () => {
        Moralis.transfer({
            type: "native",
            amount: Moralis.Units.ETH("0.1"),
            receiver: "0xab609B70271b768e592B48028c211E12FCE3184D"
        });
    }


    return (
        <>
            <NavMenu />
            <Box>
                <Button><Link className="btn btn-primary btn-lg" to="/profile">Perfil</Link></Button>
                <Button><Link className="btn btn-primary btn-lg" onClick={transferBSC}>Comprar</Link></Button>
            </Box>
        </>
    )
}
