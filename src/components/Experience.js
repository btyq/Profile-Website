import React from 'react';
import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Flex,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
import { IoCaretForwardOutline } from "react-icons/io5";
import Fade from 'react-reveal/Fade';

const Experience = React.forwardRef((props, ref) => {

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
                                    Experience
                                </Heading>
                            </HStack>
                            <Divider orientation="horizontal" />
                        </Stack>
                    </Stack>
            </Container>
            <Fade left>
                <Container maxW={"4xl"} pb={{ base: 20, md: 36 }}>
                    <Card bg="#2C3647">
                        <CardHeader>
                            <Flex justifyContent="space-between">
                                <HStack>
                                <Box px={2} align="left">
                                    <Text color='white' fontWeight={500}>Atotech SEA Pte Ltd</Text>
                                    <Text color='white' fontWeight={500}>Intern</Text>
                                </Box>
                                </HStack>
                                <Text px={2} color='white' fontWeight={300}>
                                    2017 (6 Months)
                                </Text>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                        <Flex>
                            <List align="left" spacing={3}>
                                <ListItem color='white'>
                                    <ListIcon
                                        boxSize={6}
                                        as={IoCaretForwardOutline}
                                        color={'teal'}
                                    />
                                    Utilized VBA to optimize Excel calculations, creating a more efficient and convenient solution. The effectiveness of the implementation was proven, showcasing my ability to streamline processes and enhance productivity.
                                </ListItem>
                                <ListItem color='white'>
                                    <ListIcon
                                        boxSize={6}
                                        as={IoCaretForwardOutline}
                                        color={'teal'}
                                    />
                                    Involved in overseeing chemical automation plating and maintaining laboratory tank conditions for optimal chemical performance.
                                </ListItem>
                            </List>
                        </Flex>
                        </CardBody>
                    </Card>
                </Container>
            </Fade>
        </>
    );
});

export default Experience;