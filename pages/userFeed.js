import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import IssueFeedCard from "../comps/issueFeedCard";

const UserFeed = () => {
  const [feed, setFeed] = useState([]);
  const [userData, setUserData] = useState({});

  return (
    <Box className="Header" color={"blackAlpha.700"}>
      <Flex
        className="HeaderBox"
        bg="tomato"
        color={"black"}
        h="10vh"
        w="100vw"
      ></Flex>
      <Flex
        className="UserFeed"
        flexDirection="column"
        overflowY="scroll"
        justifyContent="center"
      >
        <IssueFeedCard userType={"user"} />
        <IssueFeedCard userType={"user"} />
        <IssueFeedCard userType={"user"} />
        <IssueFeedCard userType={"user"} />
      </Flex>
    </Box>
  );
};

export default UserFeed;
