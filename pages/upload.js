import { Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useGeoLocation from "../lib/hooks/useGeoLocation";
const Upload = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const coords = useGeoLocation();
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return coords ? (
    <Flex>
      <Heading>Upload Page</Heading>
      <Text>longitude {coords.longitude}</Text>
      <Text>latitude {coords.latitude}</Text>
    </Flex>
  ) : (
    <Heading>Loading</Heading>
  );
};

export default Upload;
