import {
  Avatar,
  Link,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { TypewriterEffect } from '~/components/home/cooleffect';

const Home = () => {
  const words = [
    { 
      text: "I'm",
      className: "text-brand-100",
    },
    {
      text: "Audric.",
      className: "text-brand-100",
    },
    {
      text: "I",
      className: "text-brand-100",
    },
    {
      text: "love",
      className: "text-brand-100",
    },
    {
      text: "building",
      className: "text-brand-100",
    },
    {
      text: "solutions.",
      className: "text-teal-200",
    },
  ];
  
  return (
    <VStack
      spacing={9}
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
        <TypewriterEffect words={words} />
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
