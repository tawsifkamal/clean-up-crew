import { Button, createIcon, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { userContext } from "../pages/userFeed";

export const CameraIcon = createIcon({
  displayName: "CameraIcon",
  viewBox: "0 0 32 32",
  path: (
    <g>
      <path d="M16 12.906a4.47 4.47 0 0 0 0 8.938 4.47 4.47 0 0 0 4.469-4.469A4.47 4.47 0 0 0 16 12.906zm0 7.063a2.577 2.577 0 1 1-.002-5.154A2.577 2.577 0 0 1 16 19.969z" />
      <path d="M25.625 9.812h-4.812l-2.062-2.75h-5.5l-2.062 2.75H6.375C5.618 9.812 5 10.43 5 11.188v12.375c0 .756.618 1.375 1.375 1.375h19.25c.757 0 1.375-.617 1.375-1.375V11.188c0-.758-.618-1.376-1.375-1.376zM16 23.477a6.103 6.103 0 1 1 .001-12.205A6.103 6.103 0 0 1 16 23.477zm9.625-10.399h-2.75v-1.375h2.75v1.375z" />
    </g>
  ),
});

export const HomeIcon = createIcon({
  displayName: "HomeIcon",
  viewBox: "0 0 32 32",
  path: (
    <path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z" />
  ),
});

export default function TabModal() {
    const router = useRouter();
    const userType = useContext(userContext);

    useEffect(() => {
        console.log(userType)
    }, [])

    function handleHome() {
        router.push("/userFeed")
    }

    function handleCamera() {
        if (userType == 'user') {
            router.push("/image-upload")
        } else {
            router.push("/myissues")
        }

    }

    return (
      <Flex position='fixed' bg='gray.200' left='30%' top='92%'  h='5vh' w='40vw' borderRadius='25px' >
        <Button h='100%' w='50%' borderRadius='25px 0 0 25px' onClick={handleHome}>
        <HomeIcon />
        </Button>
        <Button h='100%' w='50%' borderRadius='0 25px 25px 0' onClick={handleCamera}>
        <CameraIcon />
        </Button>
      </Flex>
    );
    
}