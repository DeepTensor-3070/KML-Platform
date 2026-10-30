
export const siteConfig = {
    name: "KRIVA",
    fullName: "Kriva - The Machine Learning Society",
    tagline: "Create. Learn. Evolve.",
    description:
        "A community of innovators, developers and researchers exploring Artificial Intelligence and Machine Learning.",
    logo: "/brand/kml-logo.png",
};

export const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Projects", href: "/projects" },
];


export const domains = [
    {
        number: "01",
        title: "Machine Learning",
        description:
            "Explore algorithms, intelligent models, predictive systems and applied machine learning.",
        icon: "brain",
    },
    {
        number: "02",
        title: "Web Development",
        description:
            "Design and develop modern, scalable web applications using frontend, backend and full-stack technologies.",
        icon: "code",
    },
    {
        number: "03",
        title: "Data Structures & Algorithms",
        description:
            "Strengthen problem-solving skills through data structures, algorithmic thinking and competitive programming.",
        icon: "binary",
    },
    {
        number: "04",
        title: "Generative AI",
        description:
            "Experiment with LLMs, generative systems, RAG and agentic applications.",
        icon: "sparkles",
    },
    {
        number: "05",
        title: "Computer Vision",
        description:
            "Build intelligent systems that understand images, videos and the visual world.",
        icon: "eye",
    },
    {
        number: "06",
        title: "Robotics & Innovation",
        description:
            "Connect intelligent software with automation, embedded systems and real-world applications.",
        icon: "bot",
    },
];



export const teamStructure = [
    "Faculty Coordinators",
    "Executive Board",
    "Core Coordinators",
    "Domain Leads",
    "Club Members",
];

export type EventPreview = {
    title: string;
    category: string;
    description: string;
    dateLabel: string;
    href: string;
};

export type ProjectPreview = {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    github?: string;
};

export const featuredEvents: EventPreview[] = [];

export const featuredProjects: ProjectPreview[] = [];
