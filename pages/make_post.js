import {Heading} from '@chakra-ui/react';
import ImgUpload from "../lib/img_upload";

export default function make_post() {
  return (
    <div>
      <Flex
        className="HeaderBox"
        bg="tomato"
        color={"black"}
        h="10vh"
        w="100vw"
      ></Flex>
      <input />
      <ImgUpload />
      <input />
    </div>
  );
}