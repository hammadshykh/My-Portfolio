import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    position,
    transition,
} from "@chakra-ui/react";
import React from "react";
import SocialButtons from "../../Components/Ui/SocialButtons";
import { TiSocialFacebook } from "react-icons/ti";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import MyDrawer from "../../Components/Ui/myDrawer";
import "../../App.css";

const containerVariant = {
    hidden: {
        opacity: 0,
        y: "100vw",
    },

    visible: {
        opacity: 1,
        y: "0vw",
        transition: { delay: 0.3, duration: 1 },
    },
};
const PicVariant = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },

    visible: {
        opacity: 1,
        x: "0vw",
        transition: { delay: 0.3, duration: 1 },
    },
};
const Home = () => {
    const socialIcons = [
        { icon: <TiSocialFacebook />, link: "" },
        { icon: <AiOutlineTwitter />, link: "" },
        { icon: <CiLinkedin />, link: "" },
        { icon: <AiOutlineInstagram />, link: "" },
    ];
    return (
        <>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible">
                <Box minH="100vh">
                    <Box>
                        <Box display={["block", "block", "none", "none", "none"]}>
                            <MyDrawer />
                        </Box>
                        <Flex
                            alignItems="center"
                            flexDirection={["column", "column", "column", "row", "row"]}>
                            <Box w="600px">
                                <Heading
                                    display="flex"
                                    alignItems="center"
                                    fontSize="28px"
                                    fontWeight="bold">
                                    Hello, my name is
                                    <Box
                                        fontStyle="italic"
                                        fontFamily="cursive"
                                        color="orange"
                                        ms="3">
                                        Hammad Shaikh
                                    </Box>
                                </Heading>
                                <Heading
                                    fontSize="28px"
                                    fontWeight="bold"
                                    display="flex"
                                    alignItems="center"
                                    my="2rem">
                                    i am a
                                    <Box color={"orange"} ms="3">
                                        Web Designer
                                    </Box>
                                </Heading>
                                <Text fontWeight="bold">
                                    I am Web Designer With extensive experiance for over 1-5 years
                                    My expertise is to create an website and many more...
                                </Text>

                                <Box mt="2rem">
                                    <Button
                                        bg="#ec1849"
                                        padding="10px 20px"
                                        borderRadius="20px"
                                        _hover={{ bg: "orange" }}
                                        color="white">
                                        More about me
                                    </Button>
                                </Box>
                            </Box>
                            <motion.div
                                variants={PicVariant}
                                initial="hidden"
                                animate="visible">
                                <Box position="relative">
                                    <Box
                                        w='400px'
                                        _before={{
                                            position: "absolute",
                                            left: "-20px",
                                            top: "40px",
                                            content: `""`,
                                            height: "80px",
                                            width: "80px",
                                            borderTop: "10px solid orange",
                                            borderLeft: "10px solid orange",
                                        }}
                                        _after={{
                                            position: "absolute",
                                            right: "-20px",
                                            bottom: "-40px",
                                            content: `""`,
                                            height: "80px",
                                            width: "80px",
                                            borderRight: "10px solid orange",
                                            borderBottom: "10px solid orange",
                                        }}>
                                        <Image src="/images/1122.jpg" boxSize={"full"} />
                                    </Box>
                                </Box>
                            </motion.div>
                        </Flex>
                    </Box>
                </Box>
            </motion.div>
        </>
    );
};

export default Home;
