import { useColorModeValue,Container, Center,VStack, Text} from '@chakra-ui/react';

const SkillContainer = (props:any) => {
    let bgColor = useColorModeValue('#f2f2f2','#232b3b');
    return (
        <Container maxW="md" bg={bgColor} p={8} borderRadius="16">
        <Center>
            <VStack spacing={4}>
            <Text fontSize="2xl">{props.title}</Text>
            <Text fontSize="md">{props.text}</Text>
            </VStack>
        </Center>
        </Container>
    );
}

export default SkillContainer;
