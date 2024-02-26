import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import style from "./Header.module.css";

export default function Header() {
  return (
    <section className={style.global}>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        <ul className={style.liste}>
            <li>Articles</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Welcome on Board!</h1>
        <img className={style.avatar} src={avatar} alt="avatar" />
      </div>
      </section>
  );
}
