import { Flex, Text } from "@chakra-ui/react";
import IssueContractorCard from "../comps/issueContractorCard";
import TabModal from "../comps/tabModal";

export default function MyIssues() {
    return (
      <Flex className="MyIssues" flexDirection="column">
        <Flex
          className="HeaderBox"
          bg="blue.500"
          color={"black"}
          h="10vh"
          w="100vw"
        ></Flex>
        <Text textAlign="center" fontSize="50px">
          My Issues
        </Text>
        <Flex flexDirection="column" px="2">
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
          <IssueContractorCard />
        </Flex>
        <TabModal />
      </Flex>
    );
}