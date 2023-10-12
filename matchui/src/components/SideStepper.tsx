import {Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'



const steps = [
    { title: 'First', description: 'Live' },
    { title: 'Second', description: 'Upcoming' },
    { title: 'Third', description: 'Ended' },
]

function SideStepper() {
    const { activeStep } = useSteps({
        index: 3,
        count: steps.length,
    })

    return (
        <Stepper colorScheme='gray' index={activeStep} orientation='vertical' height='inherit' gap='0'>
            {steps.map((step, index) => (
                <Step key={index} >
                    <StepIndicator >
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepIcon />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

export default SideStepper;
