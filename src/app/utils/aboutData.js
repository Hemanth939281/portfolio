import { Code, Video, Utensils, Rocket, Book, Music, Plane } from "lucide-react";

export const aboutData = {
    title: "About Me",
    description: "I am a passionate web developer focused on solving real-world problems by building innovative applications. With a keen eye for design and a strong foundation in modern web technologies, I strive to create seamless user experiences that make a difference.",
    
    skills: {
      Frontend: ["React", "Next.js", "Tailwind CSS", "Redux"],
      Backend: ["Node.js", "Express.js"],
      Databases: ["MongoDB", "PostgreSQL"],
      Tools: ["Git", "VS Code", "Cloudinary"],
    },

    projects: [
      {
        name: "Campus Project Hub",
        link: "https://hub-amber.vercel.app/",
        description: "A platform connecting students within their college to collaborate and develop innovative projects. Admins can manage students, projects, and vacancies within their respective colleges.",
        techStack: ["React.js", "Tailwind CSS", "Firebase", "Supabase"],
        features: [
          "Admin dashboard for managing students and projects",
          "Students can view and apply for project vacancies",
          "Secure login with college-based access control"
        ],
        github: "https://github.com/Hemanth939281/projects-hub",
        icon: Rocket
      },
      {
        name: "Netflix Clone",
          link:"https://rakshakh-netflix.vercel.app/",
        description: "A full-stack streaming platform inspired by Netflix, featuring authentication, real-time data fetching, and a user-friendly interface.",
        techStack: ["Next.js", "Tailwind CSS", "Firebase", "TMDb API"],
        features: [
          "User authentication and profile management",
          "Fetch and display movies dynamically from TMDb API",
          "Smooth UI with interactive animations"
        ],
        github: "https://github.com/Hemanth939281/N_gpt",
        icon: Video
      },
      {
        name: "Restaurant Management System",
          link:"http://rakshakhrestro.infinityfreeapp.com/",
        description: "A complete solution for restaurant owners to manage orders, tables, and inventory efficiently.",
        techStack: ["PHP", "MYSQL", "Tailwind CSS"],
        features: [
          "Real-time ordering",
          "Table reservation system",
          "Inventory management with low-stock alerts"
        ],
        github: "http://rakshakhrestro.infinityfreeapp.com/",
        icon: Utensils
      }
    ],

    experience: [
      {
        company: "Innovative Institution of Technology.",
        role: "Frontend Developer",
        period: "2024 - 2025",
        achievements: [
          "Led a team of 5 developers",
          "Developed reusable UI components",
          "Implemented responsive design for mobile users"
        ]
      },
    ],

    education: [{
      degree: "Bachelor of Science in Computer Science",
      university: "Vishnu Institute of Technology",
      year: "2026",
      CGPA: "8.5",
    },{
        degree: "Intermediate",
        university: "Narayana junior college",
        year: "2022",
        CGPA: "9.4",
    },
    {
        degree: "Tenth",
        university: "Bhashyam High School",
        year: "2020",
        CGPA: "10",
    }
    ],

    hobbies: [
      { name: "Photography", icon: Code, description: "Street and landscape photography enthusiast" },
      { name: "Reading", icon: Book, description: "Technical books and science fiction" },
      { name: "Music", icon: Music, description: "Listening to Music" },
      { name: "Traveling", icon: Plane, description: "Exploring new cultures and places" }
    ],

    contact: {
      email: "hkh777650@gmail.com",
      linkedin: "https://www.linkedin.com/in/hemanthkumarrajana",
      github: "https://github.com/Hemanth939281",
    }
};
