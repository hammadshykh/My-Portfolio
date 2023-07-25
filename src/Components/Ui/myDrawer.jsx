import {
    Box,
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function MyDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <BiMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent p='1.5rem' bg='gray'>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        w="400px"
                        color="gray.300">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Services">Services</NavLink>
                        <NavLink to="/Portfolio">PortFolio</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                    </Box>
                    <DrawerCloseButton />
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default MyDrawer