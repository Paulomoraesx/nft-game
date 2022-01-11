import { Container, Flex, Grid, GridItem, Text, Stack, Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import NavMenu from '../components/Layout/NavMenu'
import axios from 'axios'
import { BASE_URL } from '../Utils/requests'
import { CONFIG } from '../Utils/config'
import '../css/chickens.css'
import '../css/border.css'
import { rarity, gender, breed, renderImage, renderBorder, renderColor } from '../Utils/buildImg'
import { Button, Radio, RadioGroup } from '@chakra-ui/react'


const Nfts = ({ nfts }) => {
	return (
		<Container display={"flex"} flexDirection={"column"}>
			{nfts ? (
				<Flex
					align="center"
					justify="center"
					direction="column" p={5} borderWidth="1px" borderRadius="lg">
					<div className={renderBorder(nfts.rarity)}>
						<p className={renderImage(nfts.breed, nfts.gender)}></p>
					</div>
					<h3 className={renderColor(nfts.rarity)}>#{nfts.id} {rarity(nfts.rarity)}</h3>
					<p>{gender(nfts.gender)}</p>
					<p>{breed(nfts.breed)}</p>
					{nfts.gender === 2 ? <p> ATK: {nfts.atk} RES: {nfts.res}</p> : null}
					{nfts.gender === 1 ? <p> PROD: {nfts.production}</p> : null}

				</Flex>
			) : (
				<p>Usuário não encontrado</p>
			)}
		</Container>
	);
};


export default function NftsWallet() {
	var [lista, setLista] = useState([])
	var [listaOrdenada, setListaOrdenada] = useState([])
	var [checkOrdenacao, setCheckOrdenacao] = useState(false)

	const listNfts = () => {
		axios.get(`${BASE_URL}/owner/nft`, {
			headers: {
				Authorization: "Bearer " + localStorage.getItem('token')
			}
		})
			.then(response => {
				setLista(response.data)
			}).catch(function (error) {
				console.log(error);
				console.log(localStorage.getItem('token'), "token de erro")
			})
	}

	useEffect(() => {
		listNfts()
	})


	const ordenarNftsPorRaridade = (raridade) => {
		setCheckOrdenacao(true)

		if (raridade === "Maior Raridade") {
			setListaOrdenada(lista.sort(function (a, b) {
				if (a.rarity > b.rarity) {
					return -1;
				} else {
					return true
				}
			}))
		} else {
			setListaOrdenada(lista.sort(function (a, b) {
				if (a.rarity < b.rarity) {
					return -1;
				} else {
					return true
				}
			}))
		}
	}

	return (
		<>
			<NavMenu />
			<Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}
			>Your's NFTs</Text>
			<Container p={2} maxW="container.xl" borderWidth="1px" borderRadius="lg">
				<Grid templateColumns="repeat(5, 1fr)">
					<GridItem p={5} ml={5} colSpan={1}>
						<Text ml={5}>Ordernar 	por Raridade:</Text>
						<Box p={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
							<RadioGroup defaultValue='1'>
								<Stack>
									<Radio value='2' onClick={() => ordenarNftsPorRaridade("Maior Raridade")}>Maior</Radio>
									<Radio value='3' onClick={() => ordenarNftsPorRaridade("Menor Raridade")}>Menor</Radio>
								</Stack>
							</RadioGroup>
						</Box>
					</GridItem>
					<GridItem colSpan={4}>
						<Container p={5} maxW='1000px' borderWidth="1px" borderRadius="lg">
							<Grid templateColumns='repeat(3, 1fr)' gap={3}>
								{checkOrdenacao === false ? Array.isArray(lista) && lista.map((nfts) =>
									<Nfts nfts={nfts} key={nfts.id} />) :
									Array.isArray(listaOrdenada) && listaOrdenada.map((nfts) =>
										<Nfts nfts={nfts} key={nfts.id} />)}
							</Grid>
						</Container>
					</GridItem>
				</Grid>
			</Container>
		</>
	)
}
