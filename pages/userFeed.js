import { Box, createIcon, Flex, Spacer, Tab, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useUserContext } from "../lib/userContext";
import IssueFeedCard from "../comps/issueFeedCard";
import Post from "../lib/models/Post";
import TabModal from "../comps/tabModal";
import Header from "../comps/header";

export const PersonIcon = createIcon({
  displayName: "PersonIcon",
  fill: "white",
  viewBox: "0 0 32 32",
  path: (
    <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>
  ),
});

const UserFeed = ({ posts }) => {
  const [feed, setFeed] = useState(posts);
  const { userType, userId, name } = useUserContext();

  return (
    <Box className="Header" color={"blackAlpha.700"} bg='gray.300' paddingBottom='5'>
      <Header />
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
