import { useParams } from "react-router-dom";

export default function Todo() {
  const params = useParams();

  return <div style={{ marginTop: "50px" }}>{params.id}</div>;
}
