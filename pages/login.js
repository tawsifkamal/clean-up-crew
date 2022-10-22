import { Flex, Box, Container, Text, Heading, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Flex
        flexDirection="column"
        width="sm"
        height="2xs"
        p={5}
        justifyContent="center"
        gap={6}
        boxShadow="base"
      >
        <Heading alignSelf="left" fontSize="lg">
          Enter Name To Login
        </Heading>
        <Input placeholder="name" />
      </Flex>
    </Flex>
  );
};

export default Login;
