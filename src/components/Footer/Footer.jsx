import style from "./Footer.module.css";
import heart from "../../assets/Heart.png";

export default function Footer() {
  return (
    <section className={style.global}>
      <p className={style.footerContainer}>© 2013-2023 Wild Code School.</p>
      <p className={style.footer}>
        Made with <img className={style.heart} src={heart} alt="heart" /> by
        Wilder.
      </p>
      <p className={style.footer}>
        Image{" "} <span className={style.freepik}>Freepiks</span>
      </p>
    </section>
  );
}
