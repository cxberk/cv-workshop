export interface Experience {
    id: string;
    userId: string;
    title: string;
    company: string;            // Company name
    role: string;
    startDate: string;           // ISO date string, e.g. "2025-06-03"
    endDate: string | null;      // ISO date string or null
    description: string;
    imageUrl: string | null;
}

export interface User {
    id: string;
    name: string;
    birthDate: string;           // ISO date string, e.g. "1990-06-15"
    address: string;
    phone: string;
    linkedInUrl: string | null;
    description: string;
    university: string;
    skills: string;              // semicolon-separated list, e.g. "JavaScript;React;CSS;HTML"
    imageUrl: string | null;
    experiences?: Experience[];  // populated when you fetch a user with their experiences
}
