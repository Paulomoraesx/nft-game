import { Container, Flex, Grid, GridItem, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import NavMenu from '../components/Layout/NavMenu'
import CardMkt from '../components/CardMkt'
import SideMenu from '../components/Layout/SideMenu'
import axios from 'axios'
import { BASE_URL } from '../Utils/requests'
import { CONFIG } from '../Utils/config'
import { Button } from '@chakra-ui/react'
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


const Nfts = ({ nfts }) => {
	return (
		<Container display={"flex"} flexDirection={"column"}>
			{nfts ? (
				<Flex
					id={nfts.id}
					align="center"
					justify="center"
					direction="column" p={5} borderWidth="1px" borderRadius="lg">
					<div class={renderBorder(nfts.rarity)}>
						<p class={renderImage(nfts.breed, nfts.gender)}></p>
					</div>
					<h3 class={renderColor(nfts.rarity)}>#{nfts.id} {rarity(nfts.rarity)}</h3>
					<p>{gender(nfts.gender)}</p>
					<p>{breed(nfts.breed)}</p>
					{nfts.gender == 2 ? <p> ATK: {nfts.atk} RES: {nfts.res}</p> : null }
					{nfts.gender == 1 ? <p> PROD: {nfts.production}</p> : null }
					
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
							<Grid templateColumns='repeat(4, 1fr)' gap={5}>
								{Array.isArray(lista) && lista.map((nfts) => <Nfts nfts={nfts} key={nfts.id} />)}
							</Grid>
						</Container>
					</GridItem>
				</Grid>
			</Container>
		</>
	)
}
