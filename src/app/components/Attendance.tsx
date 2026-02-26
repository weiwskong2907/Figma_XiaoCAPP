import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardList, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { attendance } from "../data/mockData";
import { Progress } from "./ui/progress";

export function Attendance() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "text-green-600 bg-green-100";
      case "Good":
        return "text-blue-600 bg-blue-100";
      case "Warning":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-red-600 bg-red-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Excellent":
      case "Good":
        return <CheckCircle size={20} />;
      case "Warning":
        return <AlertCircle size={20} />;
      default:
        return <XCircle size={20} />;
    }
  };

  // Calculate totals
  const totalAttended = attendance.reduce((sum, course) => sum + course.attended, 0);
  const totalClasses = attendance.reduce((sum, course) => sum + course.total, 0);
  const overallPercentage = ((totalAttended / totalClasses) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Record</h1>
          <p className="text-gray-600 mt-1">Track your class attendance</p>
        </div>
        <ClipboardList className="text-blue-600" size={32} />
      </div>

      {/* Overall Attendance */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg text-blue-100 mb-1">Overall Attendance</h3>
              <p className="text-5xl font-bold">{overallPercentage}%</p>
              <p className="text-blue-100 mt-2">
                {totalAttended} out of {totalClasses} classes attended
              </p>
            </div>
            <div className="size-32 rounded-full border-8 border-white/30 flex items-center justify-center">
              <CheckCircle size={48} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course-wise Attendance */}
      <div className="space-y-4">
        {attendance.map((course) => (
          <Card key={course.code}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg">{course.code}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{course.name}</p>
                </div>
                <span
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(
                    course.status
                  )}`}
                >
                  {getStatusIcon(course.status)}
                  {course.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {course.attended}
                  </p>
                  <p className="text-sm text-gray-600">Attended</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">
                    {course.total - course.attended}
                  </p>
                  <p className="text-sm text-gray-600">Missed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{course.total}</p>
                  <p className="text-sm text-gray-600">Total Classes</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Attendance Rate</span>
                  <span className="font-semibold text-gray-900">
                    {course.percentage.toFixed(1)}%
                  </span>
                </div>
                <Progress value={course.percentage} className="h-3" />
              </div>

              {course.percentage < 80 && (
                <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle size={18} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium">Attendance Warning</p>
                    <p>
                      Your attendance is below the required 80%. Please attend all
                      upcoming classes to avoid penalties.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Attendance Policy */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Excellent (95%+):</strong> Perfect attendance record
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Good (80-94%):</strong> Meets minimum attendance requirement
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle size={18} className="text-yellow-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Warning (Below 80%):</strong> Below minimum requirement, may
                affect exam eligibility
              </p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle size={18} className="text-red-600 mt-0.5 flex-shrink-0" />
              <p>
                <strong>Critical (Below 50%):</strong> May be barred from final
                examination
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
