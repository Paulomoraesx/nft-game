import React from 'react'
import { useMoralis } from 'react-moralis'
import { Box, Center, Container, Flex, Grid, GridItem, Spacer, Text } from '@chakra-ui/layout';
import NavMenu from './Layout/NavMenu';
import { Button } from '@chakra-ui/button';
import '../css/style.css'
import '../css/chickens.css'
import axios from 'axios';
import { BASE_URL } from '../Utils/requests';
import { CONFIG } from '../Utils/config';

const styles = {
	cardVendaGalinha: {
		width: "300px",
		border: "1px solid #696969",
		margin: "3px",
	},
	ajustarAoCentro: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	}
}



const mintBox = () => {
	axios.get(`${BASE_URL}/mint/chicken/1`, CONFIG)
		.then(response => {
			console.log(response.data.rarity_name);
		})
		.catch(function (error) {
			console.log(error);
		})
}

export default function CardGalinha() {
	const { Moralis } = useMoralis();
	var galinhaNormal = "0.07"
	var galinhaRara = "0.1"

	const transferBSC = (valor) => {
		Moralis.transfer({
			type: "native",
			amount: Moralis.Units.ETH(valor),
			receiver: "0xab609B70271b768e592B48028c211E12FCE3184D"
		});
	}


	return (
		<>
			<NavMenu />
			<Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				Comprar NFTs
			</Text>
			<Container>
				<Center>
					<Grid templateColumns="repeat(4, 1fr)">
						<GridItem colSpan={1}>
							<Flex align="center"
								justify="center"
								direction="column"
								p={10}
								style={styles.cardVendaGalinha}>
								<div className="gp7_2" />
								<Box p={1} mt={5} style={styles.ajustarAoCentro}>
									<Text>Galinha Normal</Text>
									<Text>0,07 BNB</Text>
									<Button mt={5}
										onClick={() => transferBSC(galinhaNormal)}>Comprar</Button>
								</Box>
							</Flex>
						</GridItem>
						<Spacer />
						<GridItem colSpan={1}>
							<Flex align="center"
								justify="center"
								direction="column"
								p={10}
								style={styles.cardVendaGalinha}>
								<div className="gw2_1" />
								{/* <Image style={{ marginLeft: "40px" }} width={75} src={galinha2} /> */}
								<Box p={1} mt={5} style={styles.ajustarAoCentro}>
									<Text>Galinha Rara</Text>
									<Text>0,1 BNB</Text>
									<Button mt={5}
										onClick={() => transferBSC(galinhaRara)}>Comprar</Button>
								</Box>
							</Flex>
						</GridItem>
						<GridItem colSpan={1}>
							<Flex align="center"
								justify="center"
								direction="column"
								p={10}
								style={styles.cardVendaGalinha}>
								<div className="gw2_2" />
								{/* <Image style={{ marginLeft: "40px" }} width={75} src={galinha2} /> */}
								<Box p={1} mt={5} style={styles.ajustarAoCentro}>
									<Text>BOX - RANDOM</Text>
									<Text>250 EGGCOIN</Text>
									<Button mt={5}
										onClick={() => mintBox()}>Comprar</Button>
								</Box>
							</Flex>
						</GridItem>
					</Grid>
				</Center>
			</Container>
		</>
	)
}

