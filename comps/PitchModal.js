import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useUserContext } from "../lib/userContext";
import { useRouter } from "next/router";

const PitchModal = ({ onClose, isOpen, postId }) => {
  const [amountInput, setAmountInput] = useState(0);
  const { userId } = useUserContext();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const body = {
        userId,
        postId,
        amount: amountInput,
      };

      const response = await (
        await axios.put("api/post/contribute", body)
      ).data;
      console.log(response);
      router.reload();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setAmountInput(e.target.value);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Contribution</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap={4}>
          <Input placeholder="$" onChange={handleChange} />
          <Button colorScheme="blue" mr={3} onClick={handleSubmit} width="full">
            Submit
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PitchModal;
