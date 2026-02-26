import { Outlet, Link, useLocation } from "react-router";
import {
  Home,
  Calendar,
  FileText,
  Bell,
  BookOpen,
  ClipboardList,
  User,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/timetable", label: "Timetable", icon: Calendar },
  { path: "/results", label: "Results", icon: FileText },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/announcements", label: "News", icon: Bell },
  { path: "/profile", label: "Profile", icon: User },
];

export function Root() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Phone Frame */}
      <div className="w-full max-w-[390px] h-[844px] bg-gray-50 overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-gray-800 flex flex-col relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
        
        {/* Mobile Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg pt-10 pb-4 px-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-md">
              <span className="text-blue-600 font-bold text-2xl">T</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">TARC Portal</h1>
              <p className="text-blue-100 text-xs">Student App</p>
            </div>
          </div>
        </header>

        {/* Main content - scrollable */}
        <main className="flex-1 overflow-y-auto px-4 py-4 pb-20">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="grid grid-cols-6 gap-1 px-2 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} className="mb-1" />
                  <span className="text-[10px] font-medium leading-tight">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}