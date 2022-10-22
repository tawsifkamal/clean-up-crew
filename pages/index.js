import {
  Flex,
  Box,
  Container,
  Text,
  Heading,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [radioInput, setRadioInput] = useState("contractor");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const body = {
        name: userInput,
        userType: radioInput,
      };

      const response = await (await axios.post("api/user/login", body)).data;
      console.log(response);
      const userType = response.userType;

      if (userType === "contractor") {
        router.push("/contractor");
      } else {
        router.push("/userFeed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
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
        <Input placeholder="name" onChange={handleChange} />
        <Button onClick={handleSubmit}>Login</Button>

        <RadioGroup onChange={setRadioInput} value={radioInput}>
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="user">
              User
            </Radio>
            <Radio colorScheme="green" value="contractor">
              Contractor
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </Flex>
  );
};

export default Login;
