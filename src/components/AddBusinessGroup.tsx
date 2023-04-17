import { Button, Input, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { useBusinessGroups } from "../hooks";

const initialFormValues = {
  name: "",
  description: "",
};

const AddBusinessGroup: React.FC = () => {
  const { handleCreateGroup } = useBusinessGroups();

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleCreateGroup}>
      {({ handleSubmit, errors, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Create</Button>
        </form>
      )}
    </Formik>
  );
};

export default AddBusinessGroup;
