import React from 'react';
import './App.css';
import {Box, Container, Flex, SimpleGrid, Spacer} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LiveMatches from "./components/LiveMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import EndedMatches from "./components/EndedMatches";
import SavedMatches from "./components/SavedMatches";
import SideStepper from "./components/SideStepper";
import PopularLeagues from "./components/PopularLeagues";

// Contains all the various components to make up the complete page/app

function App() {
  return (
    <Container bgGradient='transparent' border='none' minHeight='100vh' minWidth='100%' >
      <header>
        <Navbar/>
      </header>

      <body className='App'>
      <Box display='flex' alignItems='center' mt='25px' mb='25px' width='100%'>
          <PopularLeagues/>
          <Spacer bg='transparent'/>
          <SavedMatches/>
      </Box>


      <Flex mt='20px' bg='transparent' minH='max-content'>

          <SimpleGrid bg='transparent' columns={1} display='flex' gap='10' minWidth='100%' borderRadius='10px'>
              <SideStepper/>
                <Flex flexDirection='column' minWidth='90%'>
                  <LiveMatches/>
                  <UpcomingMatches/>
                  <EndedMatches/>
                </Flex>
          </SimpleGrid>

      </Flex>

      </body>
    </Container>
  );
}
export default App;
