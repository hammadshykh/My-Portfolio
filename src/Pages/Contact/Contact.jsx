import { Box, Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
    return (
        <>
            <Box w='700px' m='0 auto'>
                <Heading fontSize="40px" fontWeight="bold" textAlign="center">
                    Latest <span style={{ color: "#0cf" }}>Project</span>
                </Heading>
                <Box display='flex' justifyContent='center' flexDirection='column'>
                    <Flex alignItems='center' my='2rem'>
                        <Input type="text" placeholder="Full Name" me='1rem' border='none' bg=' #42454d' />
                        <Input type="text" placeholder="Email Adress" border='none' bg=' #42454d' />
                    </Flex>
                    <Flex>
                        <Input type="text" placeholder="Full Name" me='1rem' border='none' bg=' #42454d' />
                        <Input type="text" placeholder="Email Adress" border='none' bg=' #42454d' />
                    </Flex>
                    <Box mt='2rem'>
                        <Textarea rows={10} placeholder="Your Message" border='none' bg=' #42454d'></Textarea>
                    </Box>
                    <Box
                        textAlign='center'
                        justifyContent='center'
                        display='flex'>
                        <Button
                            my='2rem'
                            variant="unstyled"
                            bg="#0cf"
                            color="black"
                            w="150px"
                            boxShadow="1px 2px 10px #0cf"
                            borderRadius="20px">
                            Read More
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Contact