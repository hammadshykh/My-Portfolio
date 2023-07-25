import { Button } from "@chakra-ui/react"

const MyButton = ({ shadowColor, color, children }) => {
    return (
        <>
            <Button
                variant="unstyled"
                transition='.3s'
                _hover={{ transform: "scale(1.1)" }}
                bg={color}
                color="black"
                w="150px"
                boxShadow={`1px 2px 10px  ${shadowColor}`}
                borderRadius="20px">
                {children}
            </Button>
        </>
    )
}

export default MyButton