import React, { useRef} from 'react';
import {
    IconButton,
    Box, 
    Flex, 
    Button,
    Stack,
    } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

const Navbar = ({ aboutRef, projectRef, experienceRef, contactRef}) => {

    const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/btyq', '_blank');
    }

    const redirectToLinkedIn = () => {
        window.open('https://linkedin.com/in/bryant-tan-you-quan', '_blank');
    }

  return (
    <Box bg="#171a23" p={4}>
      <Flex justify="space-between" align="center">
        <Flex>
            <Fade left>
              <Stack direction={"row"} spacing={4}>
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
              </Stack>  
            </Fade>  
        </Flex>
        <Flex>
          <Fade right>
            <Stack direction={"row"} spacing={5}>
              <Button variant='ghost' color='white' onClick={() => scrollToRef(aboutRef)}>
                About
              </Button>
              <Button variant='ghost' color='white' onClick={() => scrollToRef(projectRef)}>
                Projects
              </Button>
              <Button variant='ghost' color='white' onClick={() => scrollToRef(experienceRef)}>
                Experience
              </Button>
              <Button variant='ghost' color='white' onClick={() => scrollToRef(contactRef)}>
                Contact
              </Button>
            </Stack>
          </Fade>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;