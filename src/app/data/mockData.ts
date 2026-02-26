export const studentData = {
  id: "ST2024001234",
  name: "Alex Johnson",
  programme: "Bachelor of Computer Science (Honours)",
  semester: "Semester 3",
  cgpa: 3.67,
  email: "alexj@student.tarc.edu.my",
  phone: "+60 12-345 6789",
  intake: "January 2023",
  expectedGraduation: "December 2025",
};

export const announcements = [
  {
    id: 1,
    title: "Mid-Semester Break Announcement",
    date: "2026-02-20",
    category: "Academic",
    content: "Mid-semester break will be from 10th to 14th March 2026. Classes will resume on 15th March 2026.",
    priority: "high",
  },
  {
    id: 2,
    title: "Library Operating Hours Extended",
    date: "2026-02-18",
    category: "Facilities",
    content: "The library will now operate from 8:00 AM to 10:00 PM on weekdays during exam period.",
    priority: "medium",
  },
  {
    id: 3,
    title: "Career Fair 2026",
    date: "2026-02-15",
    category: "Events",
    content: "Annual Career Fair will be held on 25th March 2026. Over 50 companies will be participating.",
    priority: "medium",
  },
  {
    id: 4,
    title: "Online Payment System Maintenance",
    date: "2026-02-12",
    category: "System",
    content: "Online payment system will undergo maintenance on 28th February from 12:00 AM to 6:00 AM.",
    priority: "low",
  },
  {
    id: 5,
    title: "Scholarship Applications Open",
    date: "2026-02-10",
    category: "Financial",
    content: "Applications for merit-based scholarships are now open. Deadline: 30th March 2026.",
    priority: "high",
  },
];

export const timetable = [
  {
    day: "Monday",
    classes: [
      {
        code: "CSC3401",
        name: "Database Systems",
        time: "9:00 AM - 11:00 AM",
        location: "Block D, Room D401",
        lecturer: "Dr. Sarah Lee",
        type: "Lecture",
      },
      {
        code: "CSC3402",
        name: "Software Engineering",
        time: "2:00 PM - 4:00 PM",
        location: "Block C, Room C302",
        lecturer: "Mr. David Wong",
        type: "Lecture",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        code: "CSC3403",
        name: "Web Development",
        time: "10:00 AM - 1:00 PM",
        location: "Lab 3, Block E",
        lecturer: "Ms. Emily Tan",
        type: "Lab",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        code: "CSC3401",
        name: "Database Systems",
        time: "11:00 AM - 1:00 PM",
        location: "Lab 2, Block E",
        lecturer: "Dr. Sarah Lee",
        type: "Tutorial",
      },
      {
        code: "CSC3404",
        name: "Mobile App Development",
        time: "3:00 PM - 5:00 PM",
        location: "Block D, Room D302",
        lecturer: "Dr. James Lim",
        type: "Lecture",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        code: "CSC3402",
        name: "Software Engineering",
        time: "9:00 AM - 12:00 PM",
        location: "Lab 1, Block E",
        lecturer: "Mr. David Wong",
        type: "Lab",
      },
      {
        code: "MPU3113",
        name: "Hubungan Etnik",
        time: "2:00 PM - 4:00 PM",
        location: "Block A, Room A201",
        lecturer: "Dr. Ahmad Zaki",
        type: "Lecture",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        code: "CSC3404",
        name: "Mobile App Development",
        time: "10:00 AM - 1:00 PM",
        location: "Lab 4, Block E",
        lecturer: "Dr. James Lim",
        type: "Lab",
      },
    ],
  },
];

export const results = [
  {
    semester: "Semester 2 (2024/2025)",
    gpa: 3.72,
    subjects: [
      { code: "CSC2401", name: "Data Structures & Algorithms", credit: 4, grade: "A", points: 4.0 },
      { code: "CSC2402", name: "Object-Oriented Programming", credit: 4, grade: "A-", points: 3.67 },
      { code: "CSC2403", name: "Computer Networks", credit: 3, grade: "A", points: 4.0 },
      { code: "CSC2404", name: "Operating Systems", credit: 3, grade: "B+", points: 3.33 },
      { code: "MPU2213", name: "Bahasa Kebangsaan A", credit: 3, grade: "A", points: 4.0 },
    ],
  },
  {
    semester: "Semester 1 (2024/2025)",
    gpa: 3.58,
    subjects: [
      { code: "CSC1401", name: "Introduction to Programming", credit: 4, grade: "A-", points: 3.67 },
      { code: "CSC1402", name: "Discrete Mathematics", credit: 3, grade: "B+", points: 3.33 },
      { code: "CSC1403", name: "Digital Logic", credit: 3, grade: "A", points: 4.0 },
      { code: "MPU1113", name: "Pengajian Malaysia", credit: 3, grade: "A-", points: 3.67 },
      { code: "MPU1223", name: "English for Communication", credit: 3, grade: "B+", points: 3.33 },
    ],
  },
];

export const courses = [
  {
    code: "CSC3401",
    name: "Database Systems",
    credit: 4,
    lecturer: "Dr. Sarah Lee",
    description: "Introduction to database management systems, SQL, database design, normalization, and transaction management.",
    prerequisites: ["CSC2401"],
    assessments: [
      { type: "Assignment", weightage: 20, deadline: "2026-03-15" },
      { type: "Mid-Term Test", weightage: 30, deadline: "2026-04-10" },
      { type: "Final Exam", weightage: 50, deadline: "2026-06-05" },
    ],
  },
  {
    code: "CSC3402",
    name: "Software Engineering",
    credit: 4,
    lecturer: "Mr. David Wong",
    description: "Software development life cycle, requirements engineering, design patterns, testing, and project management.",
    prerequisites: ["CSC2402"],
    assessments: [
      { type: "Project", weightage: 40, deadline: "2026-05-20" },
      { type: "Presentation", weightage: 10, deadline: "2026-05-22" },
      { type: "Final Exam", weightage: 50, deadline: "2026-06-08" },
    ],
  },
  {
    code: "CSC3403",
    name: "Web Development",
    credit: 3,
    lecturer: "Ms. Emily Tan",
    description: "HTML, CSS, JavaScript, responsive design, front-end frameworks, and web application development.",
    prerequisites: ["CSC2401"],
    assessments: [
      { type: "Lab Exercises", weightage: 20, deadline: "Ongoing" },
      { type: "Project", weightage: 40, deadline: "2026-05-15" },
      { type: "Final Exam", weightage: 40, deadline: "2026-06-12" },
    ],
  },
  {
    code: "CSC3404",
    name: "Mobile App Development",
    credit: 3,
    lecturer: "Dr. James Lim",
    description: "Mobile platforms, UI/UX design for mobile, native and cross-platform development, mobile app deployment.",
    prerequisites: ["CSC2402"],
    assessments: [
      { type: "Assignment", weightage: 30, deadline: "2026-04-05" },
      { type: "Project", weightage: 40, deadline: "2026-05-18" },
      { type: "Final Exam", weightage: 30, deadline: "2026-06-15" },
    ],
  },
  {
    code: "MPU3113",
    name: "Hubungan Etnik",
    credit: 3,
    lecturer: "Dr. Ahmad Zaki",
    description: "Study of ethnic relations in Malaysia, cultural diversity, and national unity.",
    prerequisites: [],
    assessments: [
      { type: "Assignment", weightage: 30, deadline: "2026-04-20" },
      { type: "Presentation", weightage: 20, deadline: "2026-05-10" },
      { type: "Final Exam", weightage: 50, deadline: "2026-06-18" },
    ],
  },
];

export const attendance = [
  {
    code: "CSC3401",
    name: "Database Systems",
    attended: 22,
    total: 24,
    percentage: 91.7,
    status: "Good",
  },
  {
    code: "CSC3402",
    name: "Software Engineering",
    attended: 20,
    total: 24,
    percentage: 83.3,
    status: "Good",
  },
  {
    code: "CSC3403",
    name: "Web Development",
    attended: 18,
    total: 20,
    percentage: 90.0,
    status: "Good",
  },
  {
    code: "CSC3404",
    name: "Mobile App Development",
    attended: 17,
    total: 22,
    percentage: 77.3,
    status: "Warning",
  },
  {
    code: "MPU3113",
    name: "Hubungan Etnik",
    attended: 23,
    total: 24,
    percentage: 95.8,
    status: "Excellent",
  },
];
