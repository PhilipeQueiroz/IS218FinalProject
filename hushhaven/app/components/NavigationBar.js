import React from "react";
import styles from "./NavigationBar.module.css"
import { Image } from "@nextui-org/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <section className={styles.navbarstyle}>
      <Navbar>
        <section className={styles.navbarlist}>
          <NavbarContent>
              <NavbarItem className={styles.navbaritems}>
                <Link color='foreground' href='#'>Reviews</Link>
              </NavbarItem>
              <NavbarItem className={styles.navbaritems}>
                <Link color='foreground' href='#'>About</Link>
              </NavbarItem>
              <NavbarBrand className={styles.logocontainer}>
                <Image 
                  src="../images/HushhavenLogo.png"
                  alt="logo"
                  width={50}
                  height={50}  
                />
              </NavbarBrand>
              <NavbarItem className={styles.navbaritems}>
                <Link color='foreground' href='#'>Shop</Link>
              </NavbarItem>
              <NavbarItem className={styles.navbaritems}>
                <Link color='foreground' href='#'>Contact</Link>
              </NavbarItem>
          </NavbarContent>
        </section>
      </Navbar>
    </section>
  );
}