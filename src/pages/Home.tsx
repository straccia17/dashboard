import { A, useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

import styles from "./Home.module.css";

const Home: Component = () => {
  return (
    <>
      <h1 class={styles.title}>straccia17 control center</h1>
      <div class={styles.container}>
        <A href="/books" class={styles.item}>
          <div>Books</div>
        </A>
        <A href="/" class={styles.item}>
          <div>Box catalog</div>
        </A>
        <A href="/" class={styles.item}>
          <div>Money Manager</div>
        </A>
        <A href="/" class={styles.item}>
          <div>Booo</div>
        </A>
      </div>
    </>
  );
};

export default Home;
