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
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserContext } from "../lib/userContext";
import useGeoLocation from "../lib/hooks/useGeoLocation";
import getAddress from "../lib/getReadableAddress";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [radioInput, setRadioInput] = useState("contractor");
  const [readableAddress, setReadableAddress] = useState("");
  const router = useRouter();
  const coords = useGeoLocation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (coords) {
      getAddress(setReadableAddress, coords);
    }
  }, [coords]);

  if (!hasMounted) {
    return null;
  }

  const { setUserType, setCurrentLocation, setUserId, setName } =
    useUserContext();

  const handleSubmit = async () => {
    try {
      const body = {
        name: userInput,
        userType: radioInput,
        currentLocation: {
          longitude: coords.longitude,
          latitude: coords.latitude,
          readableAddress: readableAddress,
        },
      };

      const response = await (await axios.post("api/user/login", body)).data;
      console.log(response);

      localStorage.setItem("userType", response.userType);
      localStorage.setItem("userId", response._id);
      localStorage.setItem("userName", response.name);
      localStorage.setItem(
        "currentLocation",
        JSON.stringify(response.currentLocation)
      );

      setUserType(response.userType);
      setUserId(response._id);
      setName(response.name);
      setCurrentLocation(response.currentLocation);

      router.push("/userFeed");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return readableAddress ? (
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
  ) : (
    <Heading>Loading</Heading>
  );
};

export default Login;
