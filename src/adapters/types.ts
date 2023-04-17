export interface IBusinessGroup {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface IBusinessUnit {
  id: string;
  name: string;
  address: string;
  industry: string;
  sector: string;
  state: string;
  type: string;
  description: string;
}

export interface IBusinessGroups {
  groups: IBusinessGroup[];
}

export interface IBusinessUnits {
  units: IBusinessUnit[];
}
