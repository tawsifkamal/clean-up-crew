import { Box, Flex, Tab } from "@chakra-ui/react";
import { useState } from "react";
import { useUserContext } from "../lib/userContext";
import IssueFeedCard from "../comps/issueFeedCard";
import Post from "../lib/models/Post";
import TabModal from "../comps/tabModal";

const UserFeed = ({ posts }) => {
  const [feed, setFeed] = useState(posts);
  const { userType, userId } = useUserContext();

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
          const isLiked = false;
          if (
            post.likesArray.find((userObject) => userObject.userId === userId)
          ) {
            isLiked = true;
          }



          return (
            <IssueFeedCard
              key={index}
              userType={userType}
              name={post.name}
              description={post.description}
              totalContributed={post.totalContributed}
              imageUrl={post.postState === 'resolved' ? post.postSolution.solutionPicture : post.imageUrl}
              location={post.location}
              likesCount={post.likesCount}
              postId={post._id}
              isLikedFromProps={isLiked}
              postState={post.postState}
            />
          );
        })}
      </Flex>
      <TabModal />
    </Box>
  );
};

export async function getServerSideProps() {
  try {
    //create api call to get postState and display on card state
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

/**
 * filtering for my issues
 * routing for likes (including location for likes)
 */
