import styles from "./BtnBorderAnimation.module.css";

const BtnBorderAnimation = () => {
  return (
    <div className={`${styles.main} ${styles.center}`}>
      <div className={styles.center}>
        <div className={`${styles.btn1} ${styles.center}`}>
          <p>Hover me</p>
          <div className={styles.d1}></div>
          <div className={styles.d2}></div>
          <div className={styles.d3}></div>
          <div className={styles.d4}></div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={`${styles.btn2} ${styles.center}`}>
          <div className={styles.b1}></div>
          <div className={styles.b2}></div>
          <p>Hover me</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={`${styles.btn3} ${styles.center}`}>
          <p>Hover me</p>
          <div className={styles.a1}></div>
          <div className={styles.a2}></div>
          <div className={styles.a3}></div>
          <div className={styles.a4}></div>
          <div className={styles.a5}></div>
          <div className={styles.a6}></div>
        </div>
      </div>
    </div>
  );
};

export default BtnBorderAnimation;
