import { createContext, useReducer, useState } from "react";
import { IChildrenProp } from "../IModels";

export type IContextProps = {
  state: { count: number };
  dispatch: (c: { type: string }) => void;
  favList:
    | {
        from: string;
        id: number;
        image: string;
        name: string;
      }[];
  setFavList: (c: object | any) => void;
};

const initialState = { count: 0 };

const StateContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
  favList: [
    {
      from: "",
      id: 0,
      image: "",
      name: "",
    },
  ],
  setFavList: () => {},
});

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function StateContextProvider(props: IChildrenProp) {
  const [favList, setFavList] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const context = {
    state,
    dispatch,
    favList,
    setFavList,
  };

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  );
}

export default StateContext;
