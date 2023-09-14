import React from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerOverlay, List, ListItem, UnorderedList,
    useDisclosure
} from "@chakra-ui/react";

function CountryLeagues(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
        <Button bg='#231c2e'  color='#7b7b7b' mt='50px' onClick={onOpen} > Popular Leagues </Button>
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement='left'
            variant='outline'
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton bg='#41414' color='whitesmoke'  />
                <DrawerBody bg='#414141' color='#7b7b7b' pt='60px'>
                    <UnorderedList bg='#414141' color='whitesmoke' listStyleType='none' spacing={5}>
                        <ListItem bg='#414141'>English Premier League / UK</ListItem>
                        <ListItem bg='#414141'>La Liga / Spain</ListItem>
                        <ListItem bg='#414141'>Ligue 1/ France</ListItem>
                        <ListItem bg='#414141'>Bundesliga / Germany</ListItem>
                        <ListItem bg='#414141'>UEFA Champions League</ListItem>
                        <ListItem bg='#414141'>World Cup</ListItem>
                        <ListItem bg='#414141'>African Cup of Nations</ListItem>
                        <ListItem bg='#414141'>COPA Americana</ListItem>
                    </UnorderedList>
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

export default CountryLeagues