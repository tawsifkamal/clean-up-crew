import { Flex, Text, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserContext } from "../lib/userContext";
import { PersonIcon } from "../pages/userFeed";

export default function Header() {
    const { name } = useUserContext()
    const router = useRouter()
    const [page, setPage] = useState(
      (router.pathname == "/userFeed")
        ? "Welcome, " + (name
          ? name
          : "User")
        : (router.pathname !== "/image-upload")
        ? "My Issues"
        : ""
    );

    function signOut() {
        localStorage.clear()
        router.push("/")
    }

    return (
      <Flex
        className="HeaderBox"
        bg="gray.100"
        color={"black"}
        h="10vh"
        w="100vw"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        px="3"
      >
        <Text color="black" fontSize="2rem" fontFamily="fantasy">
         {page}
        </Text>
        <Spacer />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          onClick={signOut}
        >
          <PersonIcon color="white" />
          <Text>Sign Out</Text>
        </Flex>
      </Flex>
    );
}