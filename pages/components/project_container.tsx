import {
  useColorModeValue,
  Container,
  StackDivider,
  VStack,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  title: string,
  subtitle: string,
  image: string,
  text: any,
  href: string
}

const ProjectContainer = ({ href, image, subtitle, title, text }: Props) => {
  const bgColor = useColorModeValue("#f2f2f2", "#232b3b");
  const barColor = useColorModeValue("#737b8b", "#727272");
  const accentColor = useColorModeValue("#D40843", "#EA1552");

  return (
    <Link className="projectLink" href={href || ''} passHref>
      <Container
        id="projectContainer"
        my={[2]}
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
            divider={<StackDivider borderColor={barColor} />}
          >
            <Stack direction={["column", "row"]} align="center">
              <Text fontSize={["3xl", "2xl"]} align="center">
                {title}{" "}
              </Text>
              <Text
                fontSize={["xl", "lg"]}
                align={["center", "justify"]}
                color={accentColor}
              >
                {subtitle}
              </Text>
            </Stack>
            <Stack
              maxH={{ base: "100%", xl: "40%" }}
              align="center"
            >
              <Image
                maxW={{ base: "70%", lg: "50%" }}
                objectFit="contain"
                alt="project"
                src={image}
              />
              <Text fontSize="md" align="justify">
                {text}
              </Text>
            </Stack>
          </VStack>
        </Container>
      </Container>
    </Link>
  );
};

export default ProjectContainer;
