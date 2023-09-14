import React from 'react';
import './App.css';
import {Container, Flex, Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LiveMatches from "./components/LiveMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import EndedMatches from "./components/EndedMatches";
import CountryLeagues from "./components/CountryLeagues";

// Contains all the various components to make up the complete page/app

function App() {
  return (
    <Container bg='#090116' minHeight='100vh' minWidth='100%' >
      <header>
        <Navbar/>
      </header>

      <body className='App'>
      <CountryLeagues/>

      <Flex mt='20px' bg='#090116' minH='max-content'>

          <SimpleGrid columns={1} bg='transparent' minWidth='100%' borderRadius='10px'>
              <LiveMatches/>
              <UpcomingMatches/>
              <EndedMatches/>
          </SimpleGrid>

      </Flex>

      </body>
    </Container>
  );
}
export default App;
