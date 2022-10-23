import { useState } from "react";
import axios from "axios";
import { AspectRatio, Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import TabModal, { CameraIcon } from "../../comps/tabModal";

const BUCKET_URL = `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.amazonaws.com/`;

export default function ImgUpload() {
  const [file, setFile] = useState();
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const selectFile = async (e) => {
    setFile(e.target.files[0]);
    await uploadFile()
  };

  const uploadFile = async () => {
    setUploadingStatus("Uploading the file to AWS S3");
    console.log(BUCKET_URL);
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name,
      type: file.type,
    });

    const url = data.url;
    try {
      let { newData } = await axios.put(url, file, {
        headers: {
          "Content-type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (e) {
      console.log(e);
    }

    setUploadedFile(BUCKET_URL + file.name);
    setFile(null);
  };

  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <Flex
        className="HeaderBox"
        bg="green.500"
        color={"black"}
        h="10vh"
        w="100vw"
      ></Flex>
      <Flex flexDirection="row" justifyContent="center">
        <Flex my="4" flexDirection="column">
          <AspectRatio ratio={1} maxH="30vh" my="2">
            {uploadedFile ? (
              <img src={uploadedFile} />
              ) : (
              <Box bg="gray.400">
                <CameraIcon h="80%" w="80%" />
              </Box>
            )}
          </AspectRatio>
            <Input type="file" border='none' onChange={(e) => {selectFile(e)}} />
            <p>Please select a file to upload</p>
          <Textarea
            placeholder="Describe the issue"
            border="1px solid gray"
            my="2"
          />
          <Button> Submit </Button>
        </Flex>
        <TabModal />
      </Flex>
    </div>
  );
}
