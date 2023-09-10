import React, {useEffect, useState} from "react";
import axios from 'axios'
import {
    Box, Button,
    Card,
    CardBody,
    CardHeader,
    Collapse,
    Heading,
    Link,
    ListItem, Text,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";

interface test{
    name: string;
}

// Component to fetch and display live matches from the api

function LiveMatches(){

    const { isOpen, onToggle } = useDisclosure()

    const [ongoing, setOngoing] = useState([{
                                                                                                    match: '',
                                                                                                    date: '',
                                                                                                    league: ''
                                                                                                            }]);

    useEffect(() => {

// Fetches the data with api variables and stores them as variables and objects

        const fetching = async () => {

            const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env["API_KEY "],
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // console.log(result.response);

                let dataArray = result.response;
                let stillOn = ongoing;

                for(let i = 0; i < dataArray.length; i++){
                    let homeTeam = dataArray[i].teams.home.name;
                    let awayTeam = dataArray[i].teams.away.name;
                    let homeTeamGoals = dataArray[i].goals.home;
                    let awayTeamGoals = dataArray[i].goals.away;
                    let datetime = dataArray[i].fixture.date;
                    let league = dataArray[i].league.name;
                    stillOn[i] = {match: homeTeam.concat(' ', homeTeamGoals, ' - ', awayTeamGoals, ' ', awayTeam),
                                    date: datetime, league: league};
                }

                setOngoing(stillOn)

            } catch (error) {
                console.error(error);
            }

        }

         // fetching()
    }, []);


    const save = async (index:number) => {
        try {
            const response = await axios.post('http://127.0.0.1:2000/api/live_games/', ongoing[index]);
            console.log(response.data);
            // Process the response data or perform other operations
        } catch (error) {
            console.error(error);
            // Handle errors, if any
        }
    }



// Returns the gotten data from their stored variables and objects to the page

    return (

        <Card alignItems='center' bg='#231c2e' minH='max-content' minW='max-content' mb='10px' ml='15px' mr='15px' mt='15px'>

            <CardHeader bg='transparent' >

                <Heading bg='transparent'  color='#7b7b7b' size='lg' textAlign='center'>
                    Live Matches
                </Heading>

            </CardHeader>

            <CardBody bg='transparent' >

                <UnorderedList justifyContent='center' listStyleType='none' spacing={5}>
                    {ongoing.map((playing, index) =>
                        <ListItem color='whitesmoke' mt='20px' textAlign='center'>

                            <Link key={index} onClick={onToggle}>
                                {playing.match}
                            </Link>

                            <Collapse in={isOpen} animateOpacity>
                                <Box
                                    p='40px'
                                    color='white'
                                    mt='4'
                                    bg='#011021'
                                    rounded='md'
                                    shadow='md'
                                >
                                    <Text bg='transparent'> Match : {playing.match} </Text>
                                    <Text bg='transparent'> Match Date : {playing.date} </Text>
                                    <Text bg='transparent'> Match League : {playing.league} </Text>

                                    <Button onClick={() => save(index)} colorScheme='teal' mt='25px'> Save </Button>
                                </Box>
                            </Collapse>

                        </ListItem>
                    )}
                </UnorderedList>

            </CardBody>


        </Card>
    )
}

export default LiveMatches

/*
*
* treat it as clubs
* Be in charge and take charge
* children stay in the session
* registered care provider
* scratch and minecraft coding
* dismiss children carefully to the right person
* make sure all children on your list are accounted for
* familiarise yourself with dsl or slt
* REGISTER AND DISMISSAL ARE VERY IMPORTANT
* make a get requet to matches
* stages key loop and get
*/
