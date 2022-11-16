import React from "react";
import { Footer } from "@common/footer";
import { Header } from "@common/header";

import styles from "./styles/layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
