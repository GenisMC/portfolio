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
        <Container
            id="projectContainer"
            my={[3]}
            mx={[0, 2]}
            maxW="md"
            minW="3xs"
            bg={bgColor}
            p={6}
            h="100%"
            borderRadius="16"
        >
            <Container id="afterBox">
                <VStack
                    id="allstack"
                    spacing={4}
                    align="center"
                    justify="space-evenly"
                    height="100%"
                    divider={<StackDivider borderColor={barColor} />}
                >
                    <Stack direction={["column", "row"]} align="center">
                        <Text fontSize={["2xl", "xl"]} align="center">
                            {props.title}{" "}
                        </Text>
                        <Text
                            fontSize={["xl", "lg"]}
                            align={["center", "justify"]}
                            color={accentColor}
                        >
                            {props.subtitle}
                        </Text>
                    </Stack>
                    <Stack
                        maxH={{ base: "100%", xl: "40%" }}
                        direction={{ base: "column", xl: "row" }}
                        align="center"
                        spacing={2}
                        p={2}
                    >
                        <Image
                            maxW={{ base: "80%", xl: "40%" }}
                            objectFit="contain"
                            alt="project"
                            src={props.image}
                        />
                        <Text fontSize="md" align="justify">
                            {props.text}
                        </Text>
                    </Stack>
                </VStack>
            </Container>
        </Container>
    );
};

export default ProjectContainer;
