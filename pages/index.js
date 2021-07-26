import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
  Icon,
  Avatar,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import { MainContainer } from '../styles/uielements';

const VideoCard = ({ title, length, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    {...rest}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Box
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        borderRadius={8}
        w="250px"
        h="150px"
        mr={8}
        as="img"
        objectFit="cover"
        src="/video.png"
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
);

const Index = () => (
  <>
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">

      Learn Next.js
      <Divider borderColor="gray.200" my={8} w="100%" />
      <Subscribe />

      <Avatar
        size="lg"
        name="Lee Robinson"
        src="https://bit.ly/33vEjhB"
        mr={4}
      />
      <Box>
        <Text color="gray.700" mt={4} fontSize={['sm', 'lg']}>
          <b>I'm Lee Robinson</b> –– developer, writer, and the creator of
          Mastering Next.js and React 2025.
        </Text>
        <MainContainer>
          <h1>Mastering Next.js</h1>
        </MainContainer>
        <Link
          mt={2}
          isExternal
          href="https://leerob.io"
          textDecoration="none"
          borderBottom="2px solid #ff9cf9"
          transition="all 0.1s ease-in"
          fontStyle="italic"
          fontSize={['sm', 'md']}
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid #09DB1F'
          }}
        >
          more about me &#187;
        </Link>
      </Box>

    </Flex>

  </>
);

export default Index;
