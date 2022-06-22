import React from "react";
import {
    VStack,
    HStack,
    Stack,
    Text,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BackButton from "./components/back_button";

const PandaBox = () => {
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    const bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    const { t } = useTranslation();
    return (
        <VStack my={8} spacing={8} align="center">
            <BackButton />
            <Stack direction={["column", "row"]} align="baseline">
                <Text fontSize="3xl" fontWeight="bold">
                    PandaBox
                </Text>
                <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                    {t("pandabox.title")}
                </Text>
            </Stack>
            <HStack>
                <Image
                    src="https://github.com/GenisMC/CLEM-2/raw/main/pandabox/PandaBoxDrawer.png"
                    alt="heyplan-design"
                    h={{ base: "xs", lg: "lg" }}
                    border="2px solid"
                    borderColor={bgColor}
                />
                <Image
                    src="https://github.com/GenisMC/CLEM-2/raw/main/pandabox/PandaBoxHomePage.png"
                    alt="heyplan-design"
                    h={{ base: "xs", lg: "lg" }}
                    border="2px solid"
                    borderColor={bgColor}
                />
            </HStack>
            <VStack>
                {t("pandabox.desc")
                    .split("\n")
                    .map((item, index) => (
                        <Text
                            key={index}
                            fontSize={["md", "lg", "xl"]}
                            w={{ base: "90%", lg: "60%" }}
                            align="justify"
                        >
                            {item}
                            <br />
                            <br />
                        </Text>
                    ))}
            </VStack>
                <Image
                    src="https://github.com/GenisMC/CLEM-2/raw/main/pandabox/PandaBoxGroupsPage.png"
                    alt="heyplan-design"
                    h={{ base: "xs", lg: "lg" }}
                    border="2px solid"
                    borderColor={bgColor}
                />
        </VStack>
    );
};

export default PandaBox;
