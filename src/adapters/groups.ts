import { IBusinessGroups } from "./types";

type TAPIResponse = {
  data: {
    id: string;
    name: string;
    description: string;
    timestamp: string;
  }[];
};

class GroupsAdapter {
  private parseResponse = (apiResponse: TAPIResponse): IBusinessGroups => {
    const groups = apiResponse.data.map((group) => {
      return {
        id: group.id,
        name: group.name,
        description: group.description,
        createdAt: group.timestamp,
      };
    });

    return {
      groups,
    };
  };

  getResponse = (apiResponse: TAPIResponse) => this.parseResponse(apiResponse);
}

export default GroupsAdapter;
