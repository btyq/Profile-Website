import React from 'react';
import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Flex,
    Image,
    Button,
    Center,
  } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const About = React.forwardRef((props, ref) => {
    return (
        <>
            <Container ref={props.refProp} maxW={"8xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack align="center" direction="row" px={4}>
                        <HStack mx={4}>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}
                                lineHeight={"10%"}
                                color={'Teal'}
                            >
                                About
                            </Heading>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                </Stack>
            </Container>
            <Container maxW={"4xl"}>
                <Flex justify="space-between" align="flex-start">
                    <Fade left>
                        <Box textAlign='left' width='80%' marginRight='4rem'>
                            <Text fontWeight='600' color='white' marginBottom='1rem'>                       
                                Hello, my name is Bryant Tan. My journey into the world of technology began with a <span style={{ color: '#DEDBA7'}}>self-driven passion for coding and scripting macros </span> for personal use. This curiosity led me into the realm of programming and computer science.  
                            </Text>
                            <Text fontWeight='600' color='white' marginBottom='1rem'>
                                During my time at the University of Wollongong, I delved deep into the <span style={{ color: '#DEDBA7'}}>intricacies of algorithms and data structures</span>, enabling me to apply this knowledge to my projects and assignments. 
                            </Text>
                            <Text fontWeight='600' color='white' marginBottom='1rem'>
                                Since graduating, I've remained committed to staying updated with the <span style={{ color: '#DEDBA7'}}>latest technology trends</span>. I continuously practice implementing <span style={{ color: '#DEDBA7'}}>efficient algorithms and explore various tools</span>, enhancing my skillset along the way.
                            </Text>
                        </Box>
                    </Fade>
                    <Fade right>
                        <Box width='300px' height='400px'>
                            <Image 
                                style={{width: '300px', height:'400px'}}
                                src='https://i.imgur.com/Itccu47.jpg'
                                alt='Me' 
                            />
                        </Box>
                    </Fade>
                </Flex>
            </Container>
            <Container maxW={"2xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 20 }}
                >
                    <Bounce top>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                            lineHeight={"5%"}
                            color={'teal'}
                            textDecoration= 'underline'
                            marginTop={10}
                        >
                            Technical Skills
                        </Heading>
                    </Bounce>
                    <Center>
                        <Stack direction={'row'}>    
                            <Fade left>              
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        Java
                                </Button>
                            </Fade>
                            <Fade left delay={200}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        Python
                                </Button>
                            </Fade>
                            <Fade left delay={400}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        Javascript
                                </Button>
                            </Fade>
                            <Fade left delay={600}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        ReactJS
                                </Button>
                            </Fade>
                            <Fade left delay={800}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        NodeJS
                                </Button>
                            </Fade>
                            <Fade left delay={1000}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        MySQL
                                </Button>
                            </Fade>
                            <Fade left delay={1200}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '80px'}}

                                >
                                        MongoDB
                                </Button>
                            </Fade>
                        </Stack>
                    </Center>
                    <Bounce top>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                            lineHeight={"5%"}
                            color={'teal'}
                            textDecoration= 'underline'
                        >
                            Soft Skills
                        </Heading>
                    </Bounce>
                    <Center>
                        <Stack direction={'row'}>
                            <Fade left>                  
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '150px'}}

                                >
                                        Team Player
                                </Button>
                            </Fade>
                            <Fade left delay={200}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '150px'}}

                                >
                                        Problem Solving
                                </Button>
                            </Fade>
                            <Fade left delay={400}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '150px'}}

                                >
                                        Critical Thinking
                                </Button>
                            </Fade>
                            <Fade left delay={600}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '150px'}}

                                >
                                        Adaptability
                                </Button>
                            </Fade>
                            <Fade left delay={800}>
                                <Button 
                                    variant='solid' 
                                    bg='#DEDBA7' 
                                    style={{ pointerEvents: 'none', borderRadius: '10px' , width: '150px'}}

                                >
                                        Analytical
                                </Button>
                            </Fade>
                        </Stack>
                    </Center>
                </Stack> 
            </Container>
        </>
    );
});

export default About;