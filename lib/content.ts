import { LucideIcon, Github, Linkedin, Mail, Twitter } from "lucide-react";

export type Stat = {
    label: string;
    value: string;
    helper?: string;
};

export type Project = {
    title: string;
    description: string;
    impact: string;
    tech: string[];
    image: string;
    alt: string;
    live: string;
    code: string;
};

export type SkillGroup = {
    label: string;
    accent: string;
    items: string[];
};

export type SocialLink = {
    href: string;
    label: string;
    icon: LucideIcon;
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export const heroStats: Stat[] = [
    { label: "Featured projects", value: "6", helper: "30+ builds, prototypes, and learning" },
    { label: "Availability", value: "Seeking new work", helper: "Full time" },
    { label: "Timezone", value: "CST (flex)", helper: "Async friendly" },
];

export const highlightTags = [
    "Frontend Developer",
    "Next.js + TypeScript",
    "Design Systems",
    "Performance-first",
    "Git & GitHub", 
    "Biome & ESLint workflow"
];

export const projects: Project[] = [
    {
        title: "Skinstric.ai(Internship project)",
        description:
            "Skinstric.ai is an interactive skincare assistant that helps users discover personalized skincare insights and explore products or routines, combining clean design with smooth API integration, and component architecture. This was a paid internship project.",
        impact: "Utilized react-webcam and converted to base64, transformed data to visual using ChartJS, Showcased ability to convert Figma‑style designs into pixel‑perfect, production‑ready UI ",
        tech: ["React.js", "Tailwind", "react-webcam", "base64", "Axios", "ChartJS", "Figma", "Vercel"],
        image:
            "/projects/skinstric.png",
        alt: "skinstric.ai",
        live: "https://skinstric-ai-two.vercel.app/",
        code: "https://github.com/kingkey0101/Skinstric-ai",
    },
    {
        title: "Summarist",
        description:
            "Summarist is a clean, modern web application that delivers concise, high‑quality book summaries through a fast and intuitive reading experience. The project focuses on performance, accessibility, and reusable component architecture",
        impact: "Demonstrated strong frontend fundamentals through clean architecture, modular code, and predictable state management, Implemented a full code‑quality pipeline using Biome, TypeScript, Husky, and GitHub Actions",
        tech: ["Next.js", "Firebase", "TailwindCSS", "TypeScript", "Biome", "Type-Checking", "GitHub Actions CI pipeline", "Husky"],
        image:
            "/projects/summarist.png",
        alt: "Book summaries",
        live: "https://summarist-inky.vercel.app/",
        code: "https://github.com/kingkey0101/Summarist",
    },
    {
        title: "SplitR",
        description:
            "SplitR is a clean, intuitive web application designed to make splitting bills and tracking shared expenses effortless. Built with a modern Next.js architecture, the app focuses on clarity, simplicity, and real‑world usability, allowing users to quickly enter amounts, assign participants, and calculate fair splits with zero friction.",
        impact: "Built a fast, intuitive bill‑splitting interface that reduces user friction and improves clarity, fully responsive, accessible UI optimized for mobile and desktop ",
        tech: ["Next.js", "Convex", "Clerk", "Shadcn/ui", "ChartJS"],
        image:
            "/projects/splitr.png",
        alt: "SplitR logo",
        live: "https://split-r.vercel.app/",
        code: "https://github.com/kingkey0101/SplitR",
    },
    {
        title: "FlickFinder",
        description:
            "FlickFinder is a sleek, interactive movie discovery app that helps users explore trending films, search for titles, and view detailed movie information through a clean and engaging interface. Built with React and modern UI patterns, the app focuses on speed, clarity, and user‑friendly navigation, making it easy to browse and find something to watch.",
        impact: "Built a responsive movie discovery interface with fast search and intuitive navigation, - Integrated external APIs with robust loading and error handling for a smooth user experience",
        tech: ["React.js", "Axios", "Tailwind", ""],
        image:
            "/projects/FlickFinder (2).png",
        alt: "FlickFinder movie list",
        live: "https://flick-finder-react.vercel.app/",
        code: "https://github.com/kingkey0101/FlickFinder-React",
    },
    {
        title: "Ultraverse-NFT Marketplace(Internship project)",
        description:
            "Ultraverse is a responsive NFT marketplace project developed during an internship. It focuses on exploring real-world frontend development practices: component architecture, responsive UI design, and data-driven rendering. This was an internship project.",
        impact: "- Built reusable, scalable components that streamlined UI development and reduced duplicate code",
        tech: ["React", "TypeScript", "PWA", "Maps"],
        image:
            "/projects/ultraverseNFT.png",
        alt: "Ultraverse NFT Marketplace",
        live: "https://keylan-internship.vercel.app/",
        code: "https://github.com/kingkey0101/Keylan-internship",
    },
    {
        title: "SeaKing",
        description:
            "SeeKing is a clean, responsive full-stack Next.js web app built to help users explore and learn by getting answers from A.I. Smooth navigation, fast loading and modern UI, it demonstrates my ability to build API-driven React apps, manage routing in Next.js, and design intuitive interfaces using Tailwindcss. (Deepseek clone)",
        impact: "Delivered a fast, intuitive search experience with clean UI, responsive design, and clear result presentation.",
        tech: ["Next.js", "TailwindCSS"],
        image:
            "/projects/seaking.png",
        alt: "SeaKing prompt",
        live: "https://seeking-rust.vercel.app/",
        code: "https://github.com/kingkey0101/SeeKing",
    },
];

export const skillGroups: SkillGroup[] = [
    {
        label: "Frontend",
        accent: "text-blue-300",
        items: ["React/Next.js", "TypeScript", "TailwindCSS", "Design Systems", "Shadcn/ui", "ChartJS", "Accessibility", "Firebase", "Figma"],
    },
    {
        label: "Product & UX",
        accent: "text-cyan-300",
        items: ["Rapid prototyping", "User flows", "Analytics"],
    },
    {
        label: "Backend & Ops",
        accent: "text-purple-300",
        items: ["Node/Express", "APIs & Webhooks", "CI/CD", "Clerk"],
    },
    {
        label: "AI & Data",
        accent: "text-amber-300",
        items: ["Prompt tooling", "Integrated AI‑assisted workflows"],
    },
];

export const socials: SocialLink[] = [
    { href: "https://github.com/kingkey0101", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/keylan-king-12116835a/", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:kingkey0101@outlook.com", label: "Email", icon: Mail },
];
