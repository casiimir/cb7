import { useRouter } from "next/router";

export default function (props) {
  const router = useRouter();
  const onHandleClick = () => router.back();

  return (
    <>
      <h1>{props.data.title}</h1>
      <button onClick={onHandleClick}>Go back</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}products/${queryId}`
  );
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
