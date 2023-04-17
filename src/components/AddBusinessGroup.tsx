import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useBusinessGroups } from "../hooks";

const initialFormValues = {
  name: "",
  description: "",
};

const AddBusinessGroup: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { handleCreateGroup, isGroupCreating } = useBusinessGroups();

  return (
    <>
      <Button onClick={onOpen}>Create New Group</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader textAlign="center">Create Group</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={initialFormValues}
              onSubmit={handleCreateGroup}
            >
              {({ handleSubmit, errors, values, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="column" gap={4}>
                    <Input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Name"
                    />
                    {errors.name && <div>{errors.name}</div>}
                    <Textarea
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      placeholder="Description"
                    />
                    {errors.description && <div>{errors.description}</div>}
                    <Button type="submit" isLoading={isGroupCreating}>
                      Create
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBusinessGroup;
