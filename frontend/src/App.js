import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import EditEvent from "./pages/EditEventPage";
import EventDetail from "./pages/EventDetailPage";
import Events from "./pages/EventsPage";
import Home from "./pages/HomePage";
import NewEvent from "./pages/NewEventPage";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "events/:id", element: <EventDetail /> },
      { path: "events/new", element: <NewEvent /> },
      { path: "events/:id/edit", element: <EditEvent /> },
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
