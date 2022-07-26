import styles from "./header.module.css";
import StateContext from "../../store/state-context";
import { useContext } from "react";
import Link from "next/link";

export default function HeaderRight() {
  const stateCtx = useContext(StateContext);

  const { state } = stateCtx;

  return (
    <div className={styles.rightContainer}>
      <p className={styles.firstPr}>
        <Link href="./favourites">
          <a>
            <span style={{ color: "#ccffcc", cursor: "pointer" }}>
              Favourite List
            </span>
          </a>
        </Link>
        <span>{state.count}</span>
      </p>
    </div>
  );
}
