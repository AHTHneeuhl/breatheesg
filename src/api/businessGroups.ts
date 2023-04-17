import { GroupsAdapter } from "../adapters";
import breatheAPI from "./breatheAPI";

export interface IBusinessGroup {
  name: string;
  description: string;
}

const URL = "enterprise/business-groups/";
const adapter = new GroupsAdapter();

const businessGroups = {
  getBusinessGroups: async () => {
    try {
      const { data } = await breatheAPI(URL);
      return adapter.getResponse(data);
    } catch (e) {
      console.log(e);
    }
  },

  createBusinessGroup: async ({ name, description }: IBusinessGroup) => {
    try {
      const { data } = await breatheAPI.post(URL, {
        name,

        description,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default businessGroups;
