import { useParams } from "react-router-dom";

export default function EventDetail() {
  const params = useParams();
  return (
    <>
      <h1>EventDetail</h1>
      <p>{params.id}</p>
    </>
  );
}
