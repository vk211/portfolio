import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome } from "./types";

const isDev = process.env.NODE_ENV === 'development';
const imgPath = (folder: string, file: string) => `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

export const navItems: NavItem[] = [
    { id: "", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "🙋‍♂️" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
    title: "Hi, I’m Vijay Goud Kodipyaka",
    subTitle: "Software Engineer | Java Full Stack Developer "
}

export const aboutMe: AboutMeInfo = {
    myself: "I'm Vijay Goud Kodipyaka, backend focused Java full-stack software engineer 🖥️ .",
    passion: "🌥️ Enthusiastic about writing clean code, building cloud-native solutions, ⚙️ diving into low-level systems, 🤖 automating everything possible",
    hobby: "Apart from coding, and hobbyist photographer 📸",
}

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
        url: "vijaykodipyaka0809@gmail.com",
        logoUrl: imgPath("social", "gmail.png")
    },
    whatsapp: {
        number: "+1312989898",
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


export const experiences: Experience[] = [
    {
        company: "Divami Design Labs Pvt Ltd",
        role: "Software Engineer",
        period: "Dec 2022 - Aug 2023",
        responsibilities: [
            "Developed and maintained RESTful APIs with Django",
            "Designed database schemas and managed cached data",
            "Managed asynchronous tasks and cron jobs",
            "Integrated payment systems (Stripe)",
            "Migrated frontend from React to Nextjs",
            "Collaborated with frontend dev to ensure seamless functionality",
            "Set up development environments",
            "Deployed the application on AWS"
        ]
    },
    {
        company: "Freelance Project",
        role: "Software Engineer",
        period: "Dec 2023 - May 2024",
        responsibilities: [
            "Designed and developed an advanced product search system integrating full-text indexing, category filtering, and relevance ranking.",
            "Integrated ChatGPT-based embeddings for semantic understanding of user queries and product refining.",
            "Developed Dockerized services to generate and manage product embeddings efficiently.",
            "Built a dynamic recommendation engine for products based on user behavior and category segmentation.",
            "Created and secured RESTful APIs in Java for managing product catalog, orders, and customer profiles.",
            "Implemented comprehensive product admin functionalities including CRUD operations, bulk uploads, and real-time previews.",
            "Developed a responsive admin dashboard with role-based access control (RBAC) for administrators, managers, and editors.",
            "Built a mobile-first user interface in React supporting authentication, product browsing, wishlists, and order tracking.",
            "Implemented managerial modules for order tracking, refund handling, discount management, and customer support tools.",
            "Designed sales analytics and operational reports for business decision support.",
            "Containerized and deployed embedding generation services using Docker for scalable cloud-native deployment."
        ]
        
    },
    {
        company: "Free Lance Project Car Store",
        role: " Software Engineer",
        period: "Sep 2024 - Dec 2024",
        responsibilities: [
            "Developed a dynamic car recommendation website with a modern, responsive UI for enhanced user engagement.",
            "Integrated a chatbot interface capable of understanding user requirements (e.g., budget, brand preferences) and delivering personalized car suggestions.",
            "Built a recommendation system powered by OpenAI's text embeddings to semantically match user input with the best available car options.",
            "Fed the chatbot with a curated car dataset containing models, pricing, discounts, and manufacturer offers.",
            "Engineered a backend service to process user queries, apply budget constraints, and retrieve the most suitable car recommendations in real-time.",
            "Implemented discount visibility based on manufacturer and dealer offers to enhance customer decision-making.",
            "Designed and deployed the backend using a scalable architecture for efficient data retrieval and embedding management."
        ]
        
    },
    
];

export const welcome: Welcome = {
    text: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊"
}