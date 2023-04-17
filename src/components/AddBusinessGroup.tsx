import { Button, Input, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { useBusinessGroups } from "../hooks";

const initialFormValues = {
  title: "",
  description: "",
};

const AddBusinessGroup: React.FC = () => {
  const { handleCreateGroup } = useBusinessGroups();

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleCreateGroup}>
      {({ handleSubmit, errors, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Input
            name="title"
            value={values.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
          />
          {errors.title && <div>{errors.title}</div>}
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
