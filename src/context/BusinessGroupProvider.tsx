import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { businessGroups } from "../api";
import { useAppDispatch } from "../redux/store/hooks";
import { setBusinessGroups } from "../redux/slices/business";
import { IBusinessGroup } from "../api/businessGroups";
import { useReactQuery } from "../hooks";

type TContext = {
  handleCreateGroup: (values: IBusinessGroup) => void;
};

export const BusinessGroupContext = createContext<TContext>({
  handleCreateGroup: () => {},
});

const BusinessGroupProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { execute: createGroup } = useReactQuery(
    businessGroups.createBusinessGroup
  );

  const { mutate } = useMutation(businessGroups.getBusinessGroups, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleCreateGroup = (values: IBusinessGroup) => {
    createGroup(values, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <BusinessGroupContext.Provider value={{ handleCreateGroup }}>
      {children}
    </BusinessGroupContext.Provider>
  );
};

export default BusinessGroupProvider;
