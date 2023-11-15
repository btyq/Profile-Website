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
    Image,
    Heading,
    Center,
    Button,
    ButtonGroup
  } from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Project = React.forwardRef((props, ref) => {
    const projects = ["FreshBeerNearMe", "Research Conference", "Salary Calculator"];
    const [selectedProject, setSelectedProject] = React.useState(projects[0]);
  
    const handleProjectChange = (project) => {
      setSelectedProject(project);
    };
  
    const projectData = {
      "FreshBeerNearMe": {
        imageSrc: "https://i.imgur.com/gzuy9CH.png",
        description:
          "FreshBeerNearMe is a full-stack mobile app designed for beer enthusiasts and casual drinkers. With Binary Beer, it utilizes SmartKeg Tracking to provide key information like freshness, on-tap selections, temperature, and tasting notes. The app bridges the gap between casual and enthusiast beer drinkers, offering a delightful experience for all beer lovers.",
        demoLink: "https://youtu.be/pcCIxn3fovc",
        codeLink: "https://github.com/btyq/FreshBeerNearMe",
      },
      "Research Conference": {
        imageSrc: "https://i.imgur.com/UaSVDNr.png",
        description:
          "Project to develop a Research Conference Management System to streamline the submission, review, and decision-making processes for research papers. This system will enhance the efficiency of organizing conferences by providing a comprehensive platform.",
        demoLink: "https://youtu.be/nrn81UmKvc0",
        codeLink: "https://github.com/Jyles-Jin/paperAuthor-Project-2",
      },
      "Salary Calculator": {
        imageSrc: "https://i.imgur.com/XqSin8W.jpg",
        description:
          "Developed a Python application that reads employee clock-in and clock-out data to calculate their salary efficiently. The application automates the process, providing a streamlined solution for accurate salary calculations based on attendance records.",
        demoLink: "https://youtu.be/T6MBVg2XxtQ",
        codeLink: "https://github.com/btyq/lostSG",
      },
    };
  
    const redirectToDemo = () => {
      window.open(projectData[selectedProject].demoLink, "_blank");
    };
  
    const redirectToCode = () => {
      window.open(projectData[selectedProject].codeLink, "_blank");
    };
  
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
                  color={"Teal"}
                >
                  Projects
                </Heading>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
          </Stack>
        </Container>
        <Container maxW={"4xl"}>
            <Center>
                <Bounce bottom>
                  <ButtonGroup mb={4} spacing={4}>
                      {projects.map((project) => (
                      <Button
                          key={project}
                          bg={selectedProject === project ? "#DEDBA7" : "grey"}
                          variant="solid"
                          onClick={() => handleProjectChange(project)}
                      >
                          {project}
                      </Button>
                      ))}
                  </ButtonGroup>
                </Bounce>
            </Center>
          <Stack px={4} spacing={4} pb={{ base: 20, md: 20 }}>           
            <Center>
                <Card
                    direction={{ base: "column" }}
                    overflow="hidden"
                    bg="#2C3647"
                    style={{ width: "500px" }}
                    display={selectedProject === "FreshBeerNearMe" ? "block" : "none"}
                >
                    <Zoom left>
                        <Center>
                            <Image 
                                objectFit="cover" 
                                src={projectData[selectedProject]?.imageSrc}
                                style={{width: '600px', height:'350px'}}
                            />
                        </Center>
                        <Stack>
                            <CardBody align="left">
                                <Heading size="xl" color='teal'>
                                    {selectedProject}
                                </Heading>
                                <Text py={2} color='white'>                                                                         
                                    {projectData[selectedProject]?.description}
                                </Text>
                                <HStack py={2}>
                                    <Button bg="#DEDBA7" variant='solid' onClick={redirectToDemo}>
                                        Demo Video
                                    </Button>
                                    <Button bg="#DEDBA7" variant='solid' onClick={redirectToCode}>
                                        Source Code
                                    </Button>
                                </HStack>
                            </CardBody>
                        </Stack>
                    </Zoom>
                </Card>
            </Center>
            <Center>
            <Card
                direction={{ base: "column" }}
                overflow="hidden"
                bg="#2C3647"
                style={{ width: "500px" }}
                display={selectedProject === "Research Conference" ? "block" : "none"}
            >
                <Zoom left>
                    <Center>
                        <Image 
                            objectFit="cover" 
                            src={projectData[selectedProject]?.imageSrc}
                            style={{width: '600px', height:'350px'}}
                        />
                    </Center>
                    <Stack>
                        <CardBody align="left">
                            <Heading size="xl" color='teal'>
                                {selectedProject}
                            </Heading>
                            <Text py={2} color='white'>                                                                         
                                {projectData[selectedProject]?.description}
                            </Text>
                            <HStack py={2}>
                                <Button bg="#DEDBA7" variant='solid' onClick={redirectToDemo}>
                                    Demo Video
                                </Button>
                                <Button bg="#DEDBA7" variant='solid' onClick={redirectToCode}>
                                    Source Code
                                </Button>
                            </HStack>
                        </CardBody>
                    </Stack>
                </Zoom>
            </Card>
            </Center>
            <Zoom left>
                <Center>
                    <Card
                    direction={{ base: "column" }}
                    overflow="hidden"
                    bg="#2C3647"
                    style={{ width: "500px" }}
                    display={selectedProject === "Salary Calculator" ? "block" : "none"}
                    >
                    <Zoom left>
                            <Center>
                                <Image 
                                    objectFit="cover" 
                                    src={projectData[selectedProject]?.imageSrc}
                                    style={{width: '600px', height:'350px'}}
                                />
                            </Center>
                            <Stack>
                                <CardBody align="left">
                                    <Heading size="xl" color='teal'>
                                        {selectedProject}
                                    </Heading>
                                    <Text py={2} color='white'>                                                                         
                                        {projectData[selectedProject]?.description}
                                    </Text>
                                    <HStack py={2}>
                                        <Button bg="#DEDBA7" variant='solid' onClick={redirectToDemo}>
                                            Demo Video
                                        </Button>
                                        <Button bg="#DEDBA7" variant='solid' onClick={redirectToCode}>
                                            Source Code
                                        </Button>
                                    </HStack>
                                </CardBody>
                            </Stack>
                        </Zoom>
                    </Card>
                </Center>
            </Zoom>
          </Stack>
        </Container>
      </>
    );
  });
  
  export default Project;