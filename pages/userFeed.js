import { Box, Flex } from "@chakra-ui/react";
import { useState, createContext } from "react";
import IssueFeedCard from "../comps/issueFeedCard";
import Post from "../lib/models/Post";

export const userContext = createContext();

const UserFeed = ({ posts }) => {
  const [feed, setFeed] = useState(posts);
  const [userData, setUserData] = useState({ userType: "contractor" });

  return (
    <userContext.Provider value={userData.userType}>
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
          alignItems="center"
        >
          {feed.map((post, index) => {
            return (
              <IssueFeedCard
                key={index}
                userType="user"
                name={post.name}
                description={post.description}
                totalContributed={post.totalContributed}
                imageUrl={post.imageUrl}
                location={post.location.readableAddress}
              />
            );
          })}
        </Flex>
      </Box>
    </userContext.Provider>
  );
};

export async function getServerSideProps() {
  try {
    const posts = await Post.find({});
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default UserFeed;
