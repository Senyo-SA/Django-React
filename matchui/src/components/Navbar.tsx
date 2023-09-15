import {Box, Button, ButtonGroup, Flex, Heading, Spacer} from '@chakra-ui/react';

function Navbar(){
    return(
        <Flex alignItems='start' backgroundImage='url(NavBack.jpg)' gap='5' backgroundSize='cover' minWidth='100%' minHeight='250px' mt='30px'>
            <Box bg='transparent' p='2'>
                <Heading bg='transparent' color='#231c2e' > All Matches </Heading>
            </Box>
            <Spacer bg='transparent' />
            <ButtonGroup bg='transparent' gap='6' mt='20px' mr='10px'>
                <Button bg='transparent' color='#090116' fontWeight='medium'> About </Button>
                <Button bg='transparent' color='#090116' fontWeight='medium'> Contacts </Button>
                <Button bg='transparent' color='#090116' fontWeight='medium'> Overview </Button>
            </ButtonGroup>
        </Flex>

    )
}

export default Navbar;