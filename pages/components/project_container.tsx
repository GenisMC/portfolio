import {
    useColorModeValue,
    Container,
    StackDivider,
    VStack,
    Stack,
    Image,
    Text,
} from "@chakra-ui/react";

const ProjectContainer = (props: any) => {
    let bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    let barColor = useColorModeValue("#737b8b", "#727272");
    const accentColor = useColorModeValue("#D40843", "#EA1552");

    return (
        <Container maxW="md" height={{base: "lg",md: "xs"}} bg={bgColor} p={6} borderRadius="16">
            <VStack
                spacing={2}
                align="center"
                justify="space-evenly"
                height="100%"
                divider={<StackDivider borderColor={barColor} />}
            >
                <Stack direction={["column", "row"]}  align="baseline" >
                <Text fontSize={["2xl","xl"]} align={["center","justify"]}>{props.title} </Text>
                <Text fontSize={["xl","lg"]} align={["center","justify"]} color={accentColor}>{props.subtitle}</Text>
                </Stack>
                <Stack direction={["column", "row"]} spacing={2} p={2}>
                <Image maxW={["100%","40%"]} objectFit="contain" src={props.image}/>
               <Text fontSize="md" align="justify">
                    {props.text}
                </Text>
                </Stack>
            </VStack>
        </Container>
    );
};

export default ProjectContainer;
