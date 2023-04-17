import breatheAPI from "./breatheAPI";

export interface IBusinessGroup {
  title: string;
  description: string;
}

const URL = "enterprise/business-groups/";

const businessGroups = {
  getBusinessGroups: async () => {
    try {
      const { data } = await breatheAPI(URL);
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  createBusinessGroup: async ({ title, description }: IBusinessGroup) => {
    try {
      const { data } = await breatheAPI.post(URL, {
        name: title,
        description,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default businessGroups;
