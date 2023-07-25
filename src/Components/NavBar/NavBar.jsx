import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MyDrawer from "../Ui/myDrawer";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { LuMessagesSquare } from "react-icons/lu";
import { color } from "framer-motion";


const NavBar = () => {
    const Navlinks = [
        { name: "Home", icon: <AiFillHome />, link: "/" },
        { name: "About", icon: <FaUser />, link: "/About" },
        { name: "Service", icon: <TfiMenuAlt />, link: "/Services" },
        { name: "Portfolio", icon: <CgProfile />, link: "/Portfolio" },
        { name: "Contact", icon: <LuMessagesSquare />, link: "Contac" },
    ];

    return (

        <Box
            w={{ md: "270px" }}
        >
            <Box
                bg="#282c34"
                position="fixed"
                h="100%"
                flexDirection="column"
                padding={{ md: "30px 40px" }}
                display={["none", "none", "flex", "flex", "flex"]}

                justifyContent="center"
                alignItems="center">
                <Box
                    mb="5rem"
                    position="relative"
                    top="-50px"
                    display={["none", "none", "none", "block", "block"]}>
                    <Heading className="logoo" color='white'>Portfolio</Heading>
                </Box>
                <Box
                    justifyContent="space-between"
                    flexDirection="column"
                    display="flex"

                    fontWeight="bold"
                    h="200px"
                    color="gray.300">
                    {Navlinks.map((nav) => (
                        <NavLink to={nav.link}>
                            <Box
                                transition=".3s ease"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "white"
                                }}
                                display="flex"
                                alignItems="center"
                                borderBottom={{ lg: "1px solid gray" }}>
                                <span style={{ marginRight: "1rem" }}>{nav.icon}</span>
                                <Text display={["none", "none", "none", "block", "block"]}>
                                    {nav.name}
                                </Text>
                            </Box>
                        </NavLink>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
