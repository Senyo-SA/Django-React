import React from 'react';
import './App.css';
import {Container, Flex, SimpleGrid} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LiveMatches from "./components/LiveMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import EndedMatches from "./components/EndedMatches";
import CountryLeagues from "./components/CountryLeagues";
import SideStepper from "./components/SideStepper";

// Contains all the various components to make up the complete page/app

function App() {
  return (
    <Container bgGradient='transparent' border='none' minHeight='100vh' minWidth='100%' >
      <header>
        <Navbar/>
      </header>

      <body className='App'>
      <CountryLeagues/>

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
