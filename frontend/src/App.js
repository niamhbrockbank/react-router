import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import EditEvent from "./pages/EditEventPage";
import EventDetail from "./pages/EventDetailPage";
import Events from "./pages/EventsPage";
import Home from "./pages/HomePage";
import NewEvent from "./pages/NewEventPage";

// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
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
