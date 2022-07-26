import Header from "../components/Header";
import styles from "./index.module.css";
import { IChildrenProp } from "../IModels";
import { StateContextProvider } from "../store/state-context";

export default function LayoutDefault(props: IChildrenProp) {
  const { children } = props;

  return (
    <StateContextProvider>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </StateContextProvider>
  );
}
