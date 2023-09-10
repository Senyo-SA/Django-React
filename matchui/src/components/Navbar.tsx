import {Box, Button, ButtonGroup, Flex, Heading, Spacer} from '@chakra-ui/react';

function Navbar(){
    return(
        <Flex alignItems='start' backgroundImage='url(NavBack.jpg)' gap='5' minWidth='100%' minHeight='250px' mt='20px'>
            <Box bg='transparent' p='2'>
                <Heading bg='transparent' color='white' > All Matches </Heading>
            </Box>
            <Spacer bg='transparent' />
            <ButtonGroup bg='transparent' gap='6' mt='20px'>
                <Button   color='#7b7b7b'> About </Button>
                <Button  color='#7b7b7b'> Contacts </Button>
                <Button  color='#7b7b7b'> Overview </Button>
            </ButtonGroup>
        </Flex>

    )
}

export default Navbar;