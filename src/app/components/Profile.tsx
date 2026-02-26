import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { User, Mail, Phone, Calendar, GraduationCap, Award, BookOpen } from "lucide-react";
import { studentData } from "../data/mockData";

export function Profile() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <User className="text-blue-600" size={28} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 text-sm">Your information</p>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="shadow-md">
        <CardContent className="p-5">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-3">
              {studentData.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{studentData.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{studentData.id}</p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Mail size={18} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700 break-all">{studentData.email}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Phone size={18} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">{studentData.phone}</span>
          </div>
        </CardContent>
      </Card>

      {/* Academic Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Award size={18} />
              <span className="font-medium text-xs">CGPA</span>
            </div>
            <p className="text-gray-900 font-bold text-2xl">{studentData.cgpa}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <BookOpen size={18} />
              <span className="font-medium text-xs">Credits</span>
            </div>
            <p className="text-gray-900 font-bold text-2xl">34</p>
          </CardContent>
        </Card>
      </div>

      {/* Academic Information */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Academic Details</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <BookOpen size={16} />
              <span className="font-medium text-xs">Programme</span>
            </div>
            <p className="text-gray-900 font-semibold text-sm">{studentData.programme}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-xl">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <Calendar size={16} />
                <span className="font-medium text-xs">Semester</span>
              </div>
              <p className="text-gray-900 font-semibold text-sm">{studentData.semester}</p>
            </div>

            <div className="p-3 bg-purple-50 rounded-xl">
              <div className="flex items-center gap-2 text-purple-600 mb-1">
                <Calendar size={16} />
                <span className="font-medium text-xs">Intake</span>
              </div>
              <p className="text-gray-900 font-semibold text-sm">{studentData.intake}</p>
            </div>
          </div>

          <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-orange-700 mb-1 font-medium">Expected Graduation</p>
                <p className="text-sm font-bold text-gray-900">
                  {studentData.expectedGraduation}
                </p>
              </div>
              <GraduationCap size={24} className="text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl text-center transition-colors">
              <User className="mx-auto mb-2 text-blue-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Edit Profile</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl text-center transition-colors">
              <Mail className="mx-auto mb-2 text-green-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Update Email</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl text-center transition-colors">
              <Phone className="mx-auto mb-2 text-purple-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Update Phone</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl text-center transition-colors">
              <Award className="mx-auto mb-2 text-orange-600" size={24} />
              <p className="text-xs font-medium text-gray-900">Achievements</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}