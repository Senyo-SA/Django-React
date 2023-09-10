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
import React, {useEffect, useState} from "react";

// Component to fetch and display upcoming matches from the api

function UpcomingMatches(){

    const { isOpen, onToggle } = useDisclosure()

    const [nextTeams, setNextTeams] = useState([{
                                                                                                        match: '',
                                                                                                        date: '',
                                                                                                        league: ''
                                                                                                                }]);

    useEffect(() => {

// Fetches the data with api variables and stores them as variables and objects

        const fetching = async () => {


            const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50';
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
                // console.log(result);

                let dataArray = result.response;
                let upcoming = nextTeams;

                for(let i = 0; i < 5; i++){
                    let homeTeam = dataArray[i].teams.home.name;
                    let awayTeam = dataArray[i].teams.away.name;
                    let datetime = dataArray[i].fixture.date;
                    let league = dataArray[i].league.name;
                    upcoming[i] = {match: homeTeam.concat(' - ', awayTeam),
                                    date: datetime,
                                    league: league};
                }

                setNextTeams(upcoming)
                // console.log(nextTeams)

            } catch (error) {
                console.error(error);
            }

        }
        // fetching()
    }, []);

// Returns the gotten data from their stored variables and objects to the page

    return (
        <Card alignItems='center' bg='#231c2e' minH='max-content' minW='max-content' mb='10px' ml='15px' mr='15px' mt='10px'>
            <CardHeader bg='transparent' >
                <Heading bg='transparent' color='#7b7b7b' size='lg' textAlign='center'>
                    Upcoming Matches
                </Heading>
            </CardHeader>

            <CardBody bg='transparent' >
                <UnorderedList justifyContent='center' listStyleType='none' spacing={5}>
                    {nextTeams.map((next, index) =>
                        <ListItem color='whitesmoke' mt='20px' textAlign='center'>
                            <Link key={index} onClick={onToggle}>
                                {next.match}
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
                                    <Text bg='transparent'> Match : {next.match} </Text>
                                    <Text bg='transparent'> Match Date : {next.date} </Text>
                                    <Text bg='transparent'> Match League : {next.league} </Text>

                                    <Button colorScheme='teal' mt='25px'> Save </Button>
                                </Box>
                            </Collapse>
                        </ListItem>
                    )}
                </UnorderedList>
            </CardBody>

        </Card>
    )
}

export default UpcomingMatches;