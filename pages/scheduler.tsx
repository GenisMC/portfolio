import React from "react";
import { VStack,Stack, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Scheduler = () => {
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    const bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    const { t, i18n } = useTranslation();
    return (
        <VStack spacing={8}>
            <Stack direction={["column", "row"]} align="baseline">
                <Text fontSize="3xl" fontWeight="bold">
                    Food Scheduler
                </Text>
                <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                    {t("scheduler.title")}
                </Text>
            </Stack>
            <Image
                src="https://github.com/GenisMC/CLEM-2/raw/main/scheduler/SchedulerDesktop.png"
                alt="heyplan-design"
                w={{ base: "90%", lg: "60%" }}
                border="2px solid"
                borderColor={bgColor}
            />
            </VStack>
    );
};

export default Scheduler;
