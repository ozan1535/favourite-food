import type { ReactElement } from "react";
import Layout from "../layout";
import type { NextPageWithLayout } from "./_app";
import StateContext from "../store/state-context";
import { useContext } from "react";
import FoodList from "../components/Foods/FoodList";
import style from "./../styles/favourites.module.css";

const Favourites: NextPageWithLayout = () => {
  const stateCtx = useContext(StateContext);

  const { favList, state } = stateCtx;

  return (
    <div className={style.container}>
      <div className={style.count}>
        {state.count === 0
          ? "You don't have a favourite food"
          : `You have ${state.count} favourite food`}
      </div>
      <div className={style.foodList}>
        <FoodList foods={favList} />
      </div>
    </div>
  );
};

Favourites.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Favourites;
