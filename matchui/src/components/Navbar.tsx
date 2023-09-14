import {Box, Button, ButtonGroup, Flex, Heading, Spacer} from '@chakra-ui/react';

function Navbar(){
    return(
        <Flex alignItems='start' backgroundImage='url(NavBack.jpg)' gap='5' backgroundSize='cover' minWidth='100%' minHeight='250px' mt='30px'>
            <Box bg='transparent' p='2'>
                <Heading bg='transparent' color='#231c2e' > All Matches </Heading>
            </Box>
            <Spacer bg='transparent' />
            <ButtonGroup bg='transparent' gap='6' mt='20px' mr='10px'>
                <Button bg='#231c2e' color='#7b7b7b'> About </Button>
                <Button bg='#231c2e' color='#7b7b7b'> Contacts </Button>
                <Button bg='#231c2e' color='#7b7b7b'> Overview </Button>
            </ButtonGroup>
        </Flex>

    )
}

export default Navbar;