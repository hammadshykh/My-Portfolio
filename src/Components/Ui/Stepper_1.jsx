import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from "@chakra-ui/react";


const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
];


const Stepper_1 = () => {

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    return (
        <>
            <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>

                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </>
    );
};

export default Stepper_1;
