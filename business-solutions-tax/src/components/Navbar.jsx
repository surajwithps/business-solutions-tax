import React from 'react'
import { Box, Flex, Spacer, Text, Center } from "@chakra-ui/react"


const Navbar = () => {
  return (

<div>

 <Box w='80%' justifyContent='center'>   
 <Flex>
 <Spacer />  
    <Box w='20%' h='10' bg='red'><Text>Hello</Text></Box>
    <Spacer />  
    <Box w='50%' h='10' bg='red'><Text>Hello</Text></Box>
    <Spacer />
    <Box w='20%' h='10' bg='red'><Text>Hello</Text></Box>
  </Flex>
</Box>
  
    </div>

  )
}

export default Navbar