import type { ReactElement } from "react";
import FoodList from "../components/Foods/FoodList";
import Layout from "../layout";
import type { NextPageWithLayout } from "./_app";
import { foods } from "../data/foods";

const Page: NextPageWithLayout = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <FoodList foods={foods} />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
