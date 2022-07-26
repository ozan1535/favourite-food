import style from "./singleFood.module.css";
import StateContext from "../../store/state-context";
import { useContext, useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import { IFoodItem } from "../../IModels";

export default function SingleFood({ food }: any) {
  const route = useRouter();

  const stateCtx = useContext(StateContext);

  const { dispatch, setFavList, favList } = stateCtx;
  const [removeFavourite, setRemoveFavourite] = useState(false);

  if (!food) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={style.container}>
      <div className={style.images}>
        <Image src={`${food.image}`} width={400} height={440} alt={food.name} />
      </div>
      <div className={style.foodInfo}>
        <div style={{ display: "flex" }}>
          <p>{food.name}</p>
          <small>{food.from}</small>
        </div>
        {route.asPath === "/favourites" ? null : (
          <div className={style.button}>
            {removeFavourite === false ? (
              <BsSuitHeart
                title="Add Favourite"
                onClick={() => {
                  dispatch({ type: "increment" });
                  setRemoveFavourite(true);
                  setFavList(
                    (
                      a: {
                        from: string;
                        id: number;
                        image: string;
                        name: string;
                      }[]
                    ) => [...a, food]
                  );
                }}
              />
            ) : (
              <BsSuitHeartFill
                title="Remove Favourite"
                onClick={() => {
                  dispatch({ type: "decrement" });
                  setRemoveFavourite(false);
                  setFavList(favList.filter((fav) => fav.id !== food.id));
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
