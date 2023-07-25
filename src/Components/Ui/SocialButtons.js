import { Box } from "@chakra-ui/react"
import React from "react"

const SocialButtons = (props) => {
    return (
        <>
            <Box>
                <Box border={props.border} color={props.color} borderRadius='full'>
                    {props.children}
                </Box>
            </Box>
        </>
    )
}

export default SocialButtons