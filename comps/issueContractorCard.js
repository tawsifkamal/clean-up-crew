import { Box, Text, Flex, Button, Spacer, createIcon } from "@chakra-ui/react";
import { useState } from "react";
import { CoinIcon, PinIcon } from "./issueFeedCard";

export const CheckIcon = createIcon({
    displayName: "CheckIcon",
    viewBox: "0 0 32 32",
    path: (
        <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
    )
})

export const ArrowRIcon = createIcon({
    displayName: "ArrowRIcon",
    viewBox: "0 0 32 32",
    path: (
        <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/>
    )
})


export default function IssueContractorCard() {
    const [postData, setPostData] = useState({
        isResolved: false
    });
    return (
      <Flex
        w="100%"
        h="8vh"
        bg="gray.200"
        borderRadius="25px"
        px="4"
        py="2"
        my="2"
      >
        <Flex className="Image" w="20%" h="100%" bg="blackAlpha.500"></Flex>
        <Spacer />
        <Flex flexDirection="column">
          <Text>Description</Text>
          <Spacer />
          <Flex flexDirection="row" justifyContent="left" alignItems="center">
            <PinIcon />
            <Text>Atlanta, GA</Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex flexDirection="column">
          <Flex flexDirection="row" alignItems="center">
            <CoinIcon />
            <Text>123</Text>
          </Flex>
          <Button>
            <Flex flexDirection="row" alignItems='center'>
                <Text>{postData?.isResolved ? "Resolved" : "Resolve"}</Text>
                <Spacer />
                {postData?.isResolved ? <CheckIcon /> : <ArrowRIcon /> }
            </Flex>
          </Button>
        </Flex>
      </Flex>
    );

}