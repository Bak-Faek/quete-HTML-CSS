import responsive from "../../assets/responsive.png";
import scalable from "../../assets/scalable.png";
import inclusive from "../../assets/inclusive.png";
import style from "./RecentArticles.module.css";

export default function RecentArticles() {
  return (
    <section className={style.global}>
      <h2 className={style.titleSection} >Recent articles</h2>
      <div className={style.globalCard}>
        <div className={style.cardContainer}>
          <img className={style.imageCard} src={responsive} alt="responsive" />
          <p className={style.textCard}>Responsive</p>
          <button className={style.buttonContainer}>READ</button>
        </div>
        <div className={style.cardContainer}>
          <img className={style.imageCard} src={scalable} alt="scalable" />
          <p className={style.textCard}>scalable</p>
          <button className={style.buttonContainer}>READ</button>
        </div>
        <div className={style.cardContainer}>
          <img className={style.imageCard} src={inclusive} alt="inclusive" />
          <p className={style.textCard}>inclusive</p>
          <button className={style.buttonContainer}>READ</button>
        </div>
      </div>
    </section>
  );
}
