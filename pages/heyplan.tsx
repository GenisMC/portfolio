import React from "react";
import {
    IconButton,
    Stack,
    VStack,
    Text,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const HeyPlan = () => {
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    const bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    return (
        <VStack spacing={8} m={4} align="center">
            <IconButton
                icon={<FaArrowLeft />}
                size="lg"
                aria-label="arrow-left"
                variant="ghost"
                color={accentColor}
                position="fixed"
                top={5}
                left={5}
                onClick={() => window.open("/","_self")}
            />
            <Stack direction={["column", "row"]} align="baseline">
                <Text fontSize="3xl" fontWeight="bold">
                    HeyPlan
                </Text>
                <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                    Mobile app made with Flutter
                </Text>
            </Stack>
            <Image
                src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan-moqup.png"
                alt="heyplan-design"
                w={["90%", "60%"]}
                border="2px solid"
                borderColor={bgColor}
            />
        </VStack>
    );
};

export default HeyPlan;
