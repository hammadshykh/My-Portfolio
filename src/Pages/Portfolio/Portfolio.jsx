import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./Portfolio.css";
import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
    const ProjectData = [
        {
            img: "/images/myspotyfy.jpg",
            link: "https://fancy-pegasus-aabf3d.netlify.app/",
        },
        {
            img: "/images/todolist.jpeg",
            link: "https://react-todo-list-app-local.netlify.app/",
        },
        { img: "/images/insta.jpeg", link: "https://kaleidoscopic-bunny-d16726.netlify.app/" },
        { img: "/images/photo-1572177812156-58036aae439c.jpg", link: "" },
        { img: "/images/photo-1572177812156-58036aae439c.jpg", link: "" },
        { img: "/images/photo-1572177812156-58036aae439c.jpg", link: "" },
    ];
    return (
        <>
            <Box>
                <Heading fontSize="40px" fontWeight="bold" textAlign="center">
                    Latest <span style={{ color: "#0cf" }}>Project</span>
                </Heading>
                <Box py="2rem">
                    <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing="20px">
                        {ProjectData.map((pro) => (
                            <Box
                                className="portfolio-box"
                                position="relative"
                                boxShadow="1px 2px 10px black"
                                overflow="hidden"
                                borderRadius="1rem"
                                display="flex">
                                <Box className="port-image">
                                    <Image src={pro.img} objectFit="cover" boxSize="full" />
                                </Box>
                                <Box className="portfolio-layer">
                                    <Heading>Web Design</Heading>
                                    <Text textAlign="center">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum alias, possimus voluptatibus consequuntur vel quam
                                    </Text>
                                    <Box my="1rem" cursor="pointer" _hover={{ color: "red" }}>
                                        <a href={pro.link}>
                                            <BiLinkExternal fontSize="35px" />
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default Portfolio;
