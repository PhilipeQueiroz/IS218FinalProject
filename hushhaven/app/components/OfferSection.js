import React from "react";
import styles from "./OfferSection.module.css";
import { Button } from "@nextui-org/react"; // Assuming you're using NextUI for the button

export default function OfferSection() {
  return (
    <section className={styles.offerSectionStyle}>
      <h1>Sign Up Now And Get 25% Off</h1>
      <Button auto className={styles.signUpButton}>
        SIGN UP
      </Button>
    </section>
  );
} 