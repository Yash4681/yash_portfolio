export const profile = {
  name: 'Yash Prashant Manglekar',
  shortName: 'Yash Manglekar',
  role: 'Software Developer',
  headline:
    'Software Developer building scalable enterprise web applications with ASP.NET Core, React.js, and SQL.',
  summary:
    'Results-driven Software Developer with 2 years of experience delivering scalable web applications in C#, ASP.NET Core, React.js, and SQL databases. Proven record of reducing query execution time by 20%, cutting production defects by 15%, and improving user efficiency by 25%.',
  email: 'yashmanglekar0@gmail.com',
  phone: '+91-8208395503',
  github: 'https://github.com/Yash4681',
  linkedin: 'https://www.linkedin.com/in/yash-manglekar-a7b56521a',
  resume: `${import.meta.env.BASE_URL}Yash_Manglekar_Resume.pdf`,
}

export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export const metrics = [
  { value: '2+', label: 'Years building web apps' },
  { value: '10+', label: 'REST APIs delivered' },
  { value: '20%', label: 'Faster query execution' },
  { value: '30%', label: 'Higher test coverage' },
]

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    skills: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'React.js', 'JavaScript', 'LINQ', 'Entity Framework Core'],
  },
  {
    title: 'Web & Services',
    skills: ['REST APIs', 'Microservices', 'JSON', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'Stored Procedures', 'Query Optimization'],
  },
  {
    title: 'Testing & Quality',
    skills: ['xUnit', 'MSTest', 'Unit Testing', 'TDD', 'Debugging'],
  },
  {
    title: 'Tools & Collaboration',
    skills: ['Git', 'GitHub', 'GitFlow', 'Agile/Scrum', 'Jira', 'Visual Studio', 'VS Code'],
  },
  {
    title: 'Cloud & Domain',
    skills: ['Docker', 'CI/CD', 'Kubernetes', 'ISO8583', 'Payment Workflow', 'Payment Entities'],
  },
]

export const competencies = [
  'Object-Oriented Programming',
  'SOLID Principles',
  'Performance Optimization',
  'REST API Design',
  'Software Development Life Cycle',
  'Problem Solving',
]

export const experiences = [
  {
    role: 'Software Developer',
    company: 'Fime India Pvt Ltd',
    period: 'July 2023 - Present',
    summary:
      'Engineering enterprise-scale web applications across ASP.NET Core, MVC, React.js, and SQL-backed systems for cross-functional business teams.',
    highlights: [
      'Engineered enterprise-scale web applications using C#, ASP.NET Core, and MVC, increasing process efficiency and reducing manual workloads across departments.',
      'Designed and deployed 10+ RESTful APIs for secure, scalable data exchange, improving system integration speed by 30%.',
      'Developed responsive React.js front-end features that improved user task completion rates by 25%.',
      'Optimized SQL Server and PostgreSQL queries, reducing query execution time by 20% during peak usage.',
      'Raised automated test coverage by 30% with xUnit and MSTest, cutting production defects by 15%.',
      'Collaborated with Agile teams including SAMA, FTS, and CIS to deliver business-critical features on time.',
    ],
  },
]

export const projects = [
  {
    title: 'Stock Trading Web Application',
    stack: ['ASP.NET Core MVC', 'Entity Framework Core', 'PostgreSQL', 'Finnhub API', 'xUnit'],
    description:
      'Full-stack stock trading platform with n-layer architecture, real-time market data, reliable order workflows, and strong test coverage.',
    impact: [
      'Implemented buy/sell functionality with validation and DTOs for 500+ simulated users.',
      'Reduced order latency by 40% through optimized service layers and dependency injection.',
      'Achieved 90%+ unit test coverage for trading services and high-volume transaction accuracy.',
    ],
    link: 'https://github.com/Yash4681/Stock_Trading_App'
  },
  {
    title: 'Person & Country Management System',
    stack: ['ASP.NET Core MVC', 'SQL Server', 'EPPlus', 'CsvHelper', 'Rotativa'],
    description:
      'CRUD-based management system for large record sets with advanced search, filtering, sorting, and document automation.',
    impact: [
      'Handled 10,000+ records with efficient data-management workflows.',
      'Automated Excel, CSV, and PDF import/export, cutting manual data-entry effort by 80%.',
      'Applied service-based architecture and dependency injection for maintainability and scale.',
    ],
    link: 'https://github.com/Yash4681/Person-Country-Management-System'
  },
]

export const education = {
  degree: 'Bachelor of Engineering (B.E.) - Computer Science and Engineering',
  institution: 'Rajiv Gandhi College of Engineering and Research',
  year: '2023',
}

export const achievements = [
  'Reduced database query execution time by 20% across enterprise applications.',
  'Increased automated test coverage by 30%, lowering post-release defects by 15%.',
  'Delivered mission-critical enterprise features on time in Agile sprints.',
  'Built portfolio projects showcasing real-time API integration and large-scale data management.',
]
