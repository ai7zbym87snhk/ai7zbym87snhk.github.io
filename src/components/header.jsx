// import React from 'react'
// import { Box, Container, Text } from '@chakra-ui/react'
// import { Flex } from '@chakra-ui/react'

// const header = () => {
//     return (
//         <Flex align="center" justify="space-between">
//             {/* Left side with image */}
//             <Box width="100%" >
//                 <a href="https://ie.nitk.ac.in/" target='blank'><img src="https://ie.nitk.ac.in/static/img/ielogo-transparent.png" alt="Website Logo" style={{ width: '100px', height: '100px' }} /></a>
//             </Box>

//             {/* Middle with text */}
//             <Text color="white" fontSize="50px" width="100%">Support is all you need</Text>

//             {/* Right side (you can add additional content here if needed) */}


//         </Flex>
//     )
// }

// export default header;
import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

const Header = () => {
    return (
        <Flex align="center" justify="space-between" bg="blue.500" py="4">

            <Box>
               <a href="https://ie.nitk.ac.in/" target='blank'><img src="https://ie.nitk.ac.in/static/img/ielogo-transparent.png" alt="Website Logo" style={{ width: '100px', height: '100px' }} /></a>

            {/* Middle with text */}
            <Text color="white" fontSize="50px">Support is all you need</Text>

            {/* Right side (you can add additional content here if needed) */}
        </Flex>
    )
}

export default Header;












