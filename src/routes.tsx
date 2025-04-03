import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcome.page";
import NotFoundPage from "./pages/not.found.page";
import CalendarView from "./pages/calendar-view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/calendar-view",
    element: <CalendarView />,
  },
]);
