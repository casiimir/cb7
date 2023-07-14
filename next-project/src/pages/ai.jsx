import { useRouter } from "next/router";
import styles from "@/styles/Ai.module.scss";
import { useEffect, useState } from "react";

export default function Ai({ data }) {
  const router = useRouter();

  console.log(router);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((obj) => setData(obj));
  // }, []);

  const onHandleClick = () => router.push("/pippoepaperino");

  return (
    <div className={styles.Ai}>
      <button onClick={onHandleClick}>Cliccami!@</button>
      {data.products ? (
        data?.products?.map((product) => (
          <>
            <h3>
              {product.title} - {product.price}
            </h3>
            <br />
            <hr />
            <br />
          </>
        ))
      ) : (
        <p>Data not found...</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
