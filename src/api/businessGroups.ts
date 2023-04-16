import breatheAPI from "./breatheAPI";

const businessGroups = {
  getBusinessGroups: async () => {
    try {
      console.log(import.meta.env.API_URL);
      const { data } = await breatheAPI("enterprise/business-groups");
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  postBusinessGroup: async () => {
    try {
    } catch (e) {}
  },
};

export default businessGroups;
