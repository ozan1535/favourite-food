import { ReactElement } from "react";

export interface IChildrenProp {
  children: ReactElement;
}

export interface IFoodItem {
  id: number;
  name: string;
  from: string;
  image: string;
}
[];

type MyType = {
  id: number;
  name: string;
  from: string;
  image: string;
};

export type MyGroupType = {
  [key: string]: MyType;
};
