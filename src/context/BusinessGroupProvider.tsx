import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import { businessGroups } from "../api";
import { useAppDispatch } from "../redux/store/hooks";
import { setBusinessGroups } from "../redux/slices/business";

export const BusinessGroupContext = createContext<null>(null);

const BusinessGroupProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { mutate } = useMutation(businessGroups.getBusinessGroups, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <BusinessGroupContext.Provider value={null}>
      {children}
    </BusinessGroupContext.Provider>
  );
};

export default BusinessGroupProvider;
