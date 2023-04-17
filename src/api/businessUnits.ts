import { UnitsAdapter } from "../adapters";
import breatheAPI from "./breatheAPI";

export interface IBusinessUnit {
  name: string;
  address: string;
  industry: string;
  sector: string;
  state: string;
  type: string;
  description: string;
}

const URL = "enterprise/business-units/";
const adapter = new UnitsAdapter();

const businessUnits = {
  getBusinessUnits: async () => {
    try {
      const { data } = await breatheAPI(URL);
      return adapter.getResponse(data);
    } catch (e) {
      console.log(e);
    }
  },

  createBusinessUnit: async ({
    name,
    address,
    industry,
    sector,
    state,
    type,
    description,
  }: IBusinessUnit) => {
    try {
      const { data } = await breatheAPI.post(URL, {
        name,
        address,
        industry,
        sector,
        state,
        type,
        description,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default businessUnits;
