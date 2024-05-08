import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" alignItems="center" flexDirection="column">
      <Flex mb={4}>
        <ChakraLink href="https://www.linkedin.com/in/audricserador/" isExternal mx={2}>
          <FaLinkedin size="36px" />
        </ChakraLink>
        <ChakraLink href="https://www.github.com/aserador/" isExternal mx={2}>
          <FaGithub size="36px" />
        </ChakraLink>
        <ChakraLink href="mailto:audricciel@gmail.com" mx={2}>
          <FaEnvelope size="36px" />
        </ChakraLink>
      </Flex>
      <Text fontSize="xl">
        © {new Date().getFullYear()} - {' '}Audric Serador
      </Text>
    </Flex>
  );
};

export default Footer;