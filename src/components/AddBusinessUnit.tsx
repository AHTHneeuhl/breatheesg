import { Button, Input, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { useBusinessUnits } from "../hooks";

const initialFormValues = {
  name: "",
  address: "",
  industry: "",
  sector: "",
  state: "",
  type: "",
  description: "",
};

const AddBusinessUnit: React.FC = () => {
  const { handleCreateUnit } = useBusinessUnits();

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleCreateUnit}>
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

export default AddBusinessUnit;
