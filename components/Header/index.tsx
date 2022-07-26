import Link from "next/link";
import style from "./header.module.css";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <div className={style.container}>
      <a href="./">
        <h1 className={style.logo}>Favourite Food</h1>
      </a>
      <HeaderRight />
    </div>
  );
}
