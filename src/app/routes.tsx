import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Timetable } from "./components/Timetable";
import { Results } from "./components/Results";
import { Announcements } from "./components/Announcements";
import { Profile } from "./components/Profile";
import { Courses } from "./components/Courses";
import { Attendance } from "./components/Attendance";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "timetable", Component: Timetable },
      { path: "results", Component: Results },
      { path: "announcements", Component: Announcements },
      { path: "courses", Component: Courses },
      { path: "attendance", Component: Attendance },
      { path: "profile", Component: Profile },
    ],
  },
]);
