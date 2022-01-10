import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import NavMenu from '../components/Layout/NavMenu';
import { BASE_URL } from '../Utils/requests'




export default function Home() {
    const { Moralis, user, isAuthenticated } = useMoralis();

    const transferBSC = () => {
        Moralis.transfer({
            type: "native",
            amount: Moralis.Units.ETH("0.1"),
            receiver: "0xab609B70271b768e592B48028c211E12FCE3184D"
        });
    }

    function setarToken() {
        axios.post(`${BASE_URL}/auth`, {
            adress: user.attributes.ethAddress
        }).then(response => {
            console.log("issoo");
            localStorage.setItem("token", response.data.token)
        }).catch(function (error) {
            console.log("algo deu f")
            console.log(error);
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            setarToken()
        }
    })


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
