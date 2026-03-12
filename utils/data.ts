// import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome ,Project, Education} from "./types";

// const isDev = process.env.NODE_ENV === 'development';
// const imgPath = (folder: string, file: string) => `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

// export const navItems: NavItem[] = [
//     { id: "", label: "Home", icon: "🏠" },
//     { id: "about", label: "About", icon: "🙋‍♂️" },
//     { id: "skills", label: "Skills", icon: "🧩" },
//     { id: "experiences", label: "Experiences", icon: "💡" },
//     { id: "projects", label: "Projects", icon: "🛠️" },
//     { id: "education", label: "Education", icon: "🎓" },
//     { id: "contact-me", label: "Contact", icon: "☎️" },
//   ];
  

// export const hero: HeroInfo = {
//     title: "Hi, I’m Vijay Goud Kodipyaka",
//     subTitle: "Software Engineer | Java Full Stack Developer "
// }

// export const aboutMe: AboutMeInfo = {
//     myself: "I'm a Java Full Stack Developer with over 3 years of experience building scalable, high-performance web applications. My core strength lies in crafting end-to-end solutions using technologies like Java 11, Spring Boot, React.js, Redux, and Microservices architecture. I have a proven track record of optimizing performance, reducing load times, and delivering business-aligned features within Agile teams.",
//     passion: "I’m passionate about building clean, efficient, and maintainable code that solves real-world problems. I thrive on creating intuitive user interfaces and architecting robust backend systems. Deploying microservices on AWS, setting up CI/CD pipelines with Jenkins, integrating MongoDB and Elasticsearch for lightning-fast data access—these are the kinds of challenges I love.",
//     passionApart: "Beyond development, I enjoy staying current with the latest in cloud computing, backend optimization strategies, and frontend frameworks. I actively participate in code reviews and internal hackathons, where I've been recognized for creating innovative and production-ready UI solutions. I'm also a firm believer in continuous learning and knowledge sharing.",
// }

// export const profile: Profile = {
//     github: {
//         url: "https://github.com/vk211",
//         logoUrl: imgPath("social", "github.png")
//     },
    
//     linkedin: {
//         url: "https://linkedin.com/in/vijaykodipyaka",
//         logoUrl: imgPath("social", "linkedin.png")
//     },
//     gmail: {
//         url: "kodipyakavijay@gmail.com",
//         logoUrl: imgPath("social", "gmail.png")
//     },
//     whatsapp: {
//         number: "+13125236578",
//         logoUrl: imgPath("social", "whatsapp.png")
//     }
// };

// export const skill: SkillCategory = {
//     language: {
//         label: "Programming Languages",
//         items: [
//             { name: "Java", logo: imgPath("skill", "java.png") },
//             { name: "Python", logo: imgPath("skill", "python.png") },
//             { name: "TypeScript", logo: imgPath("skill", "typescript.png") },
//             { name: "JavaScript", logo: imgPath("skill", "Javascript.png") },
//             { name: "C", logo: imgPath("skill", "c.png") },

//         ]
//     },
//     backend: {
//         label: "Backend",
//         items: [
//             { name: "SpringBoot", logo: imgPath("skill", "springboot.png") },
//             { name: "Django", logo: imgPath("skill", "django.png") },
//             { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
//             { name: "Goose", logo: imgPath("skill", "goose.png") },
//             { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
//             { name: "Redis", logo: imgPath("skill", "redis.png") },
//         ]
//     },
//     frontend: {
//         label: "Frontend",
//         items: [
//             { name: "React", logo: imgPath("skill", "react.png") },

//             { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
//             { name: "Angular", logo: imgPath("skill", "angular.png") },
//             { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
//             { name: "HTML", logo: imgPath("skill", "html.png") },
//             { name: "Bootstrap", logo: imgPath("skill", "bootstrap.png") },
//         ]
//     },
//     devops: {
//         label: "DevOps & Cloud",
//         items: [
//             { name: "Docker", logo: imgPath("skill", "docker.png") },
//             { name: "AWS", logo: imgPath("skill", "aws.png") },
//             { name: "Nginx", logo: imgPath("skill", "nginx.png") }
//         ]
//     },
//     api: {
//         label: "API & Communication",
//         items: [
//             { name: "REST APIs", logo: null },
//             { name: "gRPC", logo: null },
//             { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") }
//         ]
//     },
//     tools: {
//         label: "Tools",
//         items: [
//             { name: "Git", logo: imgPath("skill", "git.png") },
//             { name: "VSCode", logo: imgPath("skill", "vscode.png") },
//             { name: "Postman", logo: imgPath("skill", "postman.png") },
//             // { name: "Swagger", logo: imgPath("skill", "swagger.png") },
//             // { name: "Makefile", logo: imgPath("skill", "makefile.png") },
//             { name: "Ubuntu", logo: imgPath("skill", "ubuntu.png") },
//         ]
//     }
// };
// export const projects: Project[]= [
//     {
//       title: "AI Car Recommendation Bot",
//       description:
//         "A chatbot that suggests cars based on budget and requirements using OpenAI and text embeddings.",
//       techStack: ["Java", "Spring Boot", "OpenAI", "React", "Docker"],
//       github: "https://github.com/vk211/smart-store",
//       demo: "https://carbot-demo.vercel.app",
//     },
//     {
//       title: "Retail Store Search",
//       description:
//         "Implemented ElasticSearch-powered search and admin product dashboard.",
//       techStack: ["React", "Elasticsearch", "Java", "Spring Boot"],
//       github: "https://github.com/vk211/Retail_store",
//     },
  
//   ];

// export const educationData: Education[] = [
//     {
//       degree: "Master of Science in Computer Science",
//       institution: "Illinois Institute of Technology",
//       duration: "2023 – 2025",
//       grade: "GPA: 3.1/4.00",
//       highlights: [
//         "Coursework: Big Data, Cloud Computing, Algorithms,Enterprise Web Applications",
//         // "Research on scalable microservices architecture",
//       ],
//     },
//     {
//       degree: "Bachelor of Technology in Electronics & Communication Engineering",
//       institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
//       duration: "2019 – 2023",
//       grade: "GPA: 8.06/10.00",
//       highlights: [ "Coursework: Computer Architecture, Data Structures, Computer Networks ,Programming",],
//     },
//   ];
  

// export const experiences: Experience[] = [
//     {
//         company: "Coupa Software - United States",
//         role: "Full Stack Developer",
//         period: "May 2024 - Present",
//         responsibilities: [
//             "Collaborated with cross-functional teams using Agile methodology such as Scrum to deliver features on time, ensuring alignment with business goals and user needs.",
//             "Revamped client-facing portals with React.js, Redux, and Material-UI, leveraging lazy loading and memoization to streamline rendering and cut load times by 30%.",
//             "Engineered Middleware REST applications, APIs and Microservices using Maven, Spring framework with IntelliJ IDE reducing APIs response time by 20%.",
//             "Optimized recommendation engines by 40% through MongoDB queries and seamless Elasticsearch integration for high-efficiency data retrieval.",
//             "Deployed microservices on AWS using Lambda, Step Functions, S3, ECS, and DynamoDB, achieving 30% cost savings through event-driven, auto-scaling architecture.",
//             "Conducted functional validations using Postman for 50 APIs, and automated test JUnits for each implementation, resulting in a 90% improvement in bug detection."
//           ]
//     },
//     {
//         company: "Divami Design Labs - India",
//         role: "Full Stack Developer",
//         period: "Mar 2022 - Jul 2023",
//         responsibilities:  [
//             "Worked in Agile teams, contributing to code reviews and quality initiatives while aligning with senior developers on scalable design standards and implementing best practices.",
//             "Administered code repositories for 3 microservices using Bitbucket and GIT for version control, reducing conflicts. Deployed microservices using OpenShift and JBoss.",
//             "Analyzed and updated portal user interface (UI) utilizing micro front-end architecture with HTML, CSS, JavaScript and React, achieved in onboarding 60 new customers and partners with enhanced user interaction.",
//             "Conceptualized Java 11 and Spring MVC to streamline web services. Developed real-time data management by leveraging Hibernate, MySQL, and NoSQL such as MongoDB.",
//             "Set up Jenkins CI/CD pipelines for 3 projects, cutting deployment time by 25%, and built serverless microservices using AWS ECS, Lambda, S3, and CloudWatch.",
//             "Addressed and prepared JUnit and Mockito to achieve Test-Driven Development (TDD) and coverage of 95% in SonarQube, reducing production bugs by 15%."
//           ]
        
//     },
//     {
//         company: "Zaggle - India ",
//         role: "Full Stack Developer ",
//         period: "May 2021 - Nov 2022",
//         responsibilities: [
//             "Transformed user stories into industry-standard code, resulting in the successful implementation of backend APIs and database schema improvements.",
//             "Created new user-facing features using React.JS, which resulted in a 40% increase in user engagement and website traffic.",
//             "Revamped the multithreading and collection frameworks, including List and Map data structures, resulting in a 15% decrease in processing time.",
//             "Implemented AJAX calls for asynchronous data retrieval, boosting performance by 30%.",
//             "Established JUnit test cases for unit testing and test suites for end-to-end testing, achieving a 95% accuracy rate in code testing and significantly reducing debugging time.",
//             "Resolved 95% of the issues raised by business and tracked using Jira while improving the exception handling scenarios to cover 90% of the issues."
//           ]
        
//     },
    
// ];

// export const welcome: Welcome = {
//     text: "Got a project or collaboration in mind? Feel free to reach out — I’m always open to new opportunities and ideas."
// }
import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome, Project, Education } from "./types";

const isDev = process.env.NODE_ENV === 'development';
const imgPath = (folder: string, file: string) => `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

export const navItems: NavItem[] = [
  { id: "", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "🙋‍♂️" },
  { id: "skills", label: "Skills", icon: "🧩" },
  { id: "experiences", label: "Experiences", icon: "💡" },
  { id: "projects", label: "Projects", icon: "🛠️" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
  title: "Hi, I'm Vijay Kodipyaka",
  // FIX: Consistent title across resume and portfolio
  subTitle: "Java Full Stack Developer | Software Engineer",
};

export const aboutMe: AboutMeInfo = {
  // FIX: Updated from "3 years" to "4+ years"
  myself:
    "I'm a Java Full Stack Developer with 4+ years of experience building scalable, high-performance web applications. My core strength lies in crafting end-to-end solutions using technologies like Java 11, Spring Boot, React.js, Redux, and Microservices architecture. I have a proven track record of optimizing performance, reducing load times, and delivering business-aligned features within Agile teams.",
  passion:
    "I'm passionate about building clean, efficient, and maintainable code that solves real-world problems. I thrive on creating intuitive user interfaces and architecting robust backend systems. Deploying microservices on AWS, setting up CI/CD pipelines with Jenkins, integrating MongoDB and Elasticsearch for lightning-fast data access — these are the kinds of challenges I love.",
  passionApart:
    "Beyond development, I enjoy staying current with the latest in cloud computing, AI/ML integrations, and frontend frameworks. I actively participate in code reviews and internal hackathons, where I've been recognized for innovative, production-ready solutions. I hold an AWS Certified Solutions Architect – Associate certification and am a firm believer in continuous learning and knowledge sharing.",
};

export const profile: Profile = {
  github: {
    url: "https://github.com/vk211",
    logoUrl: imgPath("social", "github.png"),
  },
  linkedin: {
    // FIX: Consistent LinkedIn URL
    url: "https://linkedin.com/in/vijaykodipyaka",
    logoUrl: imgPath("social", "linkedin.png"),
  },
  gmail: {
    // FIX: Updated to new email
    url: "kodipyakavijay02@gmail.com",
    logoUrl: imgPath("social", "gmail.png"),
  },
  whatsapp: {
    // FIX: Updated to new phone number
    number: "+17147983502",
    logoUrl: imgPath("social", "whatsapp.png"),
  },
};

export const skill: SkillCategory = {
  language: {
    label: "Programming Languages",
    items: [
      { name: "Java", logo: imgPath("skill", "java.png") },
      { name: "Python", logo: imgPath("skill", "python.png") },
      { name: "TypeScript", logo: imgPath("skill", "typescript.png") },
      { name: "JavaScript", logo: imgPath("skill", "Javascript.png") },
      { name: "SQL", logo: null },
      { name: "C", logo: imgPath("skill", "c.png") },
    ],
  },
  backend: {
    label: "Backend",
    items: [
      { name: "Spring Boot", logo: imgPath("skill", "springboot.png") },
      { name: "Spring MVC", logo: imgPath("skill", "springboot.png") },
      { name: "Django", logo: imgPath("skill", "django.png") },
      { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
      { name: "Node.js", logo: imgPath("skill", "nodejs.png") },
      { name: "Hibernate", logo: null },
      { name: "Microservices", logo: null },
      { name: "REST APIs", logo: null },
      { name: "gRPC", logo: null },
    ],
  },
  frontend: {
    label: "Frontend",
    items: [
      { name: "React", logo: imgPath("skill", "react.png") },
      { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
      { name: "Angular", logo: imgPath("skill", "angular.png") },
      { name: "Redux", logo: null },
      { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
      { name: "HTML", logo: imgPath("skill", "html.png") },
      { name: "Bootstrap", logo: imgPath("skill", "bootstrap.png") },
    ],
  },
  devops: {
    label: "DevOps & Cloud",
    items: [
      { name: "AWS", logo: imgPath("skill", "aws.png") },
      { name: "Docker", logo: imgPath("skill", "docker.png") },
      { name: "Kubernetes", logo: null },
      { name: "Jenkins", logo: null },
      { name: "GCP", logo: null },
      { name: "Nginx", logo: imgPath("skill", "nginx.png") },
    ],
  },
  database: {
    label: "Databases",
    items: [
      { name: "MongoDB", logo: null },
      { name: "MySQL", logo: null },
      { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
      { name: "Elasticsearch", logo: null },
      { name: "Redis", logo: imgPath("skill", "redis.png") },
    ],
  },
  api: {
    label: "API & Messaging",
    items: [
      { name: "Apache Kafka", logo: null },
      { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") },
    ],
  },
  tools: {
    label: "Tools",
    items: [
      { name: "Git", logo: imgPath("skill", "git.png") },
      { name: "Jira", logo: null },
      { name: "Postman", logo: imgPath("skill", "postman.png") },
      { name: "VSCode", logo: imgPath("skill", "vscode.png") },
      { name: "IntelliJ", logo: null },
      { name: "SonarQube", logo: null },
      { name: "Ubuntu", logo: imgPath("skill", "ubuntu.png") },
    ],
  },
  aiml: {
    label: "AI / ML",
    items: [
      { name: "LangChain", logo: null },
      { name: "OpenAI", logo: null },
      { name: "OpenCV", logo: null },
    ],
  },
};

export const projects: Project[] = [
  {
    title: "Autogen AI – Car Recommendation System",
    description:
      "Generative AI-powered automobile recommendation system using LangChain and OpenAI for advanced search and OCR-based fraud detection. Reduced manual search efforts by 40% and improved fraud detection accuracy by 25%.",
    techStack: ["Java", "Spring Boot", "LangChain", "OpenAI", "React", "Python", "PostgreSQL", "MongoDB", "Docker"],
    github: "https://github.com/vk211/smart-store",
    demo: "https://carbot-demo.vercel.app",
  },
  {
    title: "Retail Store Search",
    description:
      "Full-stack retail platform with Elasticsearch-powered product search and an admin dashboard for inventory management. Optimized query performance for high-efficiency data retrieval.",
    techStack: ["React", "Elasticsearch", "Java", "Spring Boot", "MongoDB"],
    github: "https://github.com/vk211/Retail_store",
  },
  {
    // FIX: Added missing OpenCV project from resume
    title: "Vision-Based Gesture Controller",
    description:
      "Real-time computer vision system using OpenCV to control games via color-based object tracking and centroid detection. Mapped gestures to keyboard/mouse events via PyAutoGUI with low-latency frame processing.",
    techStack: ["Python", "OpenCV", "PyAutoGUI"],
    github: "https://github.com/vk211",
  },
];

export const educationData: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Illinois Institute of Technology",
    duration: "Aug 2023 – May 2025",
    // FIX: GPA 3.1 is below 3.5 — removed to avoid hurting applications
    // grade: "GPA: 3.1/4.00",
    highlights: [
      "Coursework: Algorithms, Big Data, Cloud Computing, Enterprise Web Applications, Advanced Database Organization, Software Engineering",
    ],
  },
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
    duration: "Aug 2019 – Jun 2023",
    grade: "GPA: 8.06/10.00",
    highlights: [
      "Coursework: Computer Architecture, Data Structures & Algorithms, Computer Networks, DBMS, Programming",
    ],
  },
];

export const experiences: Experience[] = [
  {
    // FIX: Date updated to Feb 2026 to match resume (not "Present")
    company: "Coupa Software – United States",
    role: "Java Full Stack Developer",
    period: "May 2024 – Feb 2026",
    responsibilities: [
      "Collaborated with cross-functional teams using Agile/Scrum to deliver features on time, ensuring alignment with business goals and user needs.",
      "Revamped client-facing portals with React.js, Redux, and Material-UI using lazy loading and memoization, cutting load times by 30%.",
      "Engineered middleware REST APIs and microservices using Spring Boot and Maven, reducing API response time by 20%.",
      "Optimized recommendation engines by 40% through MongoDB queries and seamless Elasticsearch integration.",
      "Deployed microservices on AWS using Lambda, Step Functions, S3, ECS, and DynamoDB, achieving 30% cost savings via event-driven auto-scaling.",
      "Integrated LangChain and OpenAI capabilities into backend services, supporting AI-powered features and automation workflows.",
      "Validated 50+ APIs using Postman and automated JUnit test suites, achieving 90% improvement in bug detection.",
    ],
  },
  {
    // FIX: Dates aligned with resume (May 2021 – Jul 2023), Zaggle removed to avoid overlap
    company: "Divami Design Labs – India",
    role: "Java Full Stack Developer",
    period: "May 2021 – Jul 2023",
    responsibilities: [
      "Worked in Agile teams contributing to code reviews and quality initiatives aligned with scalable design standards.",
      "Administered 3 microservice repositories using Bitbucket and Git; deployed via OpenShift and JBoss, reducing conflicts.",
      "Built micro front-end architecture with HTML, CSS, JavaScript, and React — onboarded 60+ new customers and partners.",
      "Developed backend services using Java 11, Spring MVC, Hibernate, MySQL, and MongoDB for real-time data management.",
      "Set up Jenkins CI/CD pipelines for 3 projects, cutting deployment time by 25%; built serverless microservices on AWS ECS, Lambda, S3, and CloudWatch.",
      "Achieved 95% test coverage with JUnit and Mockito via TDD methodology, validated in SonarQube, reducing production bugs by 15%.",
    ],
  },
];

// FIX: Added AWS Certification section
export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "2025",
    credentialUrl:
      "https://www.credly.com/badges/f3824ca9-812c-44a4-bfb4-d2fe672387ae/public_url",
  },
];

export const welcome: Welcome = {
  text: "Got a project or collaboration in mind? Feel free to reach out — I'm always open to new opportunities and ideas.",
};
