import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, User, Calendar, FileText } from "lucide-react";
import { courses } from "../data/mockData";

export function Courses() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="text-blue-600" size={28} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 text-sm">Current semester</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-2">
        <Card className="shadow-md">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">5</p>
            <p className="text-xs text-gray-600 mt-0.5">Courses</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600">17</p>
            <p className="text-xs text-gray-600 mt-0.5">Credits</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-purple-600">4</p>
            <p className="text-xs text-gray-600 mt-0.5">Lecturers</p>
          </CardContent>
        </Card>
      </div>

      {/* Course Cards */}
      <div className="space-y-3">
        {courses.map((course) => (
          <Card key={course.code} className="shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base font-bold">{course.code}</CardTitle>
                  <p className="text-blue-100 text-xs mt-0.5 line-clamp-2">{course.name}</p>
                </div>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs whitespace-nowrap">
                  {course.credit} CR
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-3 space-y-3">
              {/* Lecturer */}
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <User size={16} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 truncate">{course.lecturer}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {course.description}
              </p>

              {/* Prerequisites */}
              {course.prerequisites.length > 0 && (
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">
                    Prerequisites:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.prerequisites.map((prereq) => (
                      <span
                        key={prereq}
                        className="text-xs bg-white text-gray-700 px-2 py-0.5 rounded border border-gray-200"
                      >
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Assessments */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">
                  Assessments:
                </p>
                <div className="space-y-1.5">
                  {course.assessments.map((assessment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <FileText size={14} className="text-gray-400 flex-shrink-0" />
                        <span className="text-xs text-gray-700 truncate">
                          {assessment.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-bold text-blue-600">
                          {assessment.weightage}%
                        </span>
                        {assessment.deadline !== "Ongoing" && (
                          <span className="text-xs text-gray-500">
                            {assessment.deadline}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
