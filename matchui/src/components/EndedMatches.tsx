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
import axios from 'axios';

// Component to fetch and display ended matches from the api

function EndedMatches(){

    const { isOpen, onToggle } = useDisclosure();

    const [past, setPast] = useState([{
                                                                                            match: '',
                                                                                            date: '',
                                                                                            league: ''
                                                                                                    }]);

    useEffect(() => {

// Fetches the data with api variables and stores them as variables and objects

        const fetching = async () => {


            const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?last=50';
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
                let ended = past;

                for(let i = 0; i < 5; i++){
                    let homeTeam = dataArray[i].teams.home.name;
                    let awayTeam = dataArray[i].teams.away.name;
                    let homeTeamGoals = dataArray[i].goals.home;
                    let awayTeamGoals = dataArray[i].goals.away;
                    let datetime = dataArray[i].fixture.date;
                    let league = dataArray[i].league.name;
                    ended[i] = {match: homeTeam.concat(' ', homeTeamGoals, ' - ', awayTeamGoals, ' ', awayTeam),
                                date: datetime, league: league}
                }

                setPast(ended)
                console.log(ended)

            } catch (error) {
                console.error(error);
            }

        }

        // fetching()
    }, []);


    async function save (index:number){

        axios.post('http://127.0.0.1:2000/api/ended_games/', past[index])
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


// Returns the gotten data from their stored variables and objects to the page

    return(

        <Card alignItems='center' bg='#231c2e' minH='max-content' minW='max-content' mb='15px' ml='15px' mr='15px' mt='10px'>
            <CardHeader bg='transparent' >
                <Heading bg='transparent'  color='#7b7b7b' size='lg' textAlign='center'>
                    Recently Ended Matches
                </Heading>
            </CardHeader>

            <CardBody bg='transparent' >
                <UnorderedList justifyContent='center' listStyleType='none' spacing={5}>
                    {past.map((passed, index) =>
                        <ListItem color='whitesmoke' mt='20px' textAlign='center'>
                            <Link key={index} >
                                {passed.match}
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

                                    <Text bg='transparent'> Match : {passed.match} </Text>
                                    <Text bg='transparent'> Match Date : {passed.date} </Text>
                                    <Text bg='transparent'> Match League : {passed.league} </Text>

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

export default EndedMatches