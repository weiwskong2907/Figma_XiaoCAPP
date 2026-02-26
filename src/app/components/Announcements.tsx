import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bell, Calendar, Tag } from "lucide-react";
import { announcements } from "../data/mockData";
import { useState } from "react";

const categories = ["All", "Academic", "Facilities", "Events", "System", "Financial"];

export function Announcements() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAnnouncements =
    selectedCategory === "All"
      ? announcements
      : announcements.filter((a) => a.category === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-4 border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-4 border-l-yellow-500 bg-yellow-50";
      default:
        return "border-l-4 border-l-gray-500 bg-gray-50";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-100 text-blue-700";
      case "Facilities":
        return "bg-green-100 text-green-700";
      case "Events":
        return "bg-purple-100 text-purple-700";
      case "System":
        return "bg-gray-100 text-gray-700";
      case "Financial":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
          <p className="text-gray-600 mt-1">Stay updated with the latest news</p>
        </div>
        <Bell className="text-blue-600" size={32} />
      </div>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className={getPriorityColor(announcement.priority)}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{announcement.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tag size={14} />
                        <span
                          className={`px-2 py-0.5 rounded text-xs ${getCategoryColor(
                            announcement.category
                          )}`}
                        >
                          {announcement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  {announcement.priority === "high" && (
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium self-start">
                      Important
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">No announcements in this category</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Priority Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="size-4 bg-red-500 rounded" />
              <span className="text-sm text-gray-700">High Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-yellow-500 rounded" />
              <span className="text-sm text-gray-700">Medium Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-gray-500 rounded" />
              <span className="text-sm text-gray-700">Normal Priority</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
