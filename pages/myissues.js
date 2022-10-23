import { Flex, Text } from "@chakra-ui/react";
import Post from "../lib/models/Post";
import IssueFeedCard from "../comps/issueFeedCard";
import TabModal from "../comps/tabModal";
import { useState } from "react";
import { useUserContext } from "../lib/userContext";
import Header from "../comps/header";

export async function getServerSideProps() {
  try {
    const posts = await Post.find({postState: "pending"});
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default function MyIssues({posts}) {
    const [feed, setFeed] = useState(posts);
    const userType = useUserContext()

    return (
      <Flex className="MyIssues" flexDirection="column" bg="gray.300">
        <Header />
        <Text textAlign="center" fontSize="50px">
          My Issues
        </Text>
        <Flex flexDirection="column" alignItems="center" px="2">
          {feed.map((post, index) => {
            return (
              <IssueFeedCard
                key={index}
                userType={userType}
                name={post.name}
                description={post.description}
                totalContributed={post.totalContributed}
                imageUrl={post.imageUrl}
                location={post.location?.readableAddress}
                postState={post.postState}
                postId={post._id}
              />
            );
          })}
        </Flex>
        <TabModal />
      </Flex>
    );
}