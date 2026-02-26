import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, TrendingUp, Award } from "lucide-react";
import { results, studentData } from "../data/mockData";

export function Results() {
  // Grade color helper
  const getGradeColor = (grade: string) => {
    if (grade === "A" || grade === "A-") return "text-green-600";
    if (grade === "B+" || grade === "B") return "text-blue-600";
    if (grade === "B-" || grade === "C+") return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Results</h1>
          <p className="text-gray-600 mt-1">View your examination results and grades</p>
        </div>
        <FileText className="text-blue-600" size={32} />
      </div>

      {/* CGPA Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current CGPA</p>
                <p className="text-4xl font-bold text-blue-600 mt-1">{studentData.cgpa}</p>
              </div>
              <div className="size-14 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Latest Semester GPA</p>
                <p className="text-4xl font-bold text-green-600 mt-1">{results[0].gpa}</p>
              </div>
              <div className="size-14 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="text-green-600" size={28} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Credits</p>
                <p className="text-4xl font-bold text-purple-600 mt-1">34</p>
              </div>
              <div className="size-14 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="text-purple-600" size={28} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Semester Results */}
      <div className="space-y-6">
        {results.map((semester, idx) => (
          <Card key={idx}>
            <CardHeader className="bg-gray-50">
              <div className="flex items-center justify-between">
                <CardTitle>{semester.semester}</CardTitle>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Semester GPA</p>
                  <p className="text-2xl font-bold text-blue-600">{semester.gpa}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Course Code
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Course Name
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Credit Hours
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Grade
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Grade Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {semester.subjects.map((subject, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {subject.code}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{subject.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {subject.credit}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`font-semibold text-lg ${getGradeColor(
                              subject.grade
                            )}`}
                          >
                            {subject.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {subject.points.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-semibold">
                      <td colSpan={2} className="px-6 py-4 text-right">
                        Total Credits:
                      </td>
                      <td className="px-6 py-4 text-center">
                        {semester.subjects.reduce((sum, s) => sum + s.credit, 0)}
                      </td>
                      <td className="px-6 py-4 text-center">GPA:</td>
                      <td className="px-6 py-4 text-center text-blue-600">
                        {semester.gpa}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Grade Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Grading System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { grade: "A", points: "4.00", range: "80-100" },
              { grade: "A-", points: "3.67", range: "75-79" },
              { grade: "B+", points: "3.33", range: "70-74" },
              { grade: "B", points: "3.00", range: "65-69" },
              { grade: "B-", points: "2.67", range: "60-64" },
              { grade: "C+", points: "2.33", range: "55-59" },
              { grade: "C", points: "2.00", range: "50-54" },
            ].map((item) => (
              <div key={item.grade} className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="font-bold text-lg text-gray-900">{item.grade}</p>
                <p className="text-sm text-gray-600">{item.points}</p>
                <p className="text-xs text-gray-500 mt-1">{item.range}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
