import { LucideIcon, Github, Linkedin, Mail } from "lucide-react";

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
  images?: string[]; // Multiple images for carousel
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

export type CyberCert = {
  title: string;
  issuer: string;
  status: "In Progress" | "Completed";
  description: string;
  date?: string;
  url?: string;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: Stat[] = [
  {
    label: "Featured projects",
    value: "7",
    helper: "30+ builds, prototypes, and learning",
  },
  { label: "Availability", value: "Seeking new work", helper: "Full time" },
  { label: "Timezone", value: "CST (flex)", helper: "Async friendly" },
];

export const highlightTags = [
  "Frontend Developer",
  "Next.js + TypeScript",
  "Design Systems",
  "Performance-first",
  "Git & GitHub",
  "Biome & ESLint workflow",
];

export const projects: Project[] = [
  {
    title: "MealMuse",
    description:
      "MealMuse is a full-stack, AI-powered recipe discovery platform designed to help home cooks answer the daily question: 'What should I make for dinner?' The platform combines a clean, modern frontend with a scalable serverless backend, intelligent recipe generation, and a freemium subscription model.",
    impact:
      "Built an end-to-end SaaS with 125+ recipes, AI Chef chatbot (Groq Llama-3.1), recipe generation, and Stripe subscriptions. Architected serverless Lambda backend with MongoDB, integrated Spoonacular for daily recipe seeding, and designed a premium gating system.",
    tech: [
      "Next.js",
      "shadcn/ui",
      "TypeScript",
      "AWS Lambda",
      "MongoDB Atlas",
      "Groq API",
      "Stripe",
      "Spoonacular",
    ],
    image: "/projects/mealmuse.png",
    alt: "MealMuse recipe discovery",
    live: "https://mymealmuse.com",
    code: "https://github.com/kingkey0101/mealmuse-web",
  },
  {
    title: "Skinstric.ai(Internship project)",
    description:
      "Skinstric.ai is an interactive skincare assistant that helps users discover personalized skincare insights and explore products or routines, combining clean design with smooth API integration, and component architecture. This was a paid internship project.",
    impact:
      "Utilized react-webcam and converted to base64, transformed data to visual using ChartJS, Showcased ability to convert Figma‑style designs into pixel‑perfect, production‑ready UI ",
    tech: [
      "React.js",
      "Tailwind",
      "react-webcam",
      "base64",
      "Axios",
      "ChartJS",
      "Figma",
      "Vercel",
    ],
    image: "/projects/skinstric.png",
    alt: "skinstric.ai",
    live: "https://skinstric-ai-two.vercel.app/",
    code: "https://github.com/kingkey0101/Skinstric-ai",
  },
  {
    title: "Summarist",
    description:
      "Summarist is a clean, modern web application that delivers concise, high‑quality book summaries through a fast and intuitive reading experience. The project focuses on performance, accessibility, and reusable component architecture",
    impact:
      "Demonstrated strong frontend fundamentals through clean architecture, modular code, and predictable state management, Implemented a full code‑quality pipeline using Biome, TypeScript, Husky, and GitHub Actions",
    tech: [
      "Next.js",
      "Firebase",
      "TailwindCSS",
      "TypeScript",
      "Biome",
      "Type-Checking",
      "GitHub Actions CI pipeline",
      "Husky",
    ],
    image: "/projects/summarist.png",
    alt: "Book summaries",
    live: "https://summarist-inky.vercel.app/",
    code: "https://github.com/kingkey0101/Summarist",
  },
  {
    title: "SplitR",
    description:
      "SplitR is a clean, intuitive web application designed to make splitting bills and tracking shared expenses effortless. Built with a modern Next.js architecture, the app focuses on clarity, simplicity, and real‑world usability, allowing users to quickly enter amounts, assign participants, and calculate fair splits with zero friction.",
    impact:
      "Built a fast, intuitive bill‑splitting interface that reduces user friction and improves clarity, fully responsive, accessible UI optimized for mobile and desktop ",
    tech: ["Next.js", "Convex", "Clerk", "Shadcn/ui", "ChartJS"],
    image: "/projects/SplitR.png",
    alt: "SplitR logo",
    live: "https://split-r.vercel.app/",
    code: "https://github.com/kingkey0101/SplitR",
  },
  {
    title: "FlickFinder",
    description:
      "FlickFinder is a sleek, interactive movie discovery app that helps users explore trending films, search for titles, and view detailed movie information through a clean and engaging interface. Built with React and modern UI patterns, the app focuses on speed, clarity, and user‑friendly navigation, making it easy to browse and find something to watch.",
    impact:
      "Built a responsive movie discovery interface with fast search and intuitive navigation, Integrated external APIs with robust loading and error handling for a smooth user experience",
    tech: ["React.js", "Axios", "Tailwind"],
    image: "/projects/FlickFinder (2).png",
    alt: "FlickFinder movie list",
    live: "https://flick-finder-react.vercel.app/",
    code: "https://github.com/kingkey0101/FlickFinder-React",
  },
  {
    title: "Ultraverse-NFT Marketplace(Internship project)",
    description:
      "Ultraverse is a responsive NFT marketplace project developed during an internship. It focuses on exploring real-world frontend development practices: component architecture, responsive UI design, and data-driven rendering. This was an internship project.",
    impact:
      "Built reusable, scalable components that streamlined UI development and reduced duplicate code",
    tech: ["React", "TypeScript", "PWA", "Maps"],
    image: "/projects/ultraverseNFT.png",
    alt: "Ultraverse NFT Marketplace",
    live: "https://keylan-internship.vercel.app/",
    code: "https://github.com/kingkey0101/Keylan-internship",
  },
  {
    title: "Netflix-Clone",
    description:
      "Netflix Clone is a responsive prototype replicating the Netflix login experience and grid layout. It highlights modern UI composition, responsive design, and component reusability in a simplified authentication context.  Implemented a Vite + React frontend, React Router for client routing, and Firebase Auth for secure sign‑in flows; deployed on Vercel and audited with Lighthouse.",
    impact:
      "A responsive Netflix‑style authentication UI and grid with reusable modular components, client routing, and Firebase‑backed auth.",
    tech: ["React.js", "TailwindCSS", "JavaScript"],
    image: "/projects/netflix.png",
    alt: "SeaKing prompt",
    live: "https://netflix-clone-jet-phi.vercel.app/",
    code: "https://github.com/kingkey0101/Netflix-Clone",
  },
  {
    title: "Chromebook to Kali Linux Workstation",
    description:
      "Converted a locked Chromebook into a hardened Kali Linux cybersecurity workstation through custom firmware installation, driver configuration, system hardening, and comprehensive security validation. This project demonstrates hands-on Linux administration, low-level hardware troubleshooting, network security implementation, and systematic debugging—core skills for IT support, system administration, and cybersecurity roles.",
    impact:
      "Successfully transformed restricted hardware into a fully functional security testing platform. Configured kernel modules for WiFi/Bluetooth, implemented privacy-focused DNS and VPN routing, hardened the system against telemetry and IPv6 leaks, validated firewall rules with iptables/nftables, performed packet capture analysis with tcpdump, and resolved complex systemd, APT, PATH, disk usage, and inode exhaustion issues. Demonstrated ability to troubleshoot at the kernel, network, and application layers.",
    tech: [
      "Kali Linux",
      "UEFI Firmware (MrChromebox)",
      "Bash",
      "systemd",
      "iptables/nftables",
      "ProtonVPN",
      "tcpdump",
      "Wireshark",
      "DNS Hardening",
      "Kernel Modules",
      "APT/dpkg",
      "Hardware Debugging",
    ],
    image: "/projects/kali-chromebook-1.jpg",
    images: [
      "/projects/kali-chromebook-1.jpg",
      "/projects/kali-chromebook-2.jpg",
      "/projects/kali-chromebook-3.jpg",
      "/projects/kali-chromebook-4.jpg",
      "/projects/kali-chromebook-5.jpg",
    ],
    alt: "Kali Linux on Chromebook - Hardware conversion process",
    live: "",
    code: "",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    accent: "text-blue-300",
    items: [
      "React/Next.js",
      "JavaScript/TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "ChartJS",
      "Accessibility",
      "Figma",
    ],
  },
  {
    label: "Product & UX",
    accent: "text-cyan-300",
    items: ["Rapid prototyping", "User flows", "Analytics"],
  },
  {
    label: "Backend & Ops",
    accent: "text-purple-300",
    items: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS CloudWatch",
      "APIs & Webhooks",
      "CI/CD",
      "Clerk",
      "Firebase",
    ],
  },
  {
    label: "AI & Data",
    accent: "text-amber-300",
    items: ["Prompt tooling", "Integrated AI‑assisted workflows", "Groq API"],
  },
  {
    label: "Security & Systems",
    accent: "text-emerald-300",
    items: [
      "Linux",
      "SSH / SSH Keys",
      "UFW / Fail2Ban",
      "Bash",
      "Networking (DNS, DHCP, TCP/IP)",
      "Subnetting",
      "SIEM Basics",
      "Incident Response",
      "Wireshark (basic)",
      "Nmap (basic)",
    ],
  },
];

export const cyberCertifications: CyberCert[] = [
  {
    title: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM via Coursera",
    status: "In Progress",
    description:
      "Comprehensive program covering security fundamentals, threat intelligence, incident response, network security, and compliance frameworks.",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Completed",
    description:
      "Foundational course covering cybersecurity concepts, threat landscape, risk management, and basic security principles.",
      url: '/certs/Cisco-intro-to-cybersecurity.pdf'
  },
  {
    title: "TryHackMe Pre‑Security",
    issuer: "TryHackMe",
    status: "Completed",
    description:
      "Hands-on learning path covering Linux fundamentals, networking basics, web application security, and introductory penetration testing.",
      url: '/certs/THM-pre-security-certification.pdf'
  },
  {
    title: "OverTheWire Bandit",
    issuer: "OverTheWire",
    status: "Completed",
    description:
      "Command-line security challenges focused on Linux commands, file permissions, SSH, and basic security principles through practical wargames.",
  },
  {
    title: "Configure and Test Basic Network Connectivity",
    issuer: "Coursera",
    status: "Completed",
    description:
      "Practical course covering network configuration, connectivity testing, troubleshooting, and basic network administration tasks.",
      url: '/certs/Coursera Configure and test basic network connectivity.pdf'
  },
];

export const socials: SocialLink[] = [
  { href: "https://github.com/kingkey0101", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/keylan-king-12116835a/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:kingkey0101@outlook.com", label: "Email", icon: Mail },
];
