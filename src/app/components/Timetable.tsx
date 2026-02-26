import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { timetable } from "../data/mockData";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function Timetable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <Calendar className="text-blue-600" size={28} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Timetable</h1>
          <p className="text-gray-600 text-sm">Your weekly schedule</p>
        </div>
      </div>

      {/* Week View */}
      <div className="space-y-3">
        {daysOfWeek.map((day) => {
          const daySchedule = timetable.find((d) => d.day === day);
          const classes = daySchedule?.classes || [];

          return (
            <Card key={day} className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-3">
                <CardTitle className="text-base text-blue-900">{day}</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                {classes.length > 0 ? (
                  <div className="space-y-2">
                    {classes.map((classItem, index) => (
                      <div
                        key={index}
                        className="p-3 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all bg-white"
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <div
                            className={`size-2 rounded-full mt-1.5 flex-shrink-0 ${
                              classItem.type === "Lecture"
                                ? "bg-blue-500"
                                : classItem.type === "Lab"
                                ? "bg-green-500"
                                : "bg-purple-500"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm">
                              {classItem.code}
                            </h4>
                            <p className="text-xs text-gray-600 mb-2">{classItem.name}</p>
                            <div className="space-y-1 text-xs text-gray-600">
                              <div className="flex items-center gap-1.5">
                                <Clock size={12} />
                                <span>{classItem.time}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <MapPin size={12} />
                                <span>{classItem.location}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <User size={12} />
                                <span>{classItem.lecturer}</span>
                              </div>
                            </div>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                              classItem.type === "Lecture"
                                ? "bg-blue-100 text-blue-700"
                                : classItem.type === "Lab"
                                ? "bg-green-100 text-green-700"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {classItem.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-4 text-gray-500 text-sm">No classes</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Legend */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Class Types</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-blue-500 rounded-full" />
              <span className="text-xs text-gray-700">Lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-green-500 rounded-full" />
              <span className="text-xs text-gray-700">Lab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-purple-500 rounded-full" />
              <span className="text-xs text-gray-700">Tutorial</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}