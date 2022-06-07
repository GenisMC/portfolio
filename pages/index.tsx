import { Container, Center,HStack, VStack, Image,Switch, useColorMode,useColorModeValue, Text} from '@chakra-ui/react';
import  SkillContainer  from './components/skill_container.tsx';

const IndexPage = () => {
    const { toggleColorMode } = useColorMode();
    const textColor = useColorModeValue('#444444', '#ddd');
    return (
        <Container minW="80vw">
            <Switch position="fixed" mt={8} size="lg" colorScheme="black" onChange={toggleColorMode}/>
            <Center>
                <VStack spacing={8} mt={8} >
                    <HStack spacing={4}>
                    <Image borderRadius="full" src="https://github.com/CLEM-2/CLEM-2/blob/main/1650976988947.jpg?raw=true" boxSize="3xs" fit="cover"/>
                    <VStack spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color={textColor}> Genis Mora Casado </Text>
                    <Text fontSize="sm" fontWeight="bold" color={textColor}> Full Stack Developer </Text>
                    </VStack>
                    </HStack>
                    <HStack spacing={8}>
                        <SkillContainer 
                            title="Technologies" 
                            text="HTML, CSS, React, Angular, NodeJs, Flutter, JavaScript, TypeScript"
                        />
                        <SkillContainer 
                            title="other2" 
                            text="HTML, CSS, React, Angular, NodeJs, Flutter, JavaScript, TypeScript"
                        />
                        <SkillContainer 
                            title="other2" 
                            text="HTML, CSS, React, Angular, NodeJs, Flutter, JavaScript, TypeScript"
                        />
                    </HStack>
                </VStack>
            </Center>
        </Container>    
    );
};

export default IndexPage;
