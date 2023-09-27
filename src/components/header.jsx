import { Container, Text } from '@chakra-ui/react'
import React from 'react'

const header = () => {
    // For IE logo and all including the name of the puzzle
    return (
        <Container maxW='xl' centerContent>
            <a href="https://ie.nitk.ac.in/" target='blank'><img src="src/assets/logo.png" alt="Website Logo" style={{ width: '100px', height: '100px', marginRight: '1400px',marginTop:'15px'}} /></a>
            <Text color="white" marginTop="-50px" fontSize="50px">Support is all you need</Text>
        </Container >

    )
}

export default header
