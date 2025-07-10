import { useState } from 'react'
import CountdownTimer from './components/Countdown.jsx'
import { Box, Image, Heading, Center, Flex } from "@chakra-ui/react"
import moose from './assets/moose.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minHeight="100vh" background="#472243" color="#ffffff">
      <Center padding="2rem" minHeight="80vh">
        <Flex direction="column" alignItems="center">
          <Image src={moose} height="100px" width='120px' alt="Logo" />
          <Heading marginTop="2rem" size="4xl" textAlign="center">Countdown to swag o'clock</Heading>
          <div className="card">
            <CountdownTimer />
          </div>
        </Flex>
      </Center>
    </Box>
  )
}

export default App
