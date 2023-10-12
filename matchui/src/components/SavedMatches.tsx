import React, {useState} from "react";
import {
    Button, Card, CardBody, Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter, Flex, Image, Link, Spacer,
    useDisclosure
} from "@chakra-ui/react";
import axios from "axios";

function SavedMatches(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [saved, setSaved] = useState([{
        match: '', leagues: '', matchDate: '', homeLogo: '', awayLogo: '', match_type: ''
    }])


    const fetch_saved = async () => {
        try{
            const saved_response = await axios('http://127.0.0.1:2000/api/games/');
            console.log(saved_response.data);
            let saved_array = saved

            for (let i = 0; i < (saved_response.data).length; i++){
                let match = saved_response.data[i].match
                let leagues = saved_response.data[i].leagues
                let date = saved_response.data[i].matchDate
                let logo1 = saved_response.data[i].homeLogo
                let logo2 = saved_response.data[i].awayLogo
                let type = saved_response.data[i].match_type

                saved_array[i] = {match: match, leagues: leagues, matchDate: date, homeLogo: logo1, awayLogo: logo2, match_type: type}
            }

            setSaved(saved_array)

        }
        catch (error){
            console.log(error)
        }
    }

    fetch_saved()


    return(
        <>
        <Link color='white' onClick={onOpen} > Saved Matches </Link>
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement='left'
            size='full'
            variant='outline'
        >

            <DrawerContent>
                <DrawerCloseButton bg='#41414' color='whitesmoke'  />
                <DrawerBody bg='#414141' color='#7b7b7b' pt='60px'>
                        {saved.map((your_saves) =>
                            <Card>
                                <CardBody alignItems='center' justifyContent='center'>
                                    <Flex>
                                        <Image alignSelf='flex-start' alt='home logo' bg='transparent' src={your_saves.homeLogo} />
                                        <Spacer/>
                                        <Image alt='away logo' bg='transparent' src={your_saves.awayLogo} />
                                    </Flex>

                                    <Center color='lightslategray' fontSize='4xl' >
                                        {your_saves.match}
                                    </Center>

                                    <Center color='lightslategray' fontSize='4xl' >
                                        {your_saves.leagues}
                                    </Center>

                                    <Center color='lightslategray' fontSize='4xl' pl='50px'>
                                        {your_saves.matchDate}
                                    </Center>

                                </CardBody>
                            </Card>

                        )}


                </DrawerBody>

                <DrawerFooter bg='#414141'>
                    <Button color='whitesmoke' mr={3} onClick={onClose} variant='outline'>
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>

        </Drawer>
        </>
    )
}

export default SavedMatches