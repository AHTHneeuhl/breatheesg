import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { businessUnits } from "../api";
import { useAppDispatch } from "../redux/store/hooks";
import { IBusinessUnit } from "../api/businessUnits";
import { useReactQuery } from "../hooks";

type TContext = {
  handleCreateUnit: (values: IBusinessUnit) => void;
};

export const BusinessUnitContext = createContext<TContext>({
  handleCreateUnit: () => {},
});

const BusinessUnitProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { execute: createUnit } = useReactQuery(
    businessUnits.createBusinessUnit
  );

  const { mutate } = useMutation(businessUnits.getBusinessUnits, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleCreateUnit = (values: IBusinessUnit) => {
    createUnit(values, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <BusinessUnitContext.Provider value={{ handleCreateUnit }}>
      {children}
    </BusinessUnitContext.Provider>
  );
};

export default BusinessUnitProvider;
