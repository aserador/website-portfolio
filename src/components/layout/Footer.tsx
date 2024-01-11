import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://www.linkedin.com/in/audricserador/"
          isExternal
          rel="noopener noreferrer"
        >
          Audric Serador
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
