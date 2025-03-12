import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch(`https://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      { message: "Could not fetch details of event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
