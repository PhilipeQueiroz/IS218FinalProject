import React from "react";
import styles from "./ProductSection.module.css"; 

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.productHeader}>Shop Our Products</h2>
        <section className={styles.productContainer}>
            <section className={styles.productCardTowel}>
                <h2 className={styles.productTitle}>TOWELS</h2>
            </section>
            <section className={styles.productCardRobe}>
                <h2 className={styles.productTitle}>ROBES</h2>
            </section>
        </section>
    </section>
  );
}