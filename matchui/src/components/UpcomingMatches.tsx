import {
    Box, Button,
    Card,
    CardBody,
    Collapse, Flex,
    Heading, Image,
    Link,
    ListItem, Text,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

// Component to fetch and display upcoming matches from the api

function UpcomingMatches(){

    const [load, setLoad] = useState(false)

    const [itemId, setItemId] = useState(0)

    const { isOpen, onToggle } = useDisclosure()

    const [nextTeams, setNextTeams] = useState([{
       match: '', leagues: '', matchDate: '', homeLogo: '', awayLogo: '', match_type: ''}]);

    const identify = (index:number) => {
        setItemId(index);
        console.log(index);
    }

    useEffect(() => {

// Fetches the data with api variables and stores them as variables and objects

        const fetching = async () => {

            setLoad(true);

            const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50';
            const options = {
                method: 'GET',
                headers: {
                    'process.env["API_KEY "]',
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
                    let homeLogo = dataArray[i].teams.home.logo;
                    let awayTeam = dataArray[i].teams.away.name;
                    let awayLogo = dataArray[i].teams.away.logo;
                    let datetime = dataArray[i].fixture.date;
                    let league = dataArray[i].league.name;
                    upcoming[i] = {match: homeTeam.concat(' - ', awayTeam), leagues: league, matchDate:
                                    datetime, homeLogo: homeLogo, awayLogo: awayLogo, match_type: 'LATER'};
                }

                setNextTeams(upcoming)
                // console.log(nextTeams)

            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoad(false);
            }

        }
        //  fetching()
    }, []);

// Returns the gotten data from their stored variables and objects to the page

    return (

        <>
            <Heading bg='transparent' color='#7b7b7b' ml='15px' size='md' textAlign='left'>
                Upcoming Matches
            </Heading>

            <Card alignItems='center' bgGradient='linear(to-r, #090116, grey, slategray, #090116)'
                  minH='max-content' minW='max-content' mb='10px' ml='15px' mr='15px' mt='10px'>

                <CardBody bg='transparent' >
                    <UnorderedList bg='transparent' justifyContent='center' listStyleType='none' spacing={5}>
                        {nextTeams.map((next, index) =>
                            <ListItem bg='transparent' color='#090116' mt='20px' onClick={() => identify(index)} textAlign='center'>

                                <Flex bg='transparent' flexDirection='row' gap='4' justifyContent='space-between' >

                                    <Image alignSelf='flex-start' alt='home logo' bg='transparent' src={next.homeLogo} />
                                    <Link alignSelf='center' fontSize='lg' fontWeight='medium' key={index} onClick={onToggle}>
                                        {next.match}
                                    </Link>
                                    <Image alt='away logo' bg='transparent' src={next.awayLogo} />

                                </Flex>

                                { itemId === index ? <Collapse in={isOpen} animateOpacity>
                                    <Box
                                        p='40px'
                                        color='white'
                                        mt='4'
                                        bg='#011021'
                                        rounded='md'
                                        shadow='md'
                                    >
                                        <Text bg='transparent'> Match : {next.match} </Text>
                                        <Text bg='transparent'> Match Date : {next.leagues} </Text>
                                        <Text bg='transparent'> Match League : {next.matchDate} </Text>

                                        <Button colorScheme='teal' mt='25px'> Save </Button>
                                    </Box>
                                </Collapse> : ''
                                }
                            </ListItem>
                        )}
                    </UnorderedList>
                </CardBody>

            </Card>
        </>

    )
}

export default UpcomingMatches;