import { Container, Center, VStack, Image} from '@chakra-ui/react';

const IndexPage = () => {
    return (
        <Container>
            <Center>
                <VStack spacing={8} mt={8}>
                    <Image borderRadius="full" src="https://github.com/CLEM-2/CLEM-2/blob/main/1650976988947.jpg?raw=true" boxSize="3xs" fit="cover"/>
                    <Container maxW="sm">
                        <h1>CLEM-2</h1>
                        <p>
                            CLEM-2 is a web application that allows you to create and manage your own custom learning environment.
                        </p>
                        <p>
                            It is a tool that allows you to create and manage your own custom learning environment.
                        </p>
                        </Container>
                </VStack>
            </Center>
        </Container>    
    );
};

export default IndexPage;
