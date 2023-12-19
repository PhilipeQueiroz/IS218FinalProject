import React from 'react';
import styles from './FooterSection.module.css'; // Make sure this path is correct

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navSection}>
        <h4 className={styles.navHeader}>Customer Service</h4>
        <a href="/Privacy" className={styles.footerLink}>Privacy Policy</a>
        <a href="/about" className={styles.footerLink}>About</a>
      </div>

      <div className={styles.socialSection}>
        <h4 className={styles.socialHeader}>Follow Us</h4>
        <a href="https://instagram.com" className={styles.footerLink}>Instagram</a>
        <a href="https://twitter.com" className={styles.footerLink}>Twitter</a>
        <a href="https://facebook.com" className={styles.footerLink}>Facebook</a>
      </div>

      <div className={styles.newsletterSection}>
        <h4 className={styles.newsletterHeader}>Stay Updated</h4>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
          <button type="submit" className={styles.newsletterButton}>Subscribe</button>
        </form>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyRightText}>&copy; {new Date().getFullYear()} Hush Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}