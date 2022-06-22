import React from "react";
import {
    Stack,
    VStack,
    Text,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Carousel from "better-react-carousel";
import BackButton from './components/back_button';


const HeyPlan = () => {
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    const bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    const { t } = useTranslation();
    return (
    <>
        <VStack spacing={8} mt={8} align="center">
            <BackButton />
            <Stack direction={["column", "row"]} align="baseline">
                <Text fontSize="3xl" fontWeight="bold">
                    HeyPlan
                </Text>
                <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                    {t("heyplan.title")}
                </Text>
            </Stack>
            <Image
                src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan-moqup.png"
                alt="heyplan-design"
                w={{ base: "90%", lg: "60%" }}
                border="2px solid"
                borderColor={bgColor}
            />
            <VStack>
                {" "}
                {t("heyplan.desc")
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
            <Carousel
                showDots={true}
                rows={1}
                cols={3}
                containerStyle={{ width: "90%", height: "50em" }}
                loop
            >
                <Carousel.Item>
                    <Image
                        borderRadius="16px"
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137259.jpg"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137267.jpg"
                        borderRadius="16px"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137273.jpg"
                        borderRadius="16px"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137292.jpg"
                        borderRadius="16px"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137279.jpg"
                        borderRadius="16px"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        borderRadius="16px"
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137286.jpg"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://github.com/GenisMC/CLEM-2/raw/main/heyplan/1655721137297.jpg"
                        borderRadius="16px"
                        alt="heyplan-1"
                    />
                </Carousel.Item>
            </Carousel>
        </VStack>
              </>
    );
};

export default HeyPlan;
