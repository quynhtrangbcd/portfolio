import { ExperienceItem, ProjectItem, SkillItem, TestimonialItem } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nguyen-thi-quynh-trang-69bb46160/",
  email: "quynhtrang.bcd@gmail.com",
  github: "#",
  certification: "https://edu.google.accredible.com/bb045c47-bd5f-4611-8f63-e87049a79a6a#acc.5eXs6RVZ"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: "Business Analyst",
    company: "AI Camera System (MBBank/Office)",
    period: "11/2025 - Present",
    description: "Developing AI Camera system featuring Face Recognition (FaceID) and License Plate Recognition (LPR) integrated with automated barrier gates for seamless access control.",
    achievements: [
      "Analyzed requirements regarding accuracy threshold and recognition speed of AI models under various lighting conditions.",
      "Designed specialized Test Cases for AI: testing against spoofing attacks, different facial angles, and weather conditions.",
      "Implemented Multi-Factor Authentication (Face + Fingerprint/Card) and configured door sensor logic for authorized personnel.",
      "Built multi-layer security system for Bank Vaults integrating FaceID AI Cameras with Door Sensors."
    ]
  },
  {
    id: '2',
    role: "Business Analyst",
    company: "BA Workflow Optimization with Gen AI",
    period: "11/2025 - Present",
    description: "Internal project aiming to standardize workflows and automate technical documentation processes for the Product team.",
    achievements: [
      "Developed standardized Prompt Library to automatically convert Meeting Minutes into detailed SRS, BRD, User Stories and Acceptance Criteria.",
      "Leveraged Gen AI to generate Mock Data covering comprehensive edge cases for UAT process.",
      "Reduced SRS documentation time by 40%, enabling early requirement handover to Development team."
    ]
  },
  {
    id: '3',
    role: "Business Analyst",
    company: "Accounting & Warehouse Data Entry Automation",
    period: "07/2025 - 11/2025",
    description: "Solved data synchronization issues across two disparate systems lacking centralized Master Data, where product names on vendor invoices differed from internal records.",
    achievements: [
      "Engineered Intelligent Fuzzy Matching Algorithm to map unstructured vendor product names to internal SKUs based on text similarity.",
      "Designed automated workflow: auto-select existing product code when match found, auto-generate new code when no match.",
      "Orchestrated financial data flow: auto-captured Price & Tax from invoices to generate accounting entries after Warehouse verification.",
      "Optimized operational workload by 70%, eliminating manual data entry bottlenecks."
    ]
  },
  {
    id: '4',
    role: "Business Analyst",
    company: "CMC In-house Core ERP System",
    period: "04/2025 - 03/2026",
    description: "Built comprehensive in-house ERP system from scratch to replace fragmented legacy software, addressing specific business challenges.",
    achievements: [
      "Analyzed cross-functional data flows between Business Department and Project Management teams to design Database Schema.",
      "Integrated Gen AI APIs to automatically summarize support tickets and suggest response templates for CS department.",
      "Increased order processing speed by 30% by eliminating redundant manual data entry."
    ]
  },
  {
    id: '5',
    role: "Business Analyst",
    company: "Odoo ERP Implementation Projects",
    period: "01/2022 - 03/2025",
    description: "Led multiple Odoo ERP implementations for Manufacturing & Trading companies including Haca Seafood (Processing), AOT (Automotive), QD.Tek (Tech Trading), and HaMo (Spa Chain).",
    achievements: [
      "Successfully mapped complex production traceability workflow (truy xuất nguồn gốc) required for export standards at Haca Seafood.",
      "Unified Sales, Inventory, and Accounting modules compliant with Circular 200 (TT200) for 4+ enterprises.",
      "Overcame user resistance in traditional environments by designing role-based training programs and simplified user manuals.",
      "Created Business Blueprint Documents (BBD) and Software Requirement Specifications (SRS) for all projects."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: "AI Camera System for Access Control & Security",
    category: "AI/IoT Security",
    problem: "Banks and offices needed advanced access control with AI-powered face recognition and license plate detection under various conditions.",
    solution: "Developed FaceID and LPR system integrated with barrier gates, implemented multi-layer security for bank vaults with door sensors.",
    outcome: "Deployed real-time alert system with Multi-Factor Authentication, strict monitoring of vault opening/closing procedures.",
    tags: ["Computer Vision", "IoT", "SQL", "Real-time Alert", "FaceID", "LPR"]
  },
  {
    id: 'p2',
    title: "BA Workflow Optimization with Generative AI",
    category: "Process Automation",
    problem: "Manual conversion of meeting minutes to technical documentation (SRS, BRD, User Stories) was time-consuming and inconsistent.",
    solution: "Created standardized Prompt Library for auto-generating documentation, leveraged Gen AI for comprehensive mock data generation.",
    outcome: "Reduced SRS documentation time by 40%, improved UAT process with edge-case coverage.",
    tags: ["Gen AI", "Prompt Engineering", "SRS", "BRD", "UAT"]
  },
  {
    id: 'p3',
    title: "Accounting & Warehouse Automation",
    category: "Data Integration",
    problem: "Two disparate systems with no centralized Master Data; vendor product names differed from internal records causing manual bottlenecks.",
    solution: "Engineered Fuzzy Matching Algorithm for product mapping, designed auto-workflow for product code selection/generation.",
    outcome: "Optimized operational workload by 70%, ensured real-time consistency between Inventory and Accounting.",
    tags: ["Fuzzy Matching", "Data Mapping", "Automation", "Workflow Design"]
  },
  {
    id: 'p4',
    title: "CMC In-house Core ERP System",
    category: "ERP Development",
    problem: "Fragmented legacy software couldn't address specific business challenges; needed unified system from scratch.",
    solution: "Designed Database Schema for cross-functional data flows, integrated Gen AI APIs for support ticket summarization.",
    outcome: "Increased order processing speed by 30% by eliminating redundant manual data entry.",
    tags: ["ERP", "Database Design", "Gen AI", "System Integration"]
  },
  {
    id: 'p5',
    title: "Odoo ERP Implementation (Multi-Industry)",
    category: "ERP Optimization",
    problem: "Clients across seafood processing, automotive, tech trading, and spa industries needed compliant ERP solutions (TT200).",
    solution: "Mapped production traceability workflows, unified Sales/Inventory/Accounting modules, designed role-based training programs.",
    outcome: "Successfully implemented for 4+ enterprises with full compliance to Circular 200 standards.",
    tags: ["Odoo", "TT200", "Traceability", "Change Management", "Training"]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Business Analysis & ERP
  { name: "ERP Implementation & Optimization (Odoo)", level: 95, category: "Analysis" },
  { name: "Business Process Re-engineering (BPR)", level: 90, category: "Analysis" },
  { name: "Requirement Elicitation (BRD/SRS/User Stories)", level: 95, category: "Analysis" },
  { name: "Gap Analysis & Solution Design", level: 90, category: "Analysis" },

  // Data & System Integration
  { name: "Data Mapping & Synchronization", level: 85, category: "Technical" },
  { name: "System Integration (API & Database)", level: 85, category: "Technical" },
  { name: "Data Privacy & Compliance", level: 80, category: "Technical" },
  { name: "SQL (Basic/Intermediate)", level: 70, category: "Technical" },

  // Tools & Technology
  { name: "BPMN 2.0, Visio, Draw.io, Bizagi", level: 90, category: "Tools" },
  { name: "Jira & Confluence", level: 90, category: "Tools" },
  { name: "Excel (Advanced)", level: 95, category: "Tools" },
  { name: "AI Tools (ChatGPT, Gemini)", level: 85, category: "Tools" },

  // Soft Skills
  { name: "Stakeholder Management", level: 90, category: "Soft Skills" },
  { name: "End-user Training & Knowledge Transfer", level: 95, category: "Soft Skills" },
  { name: "Cross-functional Communication", level: 90, category: "Soft Skills" },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [];