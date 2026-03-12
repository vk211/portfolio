import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome ,Project, Education} from "./types";

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
    title: "Hi, I’m Vijay Goud Kodipyaka",
    subTitle: "Software Engineer | Java Full Stack Developer "
}

export const aboutMe: AboutMeInfo = {
    myself:    "I'm a Java Full Stack Developer with 4+ years of experience building scalable, high-performance web applications. My core strength lies in crafting end-to-end solutions using technologies like Java 11, Spring Boot, React.js, Redux, and Microservices architecture. I have a proven track record of optimizing performance, reducing load times, and delivering business-aligned features within Agile teams.",
    passion: "I'm passionate about building clean, efficient, and maintainable code that solves real-world problems. I thrive on creating intuitive user interfaces and architecting robust backend systems. Deploying microservices on AWS, setting up CI/CD pipelines with Jenkins, integrating MongoDB and Elasticsearch for lightning-fast data access — these are the kinds of challenges I love.",
   passionApart:
    "Beyond development, I enjoy staying current with the latest in cloud computing, AI/ML integrations, and frontend frameworks. I actively participate in code reviews and internal hackathons, where I've been recognized for innovative, production-ready solutions. I hold an AWS Certified Solutions Architect – Associate certification and am a firm believer in continuous learning and knowledge sharing.",
};

export const profile: Profile = {
    github: {
        url: "https://github.com/vk211",
        logoUrl: imgPath("social", "github.png")
    },
    
    linkedin: {
        url: "https://linkedin.com/in/vijaykodipyaka",
        logoUrl: imgPath("social", "linkedin.png")
    },
    gmail: {
        url: "kodipyakavijay02@gmail.com",
        logoUrl: imgPath("social", "gmail.png")
    },
    whatsapp: {
        number: "+1714-798 3502",
        logoUrl: imgPath("social", "whatsapp.png")
    }
};

export const skill: SkillCategory = {
    language: {
        label: "Programming Languages",
        items: [
            { name: "Java", logo: imgPath("skill", "java.png") },
            { name: "Python", logo: imgPath("skill", "python.png") },
            { name: "TypeScript", logo: imgPath("skill", "typescript.png") },
            { name: "JavaScript", logo: imgPath("skill", "Javascript.png") },
            { name: "C", logo: imgPath("skill", "c.png") },

        ]
    },
    backend: {
        label: "Backend",
        items: [
            { name: "SpringBoot", logo: imgPath("skill", "springboot.png") },
            { name: "Django", logo: imgPath("skill", "django.png") },
            { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
            { name: "Goose", logo: imgPath("skill", "goose.png") },
            { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
            { name: "Redis", logo: imgPath("skill", "redis.png") },
        ]
    },
    frontend: {
        label: "Frontend",
        items: [
            { name: "React", logo: imgPath("skill", "react.png") },

            { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
            { name: "Angular", logo: imgPath("skill", "angular.png") },
            { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
            { name: "HTML", logo: imgPath("skill", "html.png") },
            { name: "Bootstrap", logo: imgPath("skill", "bootstrap.png") },
        ]
    },
    devops: {
        label: "DevOps & Cloud",
        items: [
            { name: "Docker", logo: imgPath("skill", "docker.png") },
            { name: "AWS", logo: imgPath("skill", "aws.png") },
            { name: "Nginx", logo: imgPath("skill", "nginx.png") }
        ]
    },
    api: {
        label: "API & Communication",
        items: [
            { name: "REST APIs", logo: null },
            { name: "gRPC", logo: null },
            { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") }
        ]
    },
    tools: {
        label: "Tools",
        items: [
            { name: "Git", logo: imgPath("skill", "git.png") },
            { name: "VSCode", logo: imgPath("skill", "vscode.png") },
            { name: "Postman", logo: imgPath("skill", "postman.png") },
            // { name: "Swagger", logo: imgPath("skill", "swagger.png") },
            // { name: "Makefile", logo: imgPath("skill", "makefile.png") },
            { name: "Ubuntu", logo: imgPath("skill", "ubuntu.png") },
        ]
    }
};
export const projects: Project[]= [
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
    role: "Software Engineer",
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

export const welcome: Welcome = {
    text: "Got a project or collaboration in mind? Feel free to reach out — I’m always open to new opportunities and ideas."
}
