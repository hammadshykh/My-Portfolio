import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

const Navigation = () => {
    const location = useLocation()
    return (
        <>
            <Box>
                <NavBar />
                <Box
                    position="absolute"
                    display="block"
                    left={['0', '0', '100px', '230px', "230px"]}
                    color='white'
                    top="0"
                    bg="#1c1f25"
                    px={{ lg: '3rem' }}
                    pt='2rem'
                    right="0">
                    <AnimatePresence>
                        <Routes location={location} key={location.key}>
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/Services" element={<Services />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="/Portfolio" element={<Portfolio />} />
                        </Routes>
                    </AnimatePresence>
                </Box>
            </Box>
        </>
    );
};

export default Navigation;
