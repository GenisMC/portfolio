import { Container, Center,HStack, VStack, Image} from '@chakra-ui/react';
import  SkillContainer  from './components/skill_container.tsx';

const IndexPage = () => {
    return (
        <Container minW="80vw">
            <Center>
                <VStack spacing={8} mt={8}>
                    <Image borderRadius="full" src="https://github.com/CLEM-2/CLEM-2/blob/main/1650976988947.jpg?raw=true" boxSize="3xs" fit="cover"/>
                    <HStack spacing={8}>
                        <SkillContainer />
                        <SkillContainer />
                        <SkillContainer />
                    </HStack>
                </VStack>
            </Center>
        </Container>    
    );
};

export default IndexPage;
