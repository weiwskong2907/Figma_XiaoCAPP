import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, BookOpen, TrendingUp, Award, Clock, Bell, FileText, User, ClipboardList } from "lucide-react";
import { studentData, timetable, announcements, attendance } from "../data/mockData";
import { Link } from "react-router";

export function Dashboard() {
  // Get today's classes
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayClasses = timetable.find((day) => day.day === today)?.classes || [];

  // Get latest announcements
  const latestAnnouncements = announcements.slice(0, 3);

  // Calculate overall attendance
  const totalAttended = attendance.reduce((sum, course) => sum + course.attended, 0);
  const totalClasses = attendance.reduce((sum, course) => sum + course.total, 0);
  const overallAttendance = ((totalAttended / totalClasses) * 100).toFixed(1);

  return (
    <div className="space-y-4">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg">
        <h2 className="text-xl font-bold mb-1">Welcome back, {studentData.name.split(" ")[0]}!</h2>
        <p className="text-blue-100 text-sm">
          {studentData.programme.split(" ").slice(0, 3).join(" ")}
        </p>
        <p className="text-blue-200 text-xs mt-1">{studentData.semester}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">CGPA</p>
                <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={16} />
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-600">{studentData.cgpa}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">Attendance</p>
                <div className="size-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-green-600" size={16} />
                </div>
              </div>
              <p className="text-3xl font-bold text-green-600">{overallAttendance}%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">Courses</p>
                <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="text-purple-600" size={16} />
                </div>
              </div>
              <p className="text-3xl font-bold text-purple-600">5</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">Credits</p>
                <div className="size-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="text-orange-600" size={16} />
                </div>
              </div>
              <p className="text-3xl font-bold text-orange-600">34</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Classes */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock size={18} />
            Today's Classes
          </CardTitle>
          <p className="text-xs text-gray-600">{today}</p>
        </CardHeader>
        <CardContent className="pt-0">
          {todayClasses.length > 0 ? (
            <div className="space-y-3">
              {todayClasses.map((classItem, index) => (
                <div
                  key={index}
                  className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{classItem.code}</h4>
                      <p className="text-xs text-gray-600">{classItem.name}</p>
                    </div>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      {classItem.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <Clock size={12} />
                    <span>{classItem.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{classItem.location}</p>
                </div>
              ))}
              <Link
                to="/timetable"
                className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2"
              >
                View Full Timetable →
              </Link>
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <Calendar size={40} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No classes today</p>
              <Link
                to="/timetable"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
              >
                View Timetable →
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Latest Announcements */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell size={18} />
            Latest News
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {latestAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-3 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm flex-1">{announcement.title}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ml-2 ${
                      announcement.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : announcement.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {announcement.category}
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {announcement.content}
                </p>
                <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
              </div>
            ))}
            <Link
              to="/announcements"
              className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2"
            >
              View All News →
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-4 gap-3">
            <Link
              to="/results"
              className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-center transition-colors"
            >
              <FileText className="text-blue-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Results</p>
            </Link>
            <Link
              to="/attendance"
              className="flex flex-col items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl text-center transition-colors"
            >
              <ClipboardList className="text-green-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Attend</p>
            </Link>
            <Link
              to="/courses"
              className="flex flex-col items-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl text-center transition-colors"
            >
              <BookOpen className="text-purple-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Courses</p>
            </Link>
            <Link
              to="/profile"
              className="flex flex-col items-center gap-2 p-3 bg-orange-50 hover:bg-orange-100 rounded-xl text-center transition-colors"
            >
              <User className="text-orange-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Profile</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}