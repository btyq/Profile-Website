import React from 'react';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Center,
    } from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    const downloadResume = () => {
        const resumeFilePath = process.env.PUBLIC_URL + '../assets/resume.pdf';

        fetch(resumeFilePath)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');

                a.href = url;
                a.download = 'BryantResume.pdf'; 
                document.body.appendChild(a);
            
                a.click();

                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            });
    };

    return (
        <>
            <Zoom bottom>
                <Container maxW={"3xl"}>
                    <Stack
                        as={Box}
                        textAlign={"center"}
                        spacing={{ base: 8, md: 14 }}
                        pb={{ base: 20, md: 36 }}
                        pt={{ base: 36, md: 52 }}
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                            lineHeight={"10%"}
                            color={'white'}
                        >
                            Bryant Tan You Quan
                        </Heading>
                        <Text
                            color={"teal"}
                            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                        >
                            Aspiring software engineer.
                        </Text>
                        <Text
                            color={"white"}
                            fontSize={{ base: "2x1", sm: "xl", md: "2xl" }}
                        >
                            I'm a recent graduate aspiring to make a mark as a software engineer. Eager to learn and grow, I am passionate about leveraging my skills to create innovative and impactful solutions. Open to new opportunities and challenges, I am excited to contribute to the world of technology.
                        </Text>
                        <Center>
                            <Button
                                variant='solid'
                                size='md'
                                height='48px'
                                width='200px'
                                bg='#DEDBA7'
                                onClick={downloadResume}
                            >
                                Download Resume
                            </Button>
                        </Center>
                    </Stack>
                </Container>
            </Zoom>
        </>
    );
};

export default Home;