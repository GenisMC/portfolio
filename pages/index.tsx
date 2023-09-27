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
  Box,
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
                alt="Spanish"
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
                alt="English"
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
      <VStack mt={8}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          spacing={4}
        >
          <Image
            borderRadius="full"
            alt="Profile"
            src="https://github.com/CLEM-2/CLEM-2/blob/main/ProfileSmall.jpg?raw=true"
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
              {t("index.developer")}
            </Text>
          </VStack>
          <Container
            maxW={{ base: "100%", lg: "35%" }}
            height="3xs"
            p={6}
            borderRadius="16"
          >
            <VStack
              spacing={2}
              justify="space-evenly"
              height="100%"
            >
              <Text fontSize={["3xl", "2xl"]} fontWeight="bold">
                {t("index.tech")}
              </Text>
              <Text
                fontSize="lg"
                align={["center", "justify"]}
                fontWeight="bold"
                color={accentColor}
              >
                Js/Ts, React, Svelte, Flutter
              </Text>
              <Box bg={bgColor} p={4} rounded={8} maxW={{ base: "100%", sm: "95%" }}>
                <Text
                  fontSize="md"
                  color={textColorVar}
                  align="justify"
                >
                  SSR (Next, Sveltekit), Angular, Python, Java, Rust,
                  C#, SQL, MongoDB, PostgreSQL, Prisma,
                  Docker, NodeJs, Tailwindcss {t("index.more")}
                </Text>
              </Box>
            </VStack>
          </Container>
        </Stack>
        <Text
          fontSize={["3xl", "2xl"]}
          fontWeight="bold"
          color={textColor}
        >
          {t("index.projects")}
        </Text>
        <Stack p={2} pb={4} direction={{ base: "column", lg: "row" }} >
          <ProjectContainer
            title="HeyPlan"
            subtitle="Flutter"
            image="https://github.com/CLEM-2/CLEM-2/raw/main/heyplan-logob.png"
            text={t("index.heyplandesc")}
            href="./heyplan"
          />
          <ProjectContainer
            title={"PandaBox"}
            subtitle="Angular NodeJs"
            image="https://github.com/CLEM-2/CLEM-2/raw/main/pandabox-logop.png"
            text={t("index.pandaDesc")}
            href="./pandabox"
          />
          <ProjectContainer
            title={"Volutes"}
            subtitle="React NextJs"
            image="https://raw.githubusercontent.com/GenisMC/CLEM-2/main/volutes/LogoSquare.png"
            text={t("index.volutesDesc")}
            href="https://volutes.vercel.app/tienda-online"
          />
        </Stack>
        <Box w={{ base: "100%", lg: "95%" }} h="1px" bg={textColorVar}></Box>
        <Text
          pt={2}
          maxW={{ base: "100%", lg: "50%" }}
          fontSize="lg"
          align="justify"
          color={textColorVar}
        >
          {t("index.portfolio")}
        </Text>
        <Text pt={4} fontSize="2xl" fontWeight="bold">
          {t("index.about")}
        </Text>
        <Text
          maxW={{ base: "100%", lg: "50%" }}
          fontSize="lg"
          align="justify"
          py={4}
          color={textColorVar}
        >
          {t("index.aboutDesc")}
        </Text>
        <VStack spacing={0} minW="100%">
          <Text fontSize="2xl" fontWeight="bold">
            {t("index.contact")}
          </Text>
          <Text
            maxW={["95%", "50%"]}
            fontSize="lg"
            align="justify"
            p={2}
            color={textColorVar}
          >
            {t("index.contactDesc")}
          </Text>
          <Flex
            bg={bgColor}
            minW="95%"
            borderRadius="16"
            align="center"
            justify="center"
            wrap="wrap"
          >
            <a href="mailto:genis9d@gmail.com"><Image p={2} alt="mail" src="https://img.icons8.com/clouds/48/undefined/gmail-new.png" /></a>
            <a href="https://www.linkedin.com/in/genis-mora-casado-8263a4233/"><Image p={2} alt="linkedin" src="https://img.icons8.com/color/48/undefined/linkedin-circled--v1.png" /></a>
            <a href="tel:+34693016402"><Image p={2} alt="phone" src="https://img.icons8.com/color/48/undefined/apple-phone.png" /></a>
            <a href="https://github.com/GenisMC"><Image p={2} alt="github" src="https://img.icons8.com/nolan/48/undefined/github.png" /></a>
          </Flex>
        </VStack>
      </VStack>
    </VStack >
  );
};

export default IndexPage;
