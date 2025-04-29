// Navigation Items
export interface NavItem {
    id: string;
    label: string;
    icon: string;
};

export interface HeroInfo {
    title: string;
    subTitle: string;
};

// About Me Section
export interface AboutMeInfo {
    myself: string;
    passion: string;
    hobby: string;
};

// Social Profile Links
export interface SocialProfile {
    url: string;
    logoUrl: string;
};

export interface Profile {
    github: SocialProfile;
    // facebook: SocialProfile;
    linkedin: SocialProfile;
    gmail: SocialProfile;
    whatsapp: {
        number: string;
        logoUrl: string;
    };
};

// Skill Categories
interface SkillItem {
    name: string;
    logo: string | null;
};

export interface SkillInfo {
    label: string;
    items: SkillItem[];
};



export interface SkillCategory {
    language: SkillInfo;
    backend: SkillInfo;
    frontend: SkillInfo;
    tools: SkillInfo;
    devops: SkillInfo;
    api: SkillInfo;
};

// Experience Section
export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
};

export interface Welcome {
    text: string;
}