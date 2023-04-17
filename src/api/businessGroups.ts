import breatheAPI from "./breatheAPI";

const URL = "enterprise/business-groups";

const businessGroups = {
  getBusinessGroups: async () => {
    try {
      const { data } = await breatheAPI(URL);
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  createBusinessGroup: async () => {
    try {
      const { data } = await breatheAPI.post(URL);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default businessGroups;
