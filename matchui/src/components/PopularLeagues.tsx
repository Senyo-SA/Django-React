import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons';
function PopularLeagues(){

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='#231c2e' rightIcon={<ChevronDownIcon />} textDecoration='underline'>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>UEFA</MenuItem>
                <MenuItem>EPL</MenuItem>
                <MenuItem>World Cup</MenuItem>
                <MenuItem>La Liga</MenuItem>
                <MenuItem>Europa</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default PopularLeagues;