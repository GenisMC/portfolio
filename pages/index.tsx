import React, { useState, useEffect } from "react";
import {
    Container,
    Center,
    HStack,
    VStack,
    Stack,
    ButtonGroup,
    Button,
    Image,
    Switch,
    useColorMode,
    useColorModeValue,
    Divider,
    Text,
} from "@chakra-ui/react";
import SkillContainer from "./components/skill_container";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
    const { t, i18n } = useTranslation();
    const { toggleColorMode } = useColorMode();
    const textColor = useColorModeValue("#444444", "#ddd");
    let barColor = useColorModeValue("#737b8b", "#727272");
    const [winDim, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    };
    useEffect(
        function onFirstMount() {
            window.addEventListener("resize", detectSize);

            return () => {
                window.removeEventListener("resize", detectSize);
            };
        },
        [winDim]
    );
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    const breakPoint = 768;
    let divider = <Divider />;
    if (winDim.winWidth > breakPoint) {
        divider = (
            <Center height="200px">
                <Divider orientation="vertical" color={barColor} />
            </Center>
        );
    } else {
        divider = <Divider orientation="horizontal" color={barColor}/>;
    }

    return (
        <Container minW="100vw">
            <HStack
                position="relative"
                mt={8}
                mx={[0, 0, 12]}
                spacing={4}
                justify="space-between"
            >
                <ButtonGroup spacing={4}>
                    <Button
                        size="md"
                        onClick={() => i18n.changeLanguage("es")}
                        leftIcon={
                            <Image
                                src="https://github.com/CLEM-2/CLEM-2/raw/main/ES-Flag.png"
                                maxW="20px"
                            />
                        }
                    >
                        ES
                    </Button>
                    <Button
                        size="md"
                        onClick={() => i18n.changeLanguage("en")}
                        leftIcon={
                            <Image
                                src="https://raw.githubusercontent.com/CLEM-2/CLEM-2/main/EN-Flag.jpg"
                                maxW="20px"
                            />
                        }
                    >
                        EN
                    </Button>
                </ButtonGroup>
                <Switch
                    size="lg"
                    colorScheme="black"
                    onChange={toggleColorMode}
                />
            </HStack>
            <VStack spacing={8} mt={8}>
                <Stack
                    direction={["column", "row"]}
                    align="center"
                    justify="center"
                    spacing={4}
                >
                    <Image
                        borderRadius="full"
                        src="https://github.com/CLEM-2/CLEM-2/blob/main/1650976988947.jpg?raw=true"
                        boxSize="3xs"
                        fit="cover"
                    />
                    <VStack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold" color={textColor}>
                            Genis Mora Casado
                        </Text>
                        <Text fontSize="sm" fontWeight="bold" color={textColor}>
                            {t("developer")}
                        </Text>
                    </VStack>
                    {divider}
                    <Container
                        maxW={["100%", "40%"]}
                        height="3xs"
                        p={6}
                        borderRadius="16"
                    >
                        <VStack
                            spacing={2}
                            justify="space-evenly"
                            height="100%"
                        >
                            <Text fontSize="xl">{t("tech")}</Text>
                            <Text
                                fontSize="md"
                                align={["center", "justify"]}
                                fontWeight="bold"
                                color={accentColor}
                            >
                                React, TypeScript, Flutter, NodeJs.
                            </Text>
                            <Text fontSize="md" align="justify">
                                HTML, CSS, Angular, JavaScript, Python, Java,
                                C#, C++, SQL, MongoDB, PostgreSQL, Firebase,
                                Git, Docker {t("more")}
                            </Text>
                        </VStack>
                    </Container>
                </Stack>
                <Text fontSize="3xl" fontWeight="bold" color={textColor}>
                    {t("projects")}
                </Text>
                <Stack direction={["column", "row"]} spacing={8}>
                    <SkillContainer
                        title=""
                        text="HTML, CSS, React, Angular, NodeJs, Flutter, JavaScript, TypeScript"
                    />
                    <SkillContainer
                        title="other2"
                        text="HTML, CSS, React, Angular, NodeJs, Flutter, JavaScript, TypeScript"
                    />
                </Stack>
            </VStack>
        </Container>
    );
};

export default IndexPage;
