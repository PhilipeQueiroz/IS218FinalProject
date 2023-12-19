import React from "react";
import styles from './HeroSection.module.css';
import { Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <section className={styles.herostyle}>
      <div className={styles.textoverlay}>
        <h1 className={`${styles.headingXL} ${styles.textShadow}`}>
          Embrace Tranquility,<br />One Towel At A Time.
        </h1>
        <Button auto flat className={styles.herobutton}>
          SIGN UP
        </Button>
      </div>
    </section>
  );
};