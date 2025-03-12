import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEvent from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetail from "./pages/EventDetailPage";
import Events from "./pages/EventsPage";
import EventsRoot from "./pages/EventsRootLayout";
import Home from "./pages/HomePage";
import NewEvent from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                throw new Response(
                  JSON.stringify({ message: "Could not fetch events" }),
                  { status: 500 }
                );
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":id", element: <EventDetail /> },
          { path: "new", element: <NewEvent /> },
          { path: ":id/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
