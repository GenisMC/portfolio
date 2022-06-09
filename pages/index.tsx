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
import ProjectContainer from "./components/project_container";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
    // Translation Hook
    const { t, i18n } = useTranslation();
    // Color Mode Hook
    const { toggleColorMode } = useColorMode();
    // Text color switcher
    const textColor = useColorModeValue("#444", "#ddd");
    const textColorVar = useColorModeValue("#777", "#9AA3B4");
    // Divider component
    const accentColor = useColorModeValue("#D40843", "#EA1552");

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
                        <Text fontSize={["4xl","2xl"]} align={["center", "justify"]} fontWeight="bold" color={textColor}>
                            Genis Mora Casado
                        </Text>
                        <Text fontSize={["2xl","xl"]} fontWeight="bold" color={textColorVar}>
                            {t("developer")}
                        </Text>
                    </VStack>
                    <Container
                        maxW={["100%", "35%"]}
                        height="3xs"
                        p={6}
                        borderRadius="16"
                    >
                        <VStack
                            spacing={2}
                            justify="space-evenly"
                            height="100%"
                        >
                            <Text fontSize={["2xl","xl"]} fontWeight="bold">{t("tech")}</Text>
                            <Text
                                fontSize="md"
                                align={["center", "justify"]}
                                fontWeight="bold"
                                color={accentColor}
                            >
                                React, TypeScript, Flutter, NodeJs.
                            </Text>
                            <Text fontSize="md" color={textColorVar} align="justify">
                                HTML, CSS, Angular, JavaScript, Python, Java,
                                C#, SQL, MongoDB, PostgreSQL, Firebase,
                                Git, Docker {t("more")}
                            </Text>
                        </VStack>
                    </Container>
                </Stack>
                <Text fontSize={["3xl","2xl"]} fontWeight="bold" color={textColor}>
                    {t("projects")}
                </Text>
                <Stack direction={["column", "row"]} spacing={8}>
                    <ProjectContainer
                        title="HeyPlan"
                        subtitle="Flutter"
                        image="https://github.com/CLEM-2/CLEM-2/raw/main/heyplan-logob.png"
                        text={t("heyplandesc")}
                    />
                    <ProjectContainer
                        title={t('schedulerTitle')}
                        subtitle="React native"
                        image="https://github.com/CLEM-2/CLEM-2/raw/main/scheduler-icon.png"
                        text={t("schedulerDesc")}
                    />
                </Stack>
            </VStack>
        </Container>
    );
};

export default IndexPage;
