import { IBusinessUnits } from "./types";

type TAPIResponse = {
  data: {
    id: string;
    name: string;
    address: string;
    industry: string;
    sector: string;
    state: string;
    type: string;
    description: string;
  }[];
};

class UnitsAdapter {
  private parseResponse = (apiResponse: TAPIResponse): IBusinessUnits => {
    const units = apiResponse.data.map((group) => {
      return {
        id: group.id,
        name: group.name,
        address: group.address,
        industry: group.industry,
        sector: group.sector,
        state: group.state,
        type: group.type,
        description: group.description,
      };
    });

    return {
      units,
    };
  };

  getResponse = (apiResponse: TAPIResponse) => this.parseResponse(apiResponse);
}

export default UnitsAdapter;
