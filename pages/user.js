import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function User() {
    const [feed, setFeed] = useState([]);
    const [userData, setUserData] = useState({});
    

    return (
      <div className="User">
        <Flex className="Header" color={"blackAlpha.700"} flexDirection={"row"}>
          <Flex className="HeaderBox" bg='tomato' color={"black"} h="10vh" w="100vw">
            
          </Flex>
          <Flex className="UserFeed" flexDirection='column' overflowY='scroll'>
            
          </Flex>
        </Flex>
        
      </div>
    );
}