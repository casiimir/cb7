import { useRouter } from "next/router";

export default function (props) {
  const router = useRouter();

  const onHandleClick = (id) => router.push(`/products/${id}`);

  return (
    <>
      {props.data.products.map((product) => (
        <>
          <h3 onClick={() => onHandleClick(product.id)}>
            {product.title} - $ {product.price} - {product.stock}
          </h3>
          <hr />
          <br />
        </>
      ))}
    </>
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
