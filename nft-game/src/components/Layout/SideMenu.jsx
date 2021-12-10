import { Box, Container, Text } from '@chakra-ui/layout'
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/slider'
import React from 'react'

const styles = {
    cardLeftMenu: {
        width: "150px",
        marginLeft: "-25px"
    }
}

export default function SideMenu() {
    return (
        <>
            <Container p={4} style={styles.cardLeftMenu} borderWidth="1px" borderRadius="lg">
                <Text>Filters:</Text>
                <Box>
                    <Text>Rarity</Text>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 100]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={1} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </Box>
            </Container>
        </>
    )
}
