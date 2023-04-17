import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { businessGroups } from "../api";
import { useAppDispatch } from "../redux/store/hooks";
import { setBusinessGroups } from "../redux/slices/business";
import { IBusinessGroup } from "../api/businessGroups";
import { useNotification, useReactQuery } from "../hooks";

type TContext = {
  handleCreateGroup: (values: IBusinessGroup) => void;
  isGroupCreating: boolean;
};

export const BusinessGroupContext = createContext<TContext>({
  handleCreateGroup: () => {},
  isGroupCreating: false,
});

const BusinessGroupProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();
  const notification = useNotification();

  const { execute: createGroup } = useReactQuery(
    businessGroups.createBusinessGroup
  );

  const { execute, isLoading: isGroupCreating } = useReactQuery(
    businessGroups.getBusinessGroups,
    {
      onSuccess: (data) => {
        dispatch(setBusinessGroups(data.groups));
      },
    }
  );

  useEffect(() => {
    execute();
  }, [execute]);

  const handleCreateGroup = (values: IBusinessGroup) => {
    createGroup(values, {
      onSuccess: (data) => {
        execute();
        notification.notifySuccess("Business group created successfully");
      },
    });
  };

  return (
    <BusinessGroupContext.Provider
      value={{ handleCreateGroup, isGroupCreating }}
    >
      {children}
    </BusinessGroupContext.Provider>
  );
};

export default BusinessGroupProvider;
