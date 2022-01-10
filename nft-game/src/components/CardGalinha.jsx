import React from 'react'
import { Box, Center, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/layout';
import NavMenu from './Layout/NavMenu';
import '../css/style.css'
import '../css/chickens.css'
import '../css/border.css'
import ModalMintBox from './ModalMintBox';
import ModalMintHenHouse from './ModalMintHenHouse';
import ErrorBox from './ErrorBox';
import henhouseimg from './../img/ImgHenHouseMini.png'

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





export default function CardGalinha() {
	/* 	const { Moralis } = useMoralis();
		var galinhaNormal = "0.07"
		var galinhaRara = "0.1"
	
		const transferBSC = (valor) => {
			Moralis.transfer({
				type: "native",
				amount: Moralis.Units.ETH(valor),
				receiver: "0xab609B70271b768e592B48028c211E12FCE3184D"
			});
		} */

	return (
		<>
			<NavMenu />
			<Text fontSize="3xl" style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
				Comprar NFTs
			</Text>
			<Container>
				<Center>
					<Grid templateColumns="repeat(3, 1fr)">
						{/* 						<GridItem colSpan={1}>
						<GridItem colSpan={1}>
							<Flex align="center"
								justify="center"
								direction="column"
								p={10}
								style={styles.cardVendaGalinha}>
								<div className="gw2_1" />
								<Box p={1} mt={5} style={styles.ajustarAoCentro}>
									<Text>Galinha Rara</Text>
									<Text>0,1 BNB</Text>
									<Button mt={5}
										onClick={() => transferBSC(galinhaRara)}>Comprar</Button>
								</Box>
							</Flex>
						</GridItem> */}
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
									<ModalMintBox />
								</Box>
							</Flex>
						</GridItem>
						<GridItem colSpan={1}>
							<Flex align="center"
								justify="center"
								direction="column"
								p={10}
								style={styles.cardVendaGalinha}>
								<div>
									<img src={henhouseimg} alt="henhouse" />
								</div>
								<Box p={1} mt={5} style={styles.ajustarAoCentro}>
									<Text>HENHOUSE</Text>
									<Text>1000 EGGCOIN</Text>
									<ModalMintHenHouse />
								</Box>
							</Flex>
						</GridItem>
					</Grid>
				</Center>
			</Container>
		</>
	)
}

