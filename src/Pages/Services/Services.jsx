import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { HiPaintBrush } from "react-icons/hi2";
import { BiCodeAlt, BiBarChartAlt } from "react-icons/bi";

const Services = () => {
    const personal = [
        {
            course: "Web Development",
            aboutMe: "asdasdasda",
            icon: <BiCodeAlt />,
        },
        {
            course: "Graphics Design",
            aboutMe: "asdasdasd",
            icon: <HiPaintBrush />,
        },
        {
            course: "Digital Market",
            aboutMe: "asd",
            icon: <BiBarChartAlt />,
        },
    ];
    return (
        <>
            <Box h='100vh'>
                <Heading
                    fontSize="3rem"
                    my="0.7rem"
                    textAlign="center"
                    fontWeight="bold">
                    Our
                    <span style={{ color: "#0cf", marginLeft: "10px" }}>Services</span>
                </Heading>
                <Box>
                    <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing='15px'>
                        {personal.map((box) => (
                            <Box
                                padding="2rem 1.5rem"
                                borderRadius="1rem"
                                bg="#323946"
                                textAlign="center"
                                transition=".5s ease"
                                _hover={{ transform: "scale(1.02)", borderColor: "#0cf" }}
                                border=".2rem solid gray">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    fontSize="4rem"
                                    color="#0cf">
                                    {box.icon}
                                </Box>
                                <Heading fontSize="30px">{box.course}</Heading>
                                <Text fontSize="14px" my="1rem">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Magnam perferendis, nihil voluptas quos possimus alias quaerat
                                    odit placeat vero nisi doloribus. Quas necessitatibus facere
                                </Text>
                                <Button
                                    variant="unstyled"
                                    bg="#0cf"
                                    color="black"
                                    w="150px"
                                    boxShadow="1px 2px 10px #0cf"
                                    borderRadius="20px">
                                    Read More
                                </Button>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default Services;
