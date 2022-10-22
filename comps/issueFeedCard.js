import { Box, Button, createIcon, Flex, Icon, Spacer, Text, Textarea } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { userContext } from "../pages/userFeed";

export const PinIcon = createIcon({
  displayName: "PinIcon",
  viewBox: "0 0 32 32",
  path: (
    <path
      fill="blackAlpha.700"
      d="M16.001 5c-4.216 0-7.714 3.418-7.634 7.634.029 1.578.719 2.824 1.351 4.024.242.461 6.264 10.332 6.264 10.332V27l.001-.007.002.007v-.01l6.531-10.377c.407-.703.793-1.771.793-1.771A7.631 7.631 0 0 0 16.001 5zM16 16.019a3.895 3.895 0 0 1-3.896-3.897A3.898 3.898 0 1 1 16 16.019z"
    />
  ),
});

export const LoveIcon = createIcon({
    displayName: "LoveIcon",
    viewBox: "0 0 32 32",
    path: (
        <path 
        fill="blackAlpha.700"
        d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z"
        />
    ),
})

export const DollarIcon = createIcon({
  displayName: "DollarIcon",
  viewBox: "0 0 64 64",
  path: (
    <path
      fill="blackAlpha.700"
      d="M45.8 41.9c0-3.68-1.7-10.234-13.1-12.817a.269.269 0 0 0-.028-.01C24.2 27.142 24.2 23.348 24.2 22.1c0-4.741 4.043-6.9 7.8-6.9a7.771 7.771 0 0 1 7.692 6.5 3 3 0 1 0 5.916-.994A13.733 13.733 0 0 0 35 9.54V5a3 3 0 0 0-6 0v4.488C22.674 10.7 18.2 15.717 18.2 22.1c0 3.667 1.705 10.208 13.12 12.821l.021.008C36.954 36.2 39.8 38.542 39.8 41.9c0 4.739-4.043 6.9-7.8 6.9a7.809 7.809 0 0 1-7.8-7.8 3 3 0 0 0-6 0A13.817 13.817 0 0 0 29 54.464V59a3 3 0 0 0 6 0v-4.484C41.326 53.3 45.8 48.287 45.8 41.9z"
    />
  ),
});

export const StarIcon = createIcon({
  displayName: "StarIcon",
  viewBox: "0 0 32 32",
  path: (
    <path
      fill="blackAlpha.700"
      d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"
    />
  ),
});

export const CoinIcon = createIcon({
    displayName: "CoinIcon",
    viewBox: "0 0 32 32",
    path: (
        <path d="M16 27C9.935 27 5 22.067 5 16 5 9.935 9.935 5 16 5c6.066 0 11 4.935 11 11 0 6.067-4.934 11-11 11zm-5.362-3.836A8.859 8.859 0 0 0 16 24.953c1.075 0 2.13-.191 3.138-.568a42.956 42.956 0 0 0-1.792-6.675c-3.929 1.275-5.954 4.137-6.708 5.454zm8.718-5.93a45.7 45.7 0 0 1 1.673 6.167 8.924 8.924 0 0 0 3.814-6.022 18.372 18.372 0 0 0-3.283-.311 14.353 14.353 0 0 0-2.204.166zM7.045 16c0 2.098.741 4.128 2.088 5.739 1.096-1.711 3.428-4.538 7.475-5.916-.186-.433-.38-.864-.582-1.287-3.483 1.003-7.049 1.252-8.979 1.308L7.045 16zm14.58-.973c1.061 0 2.17.095 3.304.286a8.858 8.858 0 0 0-1.826-4.755c-1.179 1.345-2.895 2.46-5.106 3.319.209.451.419.928.623 1.421.96-.181 1.97-.271 3.005-.271zm-9.869-6.906a8.952 8.952 0 0 0-4.429 5.66c1.715-.073 4.774-.314 7.737-1.103-1.351-2.4-2.615-3.854-3.308-4.557zm2.062-.804c.848.948 2.041 2.487 3.256 4.724 2.058-.767 3.602-1.763 4.598-2.961A8.946 8.946 0 0 0 16 7.046c-.734 0-1.466.091-2.182.271z" />
    )
})


export default function IssueFeedCard() {

    const {userType} = useContext(userContext);
    return (
      <Box
        my="2"
        mx="3"
        h="lg"
        w=""
        boxShadow="2px 2px 4px gray"
        borderRadius="25px"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="left"
          h="7.5%"
        >
          <PinIcon padding="0.2" h="100%" w="8vw" />
          <Text>Atlanta, GA</Text>
        </Flex>
        <Box bg="gray.400" w="100%%" h="50%"></Box>
        <Textarea
          placeholder="Description of the Issue"
          w="100%"
          h="30%"
          border="none"
        ></Textarea>
        <Flex flexDirection="row" px="2">
          {userType == "user" ? (
            <Flex flexDirection="row">
              <Button>
                <LoveIcon />
              </Button>
              <Button>
                <DollarIcon />
              </Button>
            </Flex>
          ) : (
            <Button>
              <StarIcon />
            </Button>
          )}
          <Spacer />
          <Flex mx='2' alignItems='center' flexDirection='row'>
            <CoinIcon />
            <Text>123 </Text>
          </Flex>
        </Flex>
      </Box>
    );
};