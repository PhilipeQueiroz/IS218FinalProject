import React from 'react';
import styles from './Testimonials.module.css'; // Make sure this path is correct

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.mainTitle}>Read What Others Have To Say</h2>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialBox}>
          <p className={styles.testimonialText}>Hush Haven towels are soft, durable, and a staple in our home. Perfect for my toddler who has sensitive skin and our busy lifestyle!</p>
          <p className={styles.author}>EMMA W.</p>
          <div className={styles.stars}>★★★★★</div>
        </div>
        <div className={styles.testimonialBox}>
          <p className={styles.testimonialText}>I trust Hush Haven for my newborn. Their non-toxic towels are safe, long-lasting, and a comforting choice for my baby.</p>
          <p className={styles.author}>RACHEL P.</p>
          <div className={styles.stars}>★★★★★</div>
        </div>
        <div className={styles.testimonialBox}>
          <p className={styles.testimonialText}>Love Hush Haven! Their adorable and soft towels are twin-approved. Easy care for a mom on the go.</p>
          <p className={styles.author}>GRACE L.</p>
          <div className={styles.stars}>★★★★★</div>
        </div>
      </div>
    </section>
  );
}