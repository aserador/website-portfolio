import { Box, Flex, Link as ChakraLink, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Stack direction="row" spacing={4}>
        <ChakraLink as={NextLink} href="/">
          Home
        </ChakraLink>
        <ChakraLink as={NextLink} href="/about">
          About
        </ChakraLink>
        <ChakraLink as={NextLink} href="/contact">
          Contact
        </ChakraLink>
      </Stack>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;