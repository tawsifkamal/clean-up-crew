import { Box, Flex, Text } from "@chakra-ui/react";
import { createContext, useState } from "react";
import IssueFeedCard from "../comps/issueFeedCard";
import TabModal from "../comps/tabModal";

export const userContext = createContext();

const UserFeed = () => {
  const [feed, setFeed] = useState([]);
  const [userData, setUserData] = useState({
    userType: 'contractor'
  });

  return (
    <userContext.Provider value={userData.userType}>
      <Box className="UserFeed" color={"blackAlpha.700"}>
        <Flex
          className="HeaderBox"
          bg="blue.500"
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
          <IssueFeedCard />
          <IssueFeedCard />
          <IssueFeedCard />
          <IssueFeedCard />
        </Flex>
        <TabModal/>
      </Box>
    </userContext.Provider>
  );
};

export default UserFeed;
