import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>About Us</h2>
          <p className={styles.aboutText}>
            "Hush Haven creates luxury towels and robes for the comfort-conscious family.
            Each product promises safety, softness, and style. Experience home luxury that
            cares for you and your loved ones."
          </p>
        </div>
      </section>
    );
  }