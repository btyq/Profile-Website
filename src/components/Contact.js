import React from 'react';
import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Center,
    IconButton,
  } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

const Contact = React.forwardRef((props, ref) => {

    const redirectToGitHub = () => {
        window.open('https://github.com/btyq', '_blank');
    }

    const redirectToLinkedIn = () => {
        window.open('https://linkedin.com/in/bryant-tan-you-quan', '_blank');
    }

    return (
        <>
            <Container ref={props.refProp} maxW={"8xl"} >
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
                                    Contact
                                </Heading>
                            </HStack>
                            <Divider orientation="horizontal" />
                        </Stack>
                    </Stack>
            </Container>
            <Fade bottom>
                <Container maxW={"4xl"}>
                    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                        <Heading fontSize={"3xl"} color='white'>Let's stay in touch!</Heading>
                        <Text color={"gray.600"} fontSize={"xl"} px={4}>
                            Please contact me directly through the email below!
                        </Text>
                        <Text color={'teal'} fontWeight={600} fontSize={"lg"} px={4}>
                            bryanttanyq98@gmail.com
                        </Text>
                        <Center>
                            <HStack pt={4} spacing={4} pb={{ base: 20, md: 36 }}>
                                <IconButton
                                    variant='ghost'
                                    aria-label='github'
                                    icon={<AiFillGithub/>}
                                    color='white'
                                    fontSize='30px'
                                    onClick={redirectToGitHub}
                                />
                                <IconButton
                                    variant='ghost'
                                    aria-label='linkedin'
                                    icon={<AiFillLinkedin/>}
                                    color='white'
                                    fontSize='30px'
                                    onClick={redirectToLinkedIn}
                                />
                            </HStack>
                        </Center>
                    </Stack>
                </Container>
            </Fade>
        </>
    );
});

export default Contact;