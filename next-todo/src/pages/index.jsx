import { useContext } from "react";
import { MainContext } from "@/store";
import Link from "next/link";
import Head from "next/head";
import TodoList from "@/components/todoList";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/navbar";

export default function Home() {
  const { state } = useContext(MainContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The final Todo-App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {state.username ? (
        <main className={`${styles.Home}`}>
          <TodoList />
        </main>
      ) : (
        <div className={styles.login}>
          <h1>Per favore autenticarsi</h1>
          <Link href="/login">Login</Link>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
