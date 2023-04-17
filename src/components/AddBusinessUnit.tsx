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
          <Input
            name="address"
            value={values.address}
            onChange={handleChange}
            type="text"
            placeholder="Address"
          />
          {errors.address && <div>{errors.address}</div>}
          <Input
            name="industry"
            value={values.industry}
            onChange={handleChange}
            type="text"
            placeholder="Industry"
          />
          {errors.industry && <div>{errors.industry}</div>}
          <Input
            name="sector"
            value={values.sector}
            onChange={handleChange}
            type="text"
            placeholder="Sector"
          />
          {errors.sector && <div>{errors.sector}</div>}
          <Input
            name="state"
            value={values.state}
            onChange={handleChange}
            type="text"
            placeholder="State"
          />
          {errors.state && <div>{errors.state}</div>}
          <Input
            name="type"
            value={values.type}
            onChange={handleChange}
            type="text"
            placeholder="Type"
          />
          {errors.type && <div>{errors.type}</div>}
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
