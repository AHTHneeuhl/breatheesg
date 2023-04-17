import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { businessUnits } from "../api";
import { useAppDispatch } from "../redux/store/hooks";
import { IBusinessUnit } from "../api/businessUnits";
import { useReactQuery } from "../hooks";
import { setBusinessUnits } from "../redux/slices/business";

type TContext = {
  handleCreateUnit: (values: IBusinessUnit) => void;
  isUnitCreating: boolean;
};

export const BusinessUnitContext = createContext<TContext>({
  handleCreateUnit: () => {},
  isUnitCreating: false,
});

const BusinessUnitProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { execute: createUnit } = useReactQuery(
    businessUnits.createBusinessUnit
  );

  const { execute, isLoading: isUnitCreating } = useReactQuery(
    businessUnits.getBusinessUnits,
    {
      onSuccess: (data) => {
        dispatch(setBusinessUnits(data.units));
      },
    }
  );

  useEffect(() => {
    execute();
  }, [execute]);

  const handleCreateUnit = (values: IBusinessUnit) => {
    createUnit(values, {
      onSuccess: (data) => {
        execute();
      },
    });
  };

  return (
    <BusinessUnitContext.Provider value={{ handleCreateUnit, isUnitCreating }}>
      {children}
    </BusinessUnitContext.Provider>
  );
};

export default BusinessUnitProvider;
