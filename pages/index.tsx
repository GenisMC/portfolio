import {
    Container,
    HStack,
    VStack,
    Flex,
    Stack,
    ButtonGroup,
    Button,
    Image,
    Switch,
    useColorMode,
    useColorModeValue,
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
    // Variant of the text color
    const textColorVar = useColorModeValue("#777", "#9AA3B4");
    // Accent color
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    // Variant background
    let bgColor = useColorModeValue("#f2f2f2", "#232b3b");

    return (
        <VStack p={4}>
            <HStack
                minW="90%"
                position="relative"
                pb={8}
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
                        <Text
                            fontSize={["4xl", "2xl"]}
                            align={["center", "justify"]}
                            fontWeight="bold"
                            color={textColor}
                        >
                            Genis Mora Casado
                        </Text>
                        <Text
                            fontSize={["2xl", "xl"]}
                            fontWeight="bold"
                            color={textColorVar}
                        >
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
                            <Text fontSize={["2xl", "xl"]} fontWeight="bold">
                                {t("tech")}
                            </Text>
                            <Text
                                fontSize="md"
                                align={["center", "justify"]}
                                fontWeight="bold"
                                color={accentColor}
                            >
                                React, TypeScript, Flutter, NodeJs.
                            </Text>
                            <Text
                                fontSize="md"
                                color={textColorVar}
                                align="justify"
                            >
                                HTML, CSS, Angular, JavaScript, Python, Java,
                                C#, SQL, MongoDB, PostgreSQL, Firebase, Git,
                                Docker {t("more")}
                            </Text>
                        </VStack>
                    </Container>
                </Stack>
                <Text
                    fontSize={["3xl", "2xl"]}
                    fontWeight="bold"
                    color={textColor}
                >
                    {t("projects")}
                </Text>
                <Flex p={2} direction={{ base: "column", md: "row" }} >
                    <ProjectContainer
                        title="HeyPlan"
                        subtitle="Flutter"
                        image="https://github.com/CLEM-2/CLEM-2/raw/main/heyplan-logob.png"
                        text={t("heyplandesc")}
                        link="./components/project_container.tsx"
                    />
                    <ProjectContainer
                        title={t("schedulerTitle")}
                        subtitle="React native"
                        image="https://github.com/CLEM-2/CLEM-2/raw/main/scheduler-icon.png"
                        text={t("schedulerDesc")}
                    />
                    <ProjectContainer
                        title={"PandaBox"}
                        subtitle="Angular NodeJs"
                        image="https://github.com/CLEM-2/CLEM-2/raw/main/pandabox-logop.png"
                        text={t("pandaDesc")}
                    />
                </Flex>
                <Text fontSize="2xl" fontWeight="bold">
                    {t("about")}
                </Text>
                <Text
                    maxW={{base:"100%", lg:"50%"}}
                    fontSize="lg"
                    align="justify"
                    p={2}
                    color={textColorVar}
                >
                    {t("aboutDesc")}
                </Text>
                <VStack spacing={0} minW="100%">
                    <Text fontSize="2xl" fontWeight="bold">
                        {t("contact")}
                    </Text>
                    <Text
                        maxW={["95%", "50%"]}
                        fontSize="lg"
                        align="justify"
                        p={2}
                        color={textColorVar}
                    >
                        {t("contactDesc")}
                    </Text>
                    <Flex
                        bg={bgColor}
                        minW="95%"
                        borderRadius="16"
                        align="center"
                        justify="center"
                        wrap="wrap"
                    >
                    <a href="mailto:genis9d@gmail.com"><Image p={2}  src="https://img.icons8.com/color/48/undefined/gmail-new.png"/></a>
                    <a href="https://www.linkedin.com/in/genis-mora-casado-8263a4233/"><Image p={2} src="https://img.icons8.com/color/48/undefined/linkedin-circled--v1.png"/></a>
                    <a href="tel:+34693016402"><Image p={2} src="https://img.icons8.com/color/48/undefined/apple-phone.png"/></a>
                    <a href="mailto:genis9d@gmail.com"><Image p={2} src="https://img.icons8.com/color/48/undefined/instagram-new--v1.png"/></a>
                    <a href="mailto:genis9d@gmail.com"><Image p={2} src="https://img.icons8.com/color/48/undefined/telegram-app--v1.png"/></a>
                    </Flex>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default IndexPage;
