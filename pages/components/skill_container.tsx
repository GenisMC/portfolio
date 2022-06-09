import {
    useColorModeValue,
    Container,
    StackDivider,
    VStack,
    Text,
} from "@chakra-ui/react";

const SkillContainer = (props: any) => {
    let bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    let barColor = useColorModeValue("#737b8b", "#727272");

    return (
        <Container maxW="md" height="3xs" bg={bgColor} p={6} borderRadius="16">
            <VStack
                spacing={2}
                align="center"
                justify="space-evenly"
                height="100%"
                divider={<StackDivider borderColor={barColor} />}
            >
                <Text fontSize="2xl">{props.title}</Text>
                <Text fontSize="lg" align="center">
                    {props.text}
                </Text>
            </VStack>
        </Container>
    );
};

export default SkillContainer;
