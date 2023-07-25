import {
    Box,
    Button,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Heading,
    Image,
    Progress,
    ProgressLabel,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { color, motion } from "framer-motion";
import MyButton from "../../Components/Ui/MyButton";
import Stepper_1 from "../../Components/Ui/Stepper_1";

const containerVariant = {
    hidden: {
        opacity: 0,
        y: "-50vw",
    },

    visible: {
        opacity: 1,
        y: "0vw",
        transition: { delay: 0.3, duration: 0.7 },
    },
};

const bold = {
    fontWeight: "bold",
    marginRight: "10px",
};

const ProgressBar = ({ perc, name, value, color }) => {
    return (
        <Box w="300px">
            {name}
            <Progress
                borderRadius="20px"
                height="10px"
                value={value}
                colorScheme={color}>
                <ProgressLabel color="black" fontSize="10px">
                    {perc}
                </ProgressLabel>
            </Progress>
        </Box>
    );
};

const About = () => {
    return (
        <>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible">
                <Box mt="4rem" mx="1rem">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Box position="relative">
                            <Box>
                                <Heading
                                    _after={{
                                        position: "absolute",
                                        content: `""`,
                                        height: "5px",
                                        width: "25px",
                                        top: "60px",
                                        left: "0",
                                        backgroundColor: "orange",
                                    }}
                                    _before={{
                                        position: "absolute",
                                        content: `""`,
                                        height: "5px",
                                        width: "50px",
                                        top: "50px",
                                        left: "0",
                                        backgroundColor: "orange",
                                    }}>
                                    About
                                    <span style={{ color: "#0cf", marginLeft: "0.5rem" }}>
                                        Me
                                    </span>
                                </Heading>
                                <Heading
                                    mt="2rem"
                                    fontSize={["15px", "15px", "18px", "30px", "30px"]}
                                    display="flex"
                                    alignItems="center">
                                    I am Hammad Shaikh{" "}
                                    <Text color="orange" ms="1rem">
                                        {" "}
                                        Frontend Developer{" "}
                                    </Text>{" "}
                                </Heading>
                                <Text
                                    fontSize={["10px", "10px", "12px", "14px", "14px"]}
                                    my="1rem">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Adipisci, esse consequatur laborum expedita officiis nihil
                                    debitis? Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Temporibus id, tempore autem commodi non odio nobis ut?
                                    Aliquid, maiores corporis. Ipsum tempora distinctio earum id
                                    vitae a natus obcaecati atque! Temporibus id, tempore autem
                                    commodi non odio nobis ut? Aliquid, maiores corporis. Ipsum
                                    tempora distinctio earum id vitae a natus obcaecati atque!
                                </Text>
                            </Box>
                            <Flex
                                justifyContent="space-between"
                                marginTop="3rem"
                                flexDirection={["column", "column", "row", "row", "row"]}
                                gap={["40px", "40px", "0", "0", "0"]}
                                fontSize="15px">
                                <Box
                                    h="140px"
                                    justifyContent="space-between"
                                    display="flex"
                                    flexDirection="column">
                                    <Text>
                                        <span style={bold}> Birthday :</span> 4 Dec 2004 Age{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}> Website :</span> www.domain.com{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}> Degree : </span> Waiting for Result{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}> City : </span> Hyderabad{" "}
                                    </Text>
                                </Box>
                                <Box
                                    h="140px"
                                    justifyContent="space-between"
                                    display="flex"
                                    flexDirection="column">
                                    <Text>
                                        <span style={bold}>Age :</span> 18{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}>Email :</span> hammadyounus.508@gmail.com{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}>Phone :</span> 03083129230{" "}
                                    </Text>
                                    <Text>
                                        <span style={bold}>Freelance :</span> Available{" "}
                                    </Text>
                                </Box>
                                <Box
                                    h="200px"
                                    justifyContent="space-between"
                                    display="flex"
                                    flexDirection="column">
                                    <ProgressBar
                                        color="green"
                                        value="80"
                                        name="HTML"
                                        perc="80%"
                                    />
                                    <ProgressBar
                                        color="orange"
                                        value="75"
                                        name="CSS"
                                        perc="75%"
                                    />
                                    <ProgressBar
                                        color="red"
                                        value="65"
                                        name="Bootstrap"
                                        perc="65%"
                                    />
                                    <ProgressBar
                                        color="gray"
                                        value="45"
                                        name="React"
                                        perc="45%"
                                    />
                                </Box>
                            </Flex>
                            <Box mt="2rem" display="flex" alignItems="center">
                                <Box me="1rem">
                                    <MyButton color="skyblue" shadowColor="blue">
                                        Download CV
                                    </MyButton>
                                </Box>
                                <Box>
                                    <MyButton color="orange" shadowColor="orange">
                                        Hire me
                                    </MyButton>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Box>
                        <Flex
                            alignItems="center"
                            mt="2.5rem"
                            justifyContent="space-between"
                            flexDirection={["column", "column", "column", "row", "row"]}>
                            <Box w={{ md: "45%" }}>
                                <Heading p="5px" bg="red" fontSize="22px">
                                    Education
                                </Heading>
                                <Box
                                    w="100%"
                                    color="black"
                                    bg="white"
                                    borderRight="1px solid black">

                                    <Box p="20px" olor="black"
                                        textTransform="capitalize"
                                    >
                                        <Flex>
                                            <Box>
                                                <Stepper_1 />
                                            </Box>
                                            <Box>
                                                <Text fontWeight="bold" fontSize="20px" my='1rem'>
                                                    Entermediate in Pre-engeenering
                                                </Text>
                                                <Text
                                                    lineHeight="25px"
                                                    fontSize="16px"
                                                    textAlign="justify"
                                                    fontWeight="600">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                    Laboriosam saepe nisi voluptates qui, est numquam facere
                                                    distinctio illo eum? Laboriosam nobis non architecto iste
                                                    est rerum? Assumenda omnis quibusdam explicabo.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                            <Box w={{ md: "45%" }}>
                                <Heading p="5px" bg="rosybrown" fontSize="22px">
                                    Experience
                                </Heading>
                                <Box
                                    w="100%"
                                    color="black"
                                    bg="white"
                                    borderRight="1px solid black">

                                    <Box p="20px" olor="black"
                                        textTransform="capitalize"
                                    >
                                        <Flex>
                                            <Box>
                                                <Stepper_1 />
                                            </Box>
                                            <Box>
                                                <Text fontWeight="bold" fontSize="20px" my='1rem'>
                                                    Entermediate in Pre-engeenering
                                                </Text>
                                                <Text
                                                    lineHeight="25px"
                                                    fontSize="16px"
                                                    textAlign="justify"
                                                    fontWeight="600">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                    Laboriosam saepe nisi voluptates qui, est numquam facere
                                                    distinctio illo eum? Laboriosam nobis non architecto iste
                                                    est rerum? Assumenda omnis quibusdam explicabo.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </motion.div>
        </>
    );
};

export default About;
