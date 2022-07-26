import { Key } from "react";
import SingleFood from "./SingleFood";

export default function FoodList({
  foods,
}:
  | {
      id: number;
      name: string;
      from: string;
      image: string;
    }[]
  | any) {
  return (
    <>
      {foods.map((food: { id: Key | null | undefined }) => (
        <div key={food.id}>
          <SingleFood food={food} />
        </div>
      ))}
    </>
  );
}
