import { useEffect, useState } from "react";
import { useUserContext } from "../../lib/userContext";
import axios from "axios";

import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import TabModal, { CameraIcon } from "../../comps/tabModal";
import { object } from "joi";

const BUCKET_URL = `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.amazonaws.com/`;

export default function ImgUpload() {
  const [file, setFile] = useState();
  const [fileType, setFileType] = useState("");
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [fileName, setFileName] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [valid, setValid] = useState(false);
  const [loc, setoc] = useState(null);
  const [ld, setLd] = useState(false);
  const { currentLocation } = useUserContext();

  console.log(currentLocation);
  const selectFile = async (e) => {
    console.log(e.target.files);
    // setLoc
    setLd(true);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFileType(e.target.files[0].type);
    if (validateLocation) {
      const res = await await uploadFile();
    }
  };

  const [localUrl, setLocalUrl] = useState()
  useEffect(() => {
    if (!file) {
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setLocalUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file])

  const uploadFile = async () => {
    setUploadingStatus("Uploading the file to AWS S3");
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: fileName,
      type: fileType,
    });
    console.log("1st breakpoint");
    const url = data.url;
    try {
      let { newData } = await axios.put(url, file, {
        headers: {
          "Content-type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log("2nd breakpoint");
      console.log(newData);
    } catch (e) {
      console.log(e);
    }
    setUploadedFile(BUCKET_URL + fileName);
    setFile(null);
  };

  const validateLocation = () => {
    try {
      if (
        currentLocation.readableAddress != undefined &&
        currentLocation.latitude != undefined &&
        currentLocation.longitude != undefined
      ) {
        console.log("true");
        return true;
      }
    } catch (e) {
      console.log("false");
      console.log(e);
      return false;
    }
    console.log("false");
    return false;
  };

  // console.log("ghggh");
  // console.log(res);
  // console.log(fileName, fileType);

  const handleSubmit = async () => {
    if (validateLocation()) {
      // const res = await await uploadFile();
      const loc = {
        readableAddress: currentLocation.readableAddress,
        longitude: currentLocation.longitude,
        latitude: currentLocation.latitude,
      };
      //console.log(Object.keys(loc).length)
      const body = {
        name: title,
        imageUrl: "https://hackgtstoragebucket.s3.amazonaws.com/" + fileName,
        description: desc,
        location: loc,
      };

      console.log(body);
      console.log(JSON.stringify(body));
      const response = await axios.post("api/post/create", body);
      console.log(response);
    }
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
            {ld ? (
              <img src={localUrl} />
            ) : (
              <Box bg="gray.400">
                <CameraIcon h="80%" w="80%" />
              </Box>
            )}
          </AspectRatio>
          <Input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Input
            type="file"
            border="none"
            onChange={(e) => {
              selectFile(e);
              console.log(e.target.value);
            }}
          />
          <p>Please select a file to upload</p>
          <Textarea
            placeholder="Describe the issue"
            border="1px solid gray"
            my="2"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            Submit{" "}
          </Button>
        </Flex>
        <TabModal />
      </Flex>
    </div>
  );
}
