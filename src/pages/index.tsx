import {
  Avatar,
  Link,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={4}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Avatar
          w={{ base: '200px', md: '200px' }}
          h={{ base: '200px', md: '200px' }}
          name="Audric Serador"
          src="/audric.jpg"
          mb={4}
        />
        <Heading as="h1" size="2xl" mb={4}>
          Audric Serador
        </Heading>
        <Text fontSize="xl">
          Computer Science student at the University of Illinois at
          Urbana-Champaign with a background in software engineering, full stack
          web development, and natural language processing.
        </Text>
        <Link href="/AudricSeradorResume.pdf" isExternal>
          <Button colorScheme="teal" size="lg" mt={4}>
            Resume
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default Home;
