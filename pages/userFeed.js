import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import IssueFeedCard from "../comps/issueFeedCard";
import useGeoLocation from "../lib/hooks/useGeoLocation";
import Post from "../lib/models/Post";
import axios from "axios";

const UserFeed = ({ posts }) => {
  const [feed, setFeed] = useState(posts);
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
